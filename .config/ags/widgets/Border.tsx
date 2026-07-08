import { Gdk, Gtk } from "ags/gtk4"

export function Border({gdkmonitor}:{gdkmonitor: Gdk.Monitor}) {
  const width = gdkmonitor.get_geometry().width;
  const icon_count = 25;
  const icon_size = Math.floor(width/icon_count);

  return(
    <box
      orientation={Gtk.Orientation.VERTICAL}
      hexpand={true}
    >
      <Gtk.Separator class="HorizontalSeparator"/>
      <centerbox class="BorderBox">
        <image
          $type="start"
          iconName="dots-0-symbolic"
          class="LeftCap"
          pixelSize={icon_size}
          hexpand={true}
          halign={Gtk.Align.END}
        />

        <box $type = "center">
          {Array.from({length: icon_count - 2},(_,i) => <image
            iconName={"dots-3-symbolic"}
            pixelSize={icon_size}
          />)}
        </box>

        <image
          $type = "end"
          iconName="dots-0-symbolic"
          class="RightCap"
          pixelSize={icon_size}
          hexpand={true}
          halign={Gtk.Align.START}
        />
      </centerbox>
    </box>
  )
}