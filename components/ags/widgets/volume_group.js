import { Audio, Variable } from "../imports.js";
import { NierButton } from "../nier/buttons.js";
import { NierSliderButton } from "../nier/slider.js";
import { button_label_2, button_slider_width } from "../scaling.js";
import { assetsDir } from "../util.js";

let volume_slider = ({ volume_ratio = 0, type = "speaker", stream = null, useAssetsDir }) =>
  NierSliderButton({
    useAssetsDir,
    label: stream ? stream.description : type,
    boxes: button_slider_width,
    font_size: button_label_2,
    ratio: volume_ratio,
    connections: [
      [
        Audio,
        (self) => {
          volume_ratio.setValue(
            stream ? stream.volume || 0 : Audio[type]?.volume || 0
          );
        },
        `${type}-changed`,
      ],
      [
        volume_ratio,
        (self) => {
          if (
            Math.round(
              stream ? stream.volume || 0 : Audio[type].volume * 100
            ) == Math.round(volume_ratio.value * 100)
          ) {
            return;
          }
          if (stream) {
            stream.volume = volume_ratio.value;
          } else {
            Audio[type].volume = volume_ratio.value;
          }
        },
      ],
    ],
  });

export const VolumeGroup = ({
  go_to = async (buttons, parent_button) => {},
  volume_ratio = Variable(0.0, {}),
  mic_volume_ratio = Variable(0.0, {}),
  passAssetsDir = assetsDir
}) => {
  return [
    volume_slider({useAssetsDir: passAssetsDir, type: "Speaker", volume_ratio: volume_ratio }),
    volume_slider({useAssetsDir: passAssetsDir, type: "Microphone", volume_ratio: mic_volume_ratio }),
    NierButton({
      useAssetsDir: passAssetsDir,
      label: "Applications",
      font_size: button_label_2,
      vpack: "end",
      handleClick: async (self, event) => {
        await go_to(
          [
            ...Array.from(Audio.apps).map((stream) => {
              console.log(stream);
              return volume_slider({
                useAssetsDir: passAssetsDir,
                stream: stream,
                volume_ratio: Variable(stream.volume || 0, {}),
              });
            }),
          ],

          self
        );
      },
    }),
    ...Array.from(Audio.speakers).map((stream) => {
      console.log(stream);
      return volume_slider({
        useAssetsDir: passAssetsDir,
        stream: stream,
        volume_ratio: Variable(stream.volume || 0, {}),
      });
    }),

    ...Array.from(Audio.microphones).map((stream) => {
      console.log(stream);
      return volume_slider({
        useAssetsDir: passAssetsDir,
        stream: stream,
        volume_ratio: Variable(stream.volume || 0, {}),
      });
    }),
  ];
};