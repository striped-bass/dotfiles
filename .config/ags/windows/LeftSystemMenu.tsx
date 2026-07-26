import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"
import { SystemMenu } from "../widgets/SystemMenu"

export function LeftSystemMenu(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT } = Astal.WindowAnchor;

  return(  
    <window
      layer={Astal.Layer.TOP}
      name="LeftSystemMenu"
      class="LeftSystemMenu" 
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      keymode={Astal.Keymode.EXCLUSIVE}
      anchor={TOP | LEFT}
      application={app}
    >
      <SystemMenu gdkmonitor={gdkmonitor} border_unit_count={27}/>
    </window>
  )
}