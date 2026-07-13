import { Gdk, Gtk } from "ags/gtk4"
// import Hyprland from "gi://AstalHyprland"
// import { createBinding, createState } from "ags"

// // https://aylur.github.io/libastal/hyprland/method.Position.get_x.html
// function x_position() {
//   const [shader, setShader] = createState(true)

//   const position = Hyprland.position
//   const x_position = position.get_x()

//   const label = shader((c) => shader()?"Shader On":"Shader Off")

//   return (
//       <label label={label}/>
//   )
// }

// async function get_cursor() {
//   return Hyprland.sendMessage("cursorpos").then((res) => {
//     return res.split(",").map((n) => Number(n));
//   });
// }

export function Border({
  gdkmonitor,
  border_unit_count,
  css,
  }:{
  gdkmonitor: Gdk.Monitor
  border_unit_count: number,
  css: string
  }) {
  const width = gdkmonitor.get_geometry().width;
  const border_unit_size = Math.floor(width/border_unit_count);

  return(
    <box
      orientation={Gtk.Orientation.VERTICAL}
      hexpand={true}
      css={css}
    >
      <Gtk.Separator class="HorizontalSeparator"/>
      <centerbox class="BorderBox">
        <image
          $type="start"
          iconName="dots-0-symbolic"
          class="LeftCap"
          pixelSize={border_unit_size}
          hexpand={true}
          halign={Gtk.Align.END}
        />

        <box $type = "center">
          {Array.from({length: border_unit_count - 2},(_,i) => <image
            iconName={"dots-3-symbolic"}
            pixelSize={border_unit_size}
          />)}
        </box>

        <image
          $type = "end"
          iconName="dots-0-symbolic"
          class="RightCap"
          pixelSize={border_unit_size}
          hexpand={true}
          halign={Gtk.Align.START}
        />
      </centerbox>
    </box>
  )
}