import { NierButton } from "../nier/buttons.js";
import { button_label_2 } from "../scaling.js";
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
      font_size: button_label_2,
      handleClick: () => {
        exec(
          `bash -c "poweroff"`
        )
      } 
    }),
    NierButton({
        useAssetsDir: passAssetsDir,
        label: "Reboot",
        font_size: button_label_2,
        handleClick: () => {
          exec(
            `bash -c "reboot"`
          )
      }
    }),
    NierButton({
        useAssetsDir: passAssetsDir,
        label: "Logout",
        font_size: button_label_2,
        handleClick: () => {
          exec(
            `hyprctl dispatch exit`
          )
      }
    }),
  ];
};
