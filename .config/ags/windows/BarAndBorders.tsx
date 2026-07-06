import app from "ags/gtk4/app"
import { Astal, Gdk, Gtk } from "ags/gtk4"
import {Border} from "../widgets/Border"
import {Bar} from "../widgets/Bar"

export function BarAndBorders(gdkmonitor: Gdk.Monitor) {
  const { TOP, BOTTOM, LEFT, RIGHT} = Astal.WindowAnchor;
  const width = gdkmonitor.get_geometry().width;
  const border_offset = -(Math.floor(width/25)/2);
  
  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="bar_and_borders"
      class="BarAndBorders"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={TOP | BOTTOM | LEFT | RIGHT}
      application={app}
    >

      <centerbox
        orientation={Gtk.Orientation.VERTICAL}
        vexpand={true}
      >
        
        <box 
          $type = "start"
          orientation = {Gtk.Orientation.VERTICAL}
        >
          <Bar gdkmonitor={gdkmonitor}/>
          <Border gdkmonitor={gdkmonitor}/>
        </box>
        <box
          $type = "end"
          orientation = {Gtk.Orientation.VERTICAL}
          class = "BottomBorder"
          css={`margin-bottom:${border_offset}px;`}
        >
          <Border gdkmonitor={gdkmonitor}/>
        </box>
      </centerbox>
    </window>
  )
}