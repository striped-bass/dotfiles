import app from "ags/gtk4/app"
import { Astal, Gdk, Gtk } from "ags/gtk4"

export function BorderTop(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor
  const count = 25;
  const width = gdkmonitor.get_geometry().width / count;

  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="border_top"
      class="BorderTop"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={TOP | LEFT | RIGHT}
      application={app}
    >
      <box orientation={Gtk.Orientation.VERTICAL}>
        {/* To-do: Replace the image below with a centerbox for the top bar */}
        <image
          iconName="to-delete-symbolic"
          pixelSize={width*1.3}
        />
        <centerbox class="BorderBox">
          <image
            $type="start"
            iconName="dots-0-symbolic"
            class="LeftCap"
            pixelSize={width}
            hexpand={true}
            halign={Gtk.Align.END}
          />

  {/* To-do: Change to buttons that are vertically expanded that switch to dots-2-symbolic upon hover */}
          <box $type = "center">
              {Array.from({length: count-2},(_,i) => <image
              iconName={"dots-3-symbolic"}
              pixelSize={width}
            />)}
          </box>

          <image
            $type = "end"
            iconName="dots-0-symbolic"
            class="RightCap"
            pixelSize={width}
            hexpand={true}
            halign={Gtk.Align.START}
          />

        </centerbox>
      </box>
    </window>
  )
}


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
            iconName="dots-0-symbolic"
            class="LeftCap"
            pixelSize={width}
            hexpand={true}
            halign={Gtk.Align.END}
          />
  {/* To-do: Dynamically update from dots-3-symbolic to dots-2-symbolic based on horizontal cursor*/}
          <box $type = "center">
              {Array.from({length: count-2},(_,i) => <image
              iconName="dots-3-symbolic"
              pixelSize={width}
            />)}
          </box>
          
          <image
            $type="end"
            iconName="dots-0-symbolic"
            class="RightCap"
            pixelSize={width}
            hexpand={true}
            halign={Gtk.Align.START}
          />
      </centerbox>
    </window>
  )
}