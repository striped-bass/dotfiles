import { Widget } from "../imports.js"
import { SCREEN_WIDTH, SCREEN_HEIGHT, get_cursor } from "../util.js"

const { Box, Icon, Scrollable } = Widget
const { round, abs } = Math

export const NierBorder = ({
    icon_width = SCREEN_WIDTH / 25,
    ratio = 0.5,
    ...props
}) => Scrollable({
    ...props,
    child:Box({
        classNames: ["nier-border-box"],
        children: Array.from({length: SCREEN_WIDTH/icon_width + 1},(_,i) => Icon({
            classNames: ["nier-border-icon"],
            icon: `nier-border-full-symbolic`,
            size: icon_width,
        })),
        connections: [
            [
                100,
                (self) => {
                    get_cursor()
                        .then((cursor) => {
                            let [x,] = cursor;
                            ratio = x / SCREEN_WIDTH;

                            let child_index = round((SCREEN_WIDTH/icon_width) * ratio);
                            self.children.forEach((child,j) => {
                            
                                if (j == child_index) {
                                    child.icon = `nier-border-symbolic`;
                                } else {
                                    child.icon = `nier-border-full-symbolic`;
                                }
                            })
                    })
                    .catch((e) => {
                        print(e)
                    })
                },
            ]
        ]
    })
})