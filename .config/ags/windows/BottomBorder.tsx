import app from "ags/gtk4/app"
import { Astal, Gdk, Gtk } from "ags/gtk4"
import {Border} from "../widgets/Border"

export function BottomBorder(gdkmonitor: Gdk.Monitor) {
  const {BOTTOM, LEFT, RIGHT} = Astal.WindowAnchor;
  const width = gdkmonitor.get_geometry().width;
  const border_offset = -0.7*(Math.floor(width/25));
  
  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="bottom_border"
      class="BottomBorder"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={BOTTOM | LEFT | RIGHT}
      application={app}
    >
      <box css={`margin-bottom:${border_offset}px;`}>
        <Border gdkmonitor={gdkmonitor}/>
      </box>
    </window>
  )
}