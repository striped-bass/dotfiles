import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"
import {Border} from "../widgets/Border"

export function TopBorder(gdkmonitor: Gdk.Monitor) {
  const {TOP, LEFT, RIGHT} = Astal.WindowAnchor;
  const width = gdkmonitor.get_geometry().width;
  const border_offset = (Math.floor(width/25));
  
  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="top_border"
      class="TopBorder"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={TOP | LEFT | RIGHT}
      application={app}
    >
      <box css={`margin-top:${border_offset}px;`}>
        <Border gdkmonitor={gdkmonitor}/>
      </box>
    </window>
  )
}