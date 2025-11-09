import { Utils } from "../imports.js";
import { NierButton } from "../nier/buttons.js";
import { button_label_2 } from "../scaling.js";
import { dark } from "../util.js";

const { execAsync } = Utils;

const capitalize_first_letter = (val) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export const AppearanceGroup = ({
  passAssetsDir = assetsDir,
  passConfigDir = configDir
}) => {
  return [
    NierButton({
      useAssetsDir: passAssetsDir,
      label: capitalize_first_letter(dark.value?"dark":"light"),
      font_size: button_label_2,
      handleClick: async (self,event) => {
        execAsync(`ags -b settings -r App.closeWindow("settings")`)
        execAsync(`ags -b bg_settings -r App.closeWindow("bg_settings")`).catch(print).then(print)
        Utils.timeout(1100, () => {
          execAsync(`ags -b bg_settings -q`).catch(print).then(print)
        })
        await new Promise((r) => {setTimeout(r,1000)})
        execAsync(`ags -b banner -c ${passConfigDir + "/windows/banner/banner.js"}`)
      }
    })
  ];
};