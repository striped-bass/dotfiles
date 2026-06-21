// importing
import {
  App,
  Widget,
  Utils,
  Battery
} from "./imports.js";

App.addIcons(`${App.configDir}/assets`);

import { arradd, arrremove, css, scss, dark, themedir,SCREEN_WIDTH, SCREEN_HEIGHT} from "./util.js";
import { Workspaces } from "./widgets/workspace.js";
import { top_icon_size, top_spacing } from "./scaling.js";

const { exec, execAsync } = Utils;
const { Box, Window, Button, Icon, Scrollable, Label } = Widget;


Utils.writeFile(`$screen_width:${SCREEN_WIDTH}px;$screen_height:${SCREEN_HEIGHT}px;`,`${App.configDir}/style/data.scss`).then(() => {
  print("wrote ",`${App.configDir}/style/data.scss`,`$screen_width:${SCREEN_WIDTH}px;$screen_height:${SCREEN_HEIGHT}px;`)
  exec(`sassc ${scss} ${css}`);
}).catch(print);

const WHICH = "nier";
globalThis.WHICH = WHICH;

let top_bar_height = 0;

execAsync(`agsv1 -b settings -c ${App.configDir}/windows/settings/settings.js`);

dark.connect("changed", () => {
  print("dark changed",dark.value);
  let colors_css_path = `${App.configDir}/style/color.scss`;
  let colors_css = Utils.readFile(`${App.configDir}/style/color-${dark.value?'dark':'light'}.scss`)
  Utils.writeFile(colors_css,colors_css_path).then(() => {
    exec(`sassc ${scss} ${css}`);
    App.resetCss();
    App.applyCss(css);
    print("done")
  })
  .catch((e) => {
    print("error",e);
  });

  execAsync(`agsv1 -b notify -r dark.value=${dark.value}`).then(print);
  execAsync(`agsv1 -b settings -r dark.value=${dark.value}`).then(print);

  let hyprconf = Utils.readFile(`${themedir}/hyprland.lua`);
  if (dark.value) {
    hyprconf = hyprconf.replaceAll("light","dark");
  } else {
    hyprconf = hyprconf.replaceAll("dark","light");
  }

  Utils.writeFile(hyprconf,`${themedir}/hyprland.lua`).then(()=>{
    exec(`hyprctl reload`);
    print("reloaded hypr")
  }).catch((e) => print("error",e));

  Utils.timeout(1000,() => {
    execAsync(`hyprctl eval "hl.monitor({ output = 'DP-1', reserved_area = { top = ${top_bar_height}, bottom = ${top_bar_height}, left = 0, right = 0 } })"`).then(print).catch(print);
  })

  let hyprlockconf = Utils.readFile(`${themedir}/hyprlock.conf`);
  if (dark.value) {
    hyprlockconf = hyprlockconf.replaceAll("light","dark");
  } else {
    hyprlockconf = hyprlockconf.replaceAll("dark","light");
  }

  Utils.writeFile(hyprlockconf,`${themedir}/hyprlock.conf`).then(()=>{
    print("reloaded hyprlock")
  }).catch((e) => print("error",e));

  Utils.timeout(1000,() => {
    execAsync(`hyprctl eval "hl.monitor({ output = 'DP-1', reserved_area = { top = ${top_bar_height}, bottom = ${top_bar_height}, left = 0, right = 0 } })"`).then(print).catch(print);
  })
  
  if (dark.value) {
    exec('bash -c "kill -SIGUSR1 $(pgrep -x foot) 2>/dev/null || true"');
  } else {
    exec('bash -c "kill -SIGUSR2 $(pgrep -x foot) 2>/dev/null || true"');
  }

})

execAsync(["bash","-c",`pkill dunst;agsv1 -b notify -c ${App.configDir}/windows/notifications/notifications.js`])

const top = () =>
  Box({
    vertical: true,
    hexpand: false,
    classNames: ["top"],
    children: [
      Box({
        spacing: top_spacing,
        hpack: "fill",
        classNames: ["yorha-left"],
        children: [
          Scrollable({
            classNames: ["workspaces-scroll"],
            child:Workspaces({}),
          }),
          
          Label({
            hpack: "end",
            hexpand: true,
            classNames: ["time"],
            label: "00:00",
            connections: [
              [
                1000,
                (self) =>
                  execAsync(["date", "+%I:%M"])
                    .then((date) => (self.label = date))
                    .catch(console.error),
              ],
            ],
          }),

          Label({
            hpack: "end",
            hexpand: true,
            classNames: ["battery-percent"],
            binds: [
              'label',
              Battery,
              'percent',
              percent => `${percent}%`,
            ],
            
            connections: [
                [
                  Battery,
                  (self) => self['label'] = `${Battery['percent']}%`,
                  'notify::percent',
                ],
            ],
          }),

          Button({
            hpack: "end",
            hexpand: true,
            className: "settings-button",
            child: Icon({
              size: top_icon_size,
              icon: `yorha-symbolic`,
              className: "yorha",
            }),
            setup: (button) => {
              button.connect("enter-notify-event" , (self) => {
                let right = button.parent.children[2];
                button.classNames = arradd(button.classNames, "hover");
                right.classNames = arradd(right.classNames, "hover");
              })
              button.connect("leave-notify-event" , (self) => {
                let right = button.parent.children[2];
                button.classNames = arrremove(button.classNames, "hover");
                right.classNames = arrremove(right.classNames, "hover");
              })
            },
            onClicked: () => {
              execAsync(`agsv1 -b settings -t settings`)
            },
          }),
        ],
      }),
    ],
    setup: (box) => Utils.timeout(1000,async() => {
      top_bar_height = box.get_allocation().height + 10;
      while (true) { // in a loop becauses if hyprland config is changed, it resets the reserved space
        execAsync(`hyprctl eval "hl.monitor({ output = 'DP-1', reserved_area = { top = ${top_bar_height}, bottom = ${top_bar_height}, left = 0, right = 0 } })"`).then(print).catch(print);
        await new Promise((r) => Utils.timeout(5000,r));
      }
    }),
  });

const TopBar = ({ monitor } = {}) => {
  return Window({
    name: `topbar`,
    monitor,
    margin: [0, 0],
    anchor: ["top", "left", "right"],
    exclusivity: "ignore",
    layer: "bottom",
    child: top(),
  });
};

App.config({
  style: css,
  windows: [
    TopBar(),
  ],
});