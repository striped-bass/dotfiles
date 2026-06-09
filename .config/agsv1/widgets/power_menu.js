import { NierButton } from "../nier/buttons.js";
import { assetsDir } from "../util.js";

const {exec} = Utils;

export const PowerGroup = ({
  go_to = async (buttons, parent_button) => {},
  passAssetsDir = assetsDir
  
}) => {
  return [
    NierButton({
      useAssetsDir: passAssetsDir,
      label: "Shutdown",
      handleClick: () => {
        exec(
          `bash -c "poweroff"`
        )
      } 
    }),
    NierButton({
        useAssetsDir: passAssetsDir,
        label: "Reboot",
        handleClick: () => {
          exec(
            `bash -c "reboot"`
          )
      }
    }),
    NierButton({
        useAssetsDir: passAssetsDir,
        label: "Logout",
        handleClick: () => {
          exec(
            `hyprctl dispatch exit`
          )
      }
    }),
  ];
};
