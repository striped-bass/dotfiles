import { NierButton } from "../nier/buttons.js";
import { assetsDir } from "../util.js";

const {exec, execAsync} = Utils;

export const PowerGroup = ({
  go_to = async (buttons, parent_button) => {},
  passAssetsDir = assetsDir
  
}) => {
  return [
    NierButton({
      useAssetsDir: passAssetsDir,
      label: "Shutdown",
      handleClick: () => {
        execAsync(
          ["bash","-c","hyprctl dispatch 'hl.exec_cmd(\"hyprshutdown -t Shutdown... -p poweroff\")'"]
        )
      } 
    }),
    NierButton({
        useAssetsDir: passAssetsDir,
        label: "Reboot",
        handleClick: () => {
          execAsync(
            ["bash","-c","hyprctl dispatch 'hl.exec_cmd(\"hyprshutdown -t Reboot... -p reboot\")'"]
          )
      }
    }),
    NierButton({
        useAssetsDir: passAssetsDir,
        label: "Logout",
        handleClick: () => {
          execAsync(
            ["bash","-c","hyprctl dispatch 'hl.exec_cmd(\"hyprshutdown -t Logout...\")'"]
          )
      }
    }),
  ];
};
