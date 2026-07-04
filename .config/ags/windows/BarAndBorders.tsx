import app from "ags/gtk4/app"
import { Astal, Gdk, Gtk } from "ags/gtk4"
import {Border} from "../widgets/Border"
import {Bar} from "../widgets/Bar"

export function BarAndBorders(gdkmonitor: Gdk.Monitor) {
  const { TOP, BOTTOM, LEFT, RIGHT} = Astal.WindowAnchor;
  
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
          <Bar/>
          <Border gdkmonitor={gdkmonitor}/>
        </box>
        <box
          $type = "end"
          orientation = {Gtk.Orientation.VERTICAL}
          class = "BottomBorder"
        >
          <Border gdkmonitor={gdkmonitor}/>
        </box>
      </centerbox>
    </window>
  )
}