import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"
import {Border} from "../widgets/Border"

export function BottomBorder(gdkmonitor: Gdk.Monitor) {
  const {BOTTOM, LEFT, RIGHT} = Astal.WindowAnchor;
  const border_unit_count = 25;
  const width = gdkmonitor.get_geometry().width;
  const border_offset_ratio = 0.7;
  const border_unit_size = Math.floor(width/border_unit_count);
  const border_offset = -border_offset_ratio*border_unit_size;
  
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
      <Border
        gdkmonitor={gdkmonitor}
        border_unit_count={border_unit_count}
        css={`margin-bottom:${border_offset}px;`}
      />
    </window>
  )
}