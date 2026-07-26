import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"
import {Border} from "../widgets/Border"

export function TopBorder(gdkmonitor: Gdk.Monitor) {
  const {TOP, LEFT, RIGHT} = Astal.WindowAnchor;
  const border_unit_count = 27;
  const width = gdkmonitor.get_geometry().width;
  const border_unit_size = Math.floor(width/border_unit_count);
  
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
      <Border
        gdkmonitor={gdkmonitor}
        border_unit_count={border_unit_count}
        css={`margin-top:${border_unit_size}px;`}
      />
    </window>
  )
}