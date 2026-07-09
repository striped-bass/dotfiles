import app from "ags/gtk4/app"
import { Gdk, Gtk } from "ags/gtk4"
import { exec, execAsync } from "ags/process"
import { createPoll } from "ags/time"
import Battery from "gi://AstalBattery"
import { createBinding, createState } from "ags"
import { ReverseFinalBarline } from "./ReverseFinalBarline"
import { WorkspaceButton } from "./Workspaces"
import { readFile, writeFile } from "ags/file"

function LightButton() {

  let colors_scss = readFile("./style/colors/colors.scss");
  const [light, setLight] = createState(colors_scss.includes("light"))

  function light_toggle() {
    setLight((v) => !v)

    exec(["bash","-c",`agsv1 -r dark.value=${!light()} && agsv1 -b banner -c ~/dotfiles/.config/agsv1/windows/banner/banner.js`]);

    let colors_scss = readFile("./style/colors/colors.scss");
    
    if (light()) {
      colors_scss = colors_scss.replaceAll("dark","light");
    } else {
      colors_scss = colors_scss.replaceAll("light","dark");
    }

    writeFile("./style/colors/colors.scss",colors_scss);
    exec("sass ./style/style.scss ./style/style.css");
    app.reset_css();
    app.apply_css("./style/style.css");

    if (light()) {
      exec(["bash","-c","kill -SIGUSR2 $(pgrep -x foot) 2>/dev/null || true"]);
    } else {
      exec(["bash","-c","kill -SIGUSR1 $(pgrep -x foot) 2>/dev/null || true"]);
    }

     let hyprconf = readFile("../hypr/hyprland.lua");
    
     if (light()) {
      hyprconf = hyprconf.replaceAll("dark","light");
    } else {
      hyprconf = hyprconf.replaceAll("light","dark");
    }
    writeFile("../hypr/hyprland.lua",hyprconf)
    exec("hyprctl reload");

    let hyprlockconf = readFile("../hypr/hyprlock.conf");
    if (light()) {
        hyprlockconf = hyprlockconf.replaceAll("dark","light");
    } else {
        hyprlockconf = hyprlockconf.replaceAll("light","dark");
    }
    writeFile("../hypr/hyprlock.conf",hyprlockconf)
  }
  const label = light((c) => light()?"Light":"Dark")

  return (
    
    <button
      onClicked={light_toggle}      
    >
      <label label={label}/>
    </button>
  )
}


function ShaderButton() {
  const [shader, setShader] = createState(true)

  function shader_toggle() {
    setShader((v) => !v)
    if (shader()) {
      execAsync(["bash","-c","hyprshade on gridlines"]);
    } else {
      execAsync(["bash","-c","hyprshade off"]);
    }

  }

  const label = shader((c) => shader()?"Shader On":"Shader Off")

  return (
    
    <button
      onClicked={shader_toggle}      
    >
      <label label={label}/>
    </button>
  )
}

export function Bar({
  gdkmonitor,
  border_unit_count,
  }:{
  gdkmonitor: Gdk.Monitor
  border_unit_count: number
  }) {

  const width = gdkmonitor.get_geometry().width;
  const border_unit_size = Math.floor(width/border_unit_count);
  const remainder = width % border_unit_size;
  const border_cap_width = border_unit_size + Math.floor(remainder/2);

  const time = createPoll("", 1000, () => Temporal.Now.plainDateTimeISO().toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
  }).replace(/ AM| PM/,"") );
  const battery = Battery.get_default();

  return(  
    <box class="Bar">
      <centerbox widthRequest={border_unit_size}>
        <image
            $type="center"
            iconName={createBinding(battery, "batteryIconName")}
            cssClasses={["icon"]}
            // $={(self) => {self.set_tooltip_text(createBinding(battery, "percentage").as(
                // (p) => `${Math.floor(p * 100)}%`)}}
        />
      </centerbox>
      
      <ReverseFinalBarline/>

      <box
          hexpand={true}
          homogeneous={true}
          spacing={25}
      >
        <menubutton>
          <box class="WorkspaceButton">
            <label
              class="LeftLabel"
              label="⏻"
              width-chars={3}
            />
            <label
              class="RightLabel"
              label="SYSTEM"
            />
          </box>
          <System/>
        </menubutton>

        <WorkspaceButton workspace_id={1}/>
        <WorkspaceButton workspace_id={2}/>
        <WorkspaceButton workspace_id={3}/>
        <WorkspaceButton workspace_id={4}/>
        <WorkspaceButton workspace_id={5}/>
            
      </box>
      <label
          widthRequest={border_cap_width}
          label={time}
      />
    </box>
  )
}

function System() {
  return(
    <popover 
      has-arrow={false}
      class="SystemPopover"
      $={(self) => {self.set_offset(-45,0)}}
    >
      <box orientation={Gtk.Orientation.VERTICAL}>
        <label
          label="SYSTEM"
          class="Heading"
        />
        <box>
          <ReverseFinalBarline/>
          <box orientation={Gtk.Orientation.VERTICAL}>
            <menubutton direction={Gtk.ArrowType.RIGHT}>
              <label label="⬛ Appearance"/>
              <popover
                has-arrow={false}
              >
                <box orientation={Gtk.Orientation.VERTICAL}>
                  <LightButton/>
                  <ShaderButton/>
                </box>
              </popover>
            </menubutton>
            <button>
              <label label="⬛ Sound"/>
            </button>
            <button>
              <label label="⬛ Wi-Fi"/>
            </button>
            <button>
              <label label="⬛ Bluetooth"/>
            </button>
            <menubutton direction={Gtk.ArrowType.RIGHT}>
              <label label="⬛ Power"/>
              <popover
                has-arrow={false}
              >
                <box orientation={Gtk.Orientation.VERTICAL}>
                  <button class="WorkspaceButton"
                    onClicked={() => execAsync(["bash","-c","hyprctl dispatch 'hl.exec_cmd(\"hyprshutdown -t Logout...\")'"])}
                  >
                    <label label="Logout"/>
                  </button>
                  <button
                    onClicked={() => execAsync(["bash","-c","hyprctl dispatch 'hl.exec_cmd(\"hyprshutdown -t Shutdown... -p poweroff\")'"])}
                  >
                    <label label="Shutdown"/>
                  </button>
                  <button
                    onClicked={() => execAsync(["bash","-c","hyprctl dispatch 'hl.exec_cmd(\"hyprshutdown -t Reboot... -p reboot\")'"])}
                  >
                    <label label="Reboot"/>
                  </button>
                </box>
              </popover>
            </menubutton>
          </box>
        </box>
      </box>
    </popover>
  )
}