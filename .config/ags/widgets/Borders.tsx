import app from "ags/gtk4/app"
import { Astal, Gdk, Gtk } from "ags/gtk4"

export function BorderBottom(gdkmonitor: Gdk.Monitor) {
  const { BOTTOM, LEFT, RIGHT } = Astal.WindowAnchor
  const count = 25;
  const width = gdkmonitor.get_geometry().width / count;

  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="border_bottom"
      class="BorderBottom"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={BOTTOM | LEFT | RIGHT}
      application={app}
    >
      <centerbox class="BorderBox">
        <image
          $type = "start"
          iconName={"dots-0-symbolic"}
          class="LeftCap"
          pixelSize={width}
          valign={Gtk.Align.START}
          hexpand={true}
          halign={Gtk.Align.END}
        />

{/* To-do: Change to buttons that are vertically expanded that switch to dots-2-symbolic upon hover */}
        <box $type = "center">
            {Array.from({length: count-2},(_,i) => <image
            iconName={"dots-3-symbolic"}
            pixelSize={width}
            valign={Gtk.Align.START}
          />)}
        </box>
        
        <image
          $type = "end"
          iconName={"dots-0-symbolic"}
          class="RightCap"
          pixelSize={width}
          valign={Gtk.Align.START}
          hexpand={true}
          halign={Gtk.Align.START}
        />

      </centerbox>
    </window>
  )
}