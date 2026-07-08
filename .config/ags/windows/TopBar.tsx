import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"
import { Bar } from "../widgets/Bar"

export function TopBar(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT} = Astal.WindowAnchor;

  return(  
    <window
      visible
      layer={Astal.Layer.BOTTOM}
      name="TopBar"
      class="TopBar" 
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | LEFT | RIGHT}
      application={app}
    >
      <Bar gdkmonitor={gdkmonitor}/>
    </window>
  )
}