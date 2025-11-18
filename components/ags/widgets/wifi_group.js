import { Network, Variable } from "../imports.js";
import { NierDropDownButton } from "../nier/dropdown.js";
import { SCREEN_WIDTH, assetsDir } from "../util.js";

export const WifiGroup = ({
  enabled = Variable(Network.wifi.enabled ? "Yes" : "No", {}),
  current_ssid = Variable("", {}),
  current_networks = Variable(["loading..."], {}),
  go_to = (buttons, self) => {},
  passAssetsDir = assetsDir
}) => {
  return [
    NierDropDownButton({
      useAssetsDir: passAssetsDir,
      label: "Enabled",
      current: enabled,
      options: Variable(["Yes", "No"], {}),
      popup_x_offset: SCREEN_WIDTH / 4,
      connections: [
        [
          enabled,
          (self) => {
            Network.wifi.enabled = enabled.value == "YES";
          },
        ],
      ],
    }),
    NierDropDownButton({
      useAssetsDir: passAssetsDir,
      label: "Connect",
      current: current_ssid,
      options: current_networks,
      popup_x_offset: SCREEN_WIDTH / 4,
      connections: [
        [
          10000,
          (self) => {
            current_ssid.setValue(Network.wifi.ssid);
            Network.wifi.scan();
            let done = [];
            current_networks.setValue(
              // remove duplicates
              Array.from(Network.wifi.access_points)
                .map((ap) => ap.ssid)
                .filter((ssid) => {
                  if (done.includes(ssid)) {
                    return false;
                  }
                  done.push(ssid);
                  return true;
                })
            );
          },
        ],
      ],
    }),
  ];
};
