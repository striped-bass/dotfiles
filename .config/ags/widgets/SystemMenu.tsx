import app from "ags/gtk4/app"
import { Gdk, Gtk } from "ags/gtk4"
import { exec, execAsync } from "ags/process"
import { createState } from "ags"
import { ReverseFinalBarline } from "./ReverseFinalBarline"
import { readFile, readFileAsync, writeFileAsync } from "ags/file"

function LightButton() {

  let colors_scss = readFile("./style/colors/colors.scss");
  const [light, setLight] = createState(colors_scss.includes("light"))

  async function light_toggle() {
    setLight((v) => !v)
    // To-do: Add banner animation
    // exec(["bash","-c",`t -r dark.value=${!light()} && agsv1 -b banner -c ~/dotfiles/.config/agsv1/windows/banner/banner.js`]);

    let colors_scss = await readFileAsync("./style/colors/colors.scss");
    
    if (light()) {
      colors_scss = colors_scss.replaceAll("dark","light");
    } else {
      colors_scss = colors_scss.replaceAll("light","dark");
    }

    await writeFileAsync("./style/colors/colors.scss",colors_scss);
    await execAsync("sass ./style/style.scss ./style/style.css");
    app.reset_css();
    app.apply_css("./style/style.css");

    if (light()) {
      await execAsync(["bash","-c","kill -SIGUSR2 $(pgrep -x foot) 2>/dev/null || true"]);
    } else {
      await execAsync(["bash","-c","kill -SIGUSR1 $(pgrep -x foot) 2>/dev/null || true"]);
    }

    let hyprconf = await readFileAsync("../hypr/hyprland.lua");
    
    if (light()) {
      hyprconf = hyprconf.replaceAll("dark","light");
    } else {
      hyprconf = hyprconf.replaceAll("light","dark");
    }
    await writeFileAsync("../hypr/hyprland.lua",hyprconf)
    await execAsync("hyprctl reload");

    let hyprlockconf = await readFileAsync("../hypr/hyprlock.conf");
    if (light()) {
        hyprlockconf = hyprlockconf.replaceAll("dark","light");
    } else {
        hyprlockconf = hyprlockconf.replaceAll("light","dark");
    }
    await writeFileAsync("../hypr/hyprlock.conf",hyprlockconf)
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

export function SystemMenu({
    gdkmonitor,
    border_unit_count,
    }:{
    gdkmonitor: Gdk.Monitor
    border_unit_count: number,
    }) {
  const width = gdkmonitor.get_geometry().width;
  const border_unit_size = Math.floor(width/border_unit_count);

  return(
    <box 
      class = "SystemMenu"  
      orientation={Gtk.Orientation.VERTICAL}
      css={`padding-left:${border_unit_size}px;`}
    >
      <label
        label="System"
        class="Heading"
      />
      <box class="MenuContents">
        <ReverseFinalBarline/>
        <box orientation={Gtk.Orientation.VERTICAL}>
          <menubutton direction={Gtk.ArrowType.RIGHT}>
            <label label="⬛ Appearance"/>
            <popover has-arrow={false}>
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
              <popover has-arrow={false}>
                <box orientation={Gtk.Orientation.VERTICAL}>
                  <button
                    class="WorkspaceButton"
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
            <button onClicked={() => app.get_window("LeftSystemMenu").visible = false}>
              <label label="⬛ Back"/>
          </button>
          </box>
      </box>
    </box>
  )
}