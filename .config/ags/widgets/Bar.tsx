import app from "ags/gtk4/app"
import { Gdk } from "ags/gtk4"
import { createPoll } from "ags/time"
import Battery from "gi://AstalBattery"
import { createBinding } from "ags"
import { ReverseFinalBarline } from "./ReverseFinalBarline"
import { WorkspaceButton } from "./Workspaces"

export function Bar({
  gdkmonitor,
  border_unit_count,
  }:{
  gdkmonitor: Gdk.Monitor
  border_unit_count: number
  }) {

  const width = gdkmonitor.get_geometry().width;
  const border_unit_size = Math.floor(width/border_unit_count);
  const remainder = width % border_unit_size;
  const border_cap_width = border_unit_size + Math.floor(remainder/2);

  return(  
    <box class="Bar">
      <centerbox widthRequest={border_unit_size}>
        <BatteryStatus/>
      </centerbox>
      
      <ReverseFinalBarline/>

      <box
          hexpand={true}
          homogeneous={true}
          spacing={25}
      >
        <button onClicked={() => app.get_window("LeftSystemMenu").visible = true}>
          <box class="WorkspaceButton">
            <label
              class="LeftLabel"
              label="⏻"
              width-chars={3}
            />
            <label
              class="RightLabel"
              label="System"
            />
          </box>
        </button>

        {/* <WorkspacesPanelButton/> */}
        <WorkspaceButton workspace_id={1}/>
        <WorkspaceButton workspace_id={2}/>
        <WorkspaceButton workspace_id={3}/>
        <WorkspaceButton workspace_id={4}/>
        <WorkspaceButton workspace_id={5}/>
            
      </box>
      <Clock width={border_cap_width}/>
    </box>
  )
}

function BatteryStatus() {
  const battery = Battery.get_default();
  return (
    <image
      $type="center"
      iconName={createBinding(battery, "batteryIconName")}
      cssClasses={["icon"]}
      // $={(self) => {self.set_tooltip_text(createBinding(battery, "percentage").as(
      // (p) => `${Math.floor(p * 100)}%`)}}
    />
  )
}

function Clock({width}:{width:number}) {
  const time = createPoll("", 1000, () => Temporal.Now.plainDateTimeISO().toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
  }).replace(/ AM| PM/,"") );

  return(
    <label
      widthRequest={width}
      class="Clock"
      label={time}
    />
  )
}