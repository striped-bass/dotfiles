import { Gdk, Gtk } from "ags/gtk4"

export function Border({gdkmonitor}:{gdkmonitor: Gdk.Monitor}) {
  const icon_count = 25;
  const icon_width = gdkmonitor.get_geometry().width / icon_count;

  return(
    <box orientation={Gtk.Orientation.VERTICAL}>
      <Gtk.Separator class="HorizontalSeparator"/>
      <centerbox class="BorderBox">
        <image
          $type="start"
          iconName="dots-0-symbolic"
          class="LeftCap"
          pixelSize={icon_width}
          hexpand={true}
          halign={Gtk.Align.END}
        />

        <box $type = "center">
            {Array.from({length: icon_count - 2},(_,i) => <image
            iconName={"dots-3-symbolic"}
            pixelSize={icon_width}
          />)}
        </box>

        <image
          $type = "end"
          iconName="dots-0-symbolic"
          class="RightCap"
          pixelSize={icon_width}
          hexpand={true}
          halign={Gtk.Align.START}
        />
      </centerbox>
    </box>
  )
}