import { Gdk, Gtk } from "ags/gtk4"
import { execAsync } from "ags/process"
import { createPoll } from "ags/time"
import Battery from "gi://AstalBattery"
import { createBinding } from "ags"
import { ReverseFinalBarline } from "./ReverseFinalBarline"
import { WorkspaceButton } from "./Workspaces"

export function Bar({gdkmonitor}:{gdkmonitor: Gdk.Monitor}) {
  const width = gdkmonitor.get_geometry().width;
  const quotient = Math.floor(width/25);
  const remainder = width % quotient;
  const barline_offset = quotient - remainder/2;

  const time = createPoll("", 1000, () => Temporal.Now.plainDateTimeISO().toLocaleString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }));
  const battery = Battery.get_default();

  return(  
    <box margin-start={barline_offset}>
      <ReverseFinalBarline/>
      
      <box
        class="Bar"
        hexpand={true}
        homogeneous={true}
        spacing={5}
      >
        <menubutton halign={Gtk.Align.START}>
          <box>
            <label label="⏻"/>
            <label label="SYSTEM"/>
          </box>
          <System/>
        </menubutton>

        <WorkspaceButton workspace_id={1}/>
        <WorkspaceButton workspace_id={2}/>
        <WorkspaceButton workspace_id={3}/>
        <WorkspaceButton workspace_id={4}/>
        <WorkspaceButton workspace_id={5}/>
        <WorkspaceButton workspace_id={6}/>
        <WorkspaceButton workspace_id={7}/>
        <WorkspaceButton workspace_id={8}/>
        <WorkspaceButton workspace_id={9}/>
        <WorkspaceButton workspace_id={10}/>

        <menubutton>
          <box>
            <label label="⧗"/>
            <label label={time}/>
          </box>
          <popover>
            <Gtk.Calendar class="Calendar"/>
          </popover>
        </menubutton>
        
        <menubutton>
          <box>
            <image
              iconName={createBinding(battery, "batteryIconName")}
              iconSize={Gtk.IconSize.NORMAL}
              cssClasses={["icon"]}
            />
            <label label={createBinding(battery, "percentage").as(
              (p) => `${Math.floor(p * 100)}%`,
            )}/>
          </box>
        </menubutton>
      </box>
    </box>
  )
}

function System() {
  return(
    <popover 
      has-arrow={false}
      class="SystemPopover"
      $={(self) => {self.set_offset(-2,0)}}
    >
      <box orientation={Gtk.Orientation.VERTICAL}>
        <label
          label="SYSTEM"
          class="Heading"
        />
        <box>
          <ReverseFinalBarline/>
          <box orientation={Gtk.Orientation.VERTICAL}>
            <menubutton direction={Gtk.ArrowType.RIGHT}>
              <label label="⬛ Appearance"/>
              <popover
                has-arrow={false}
              >
                <box orientation={Gtk.Orientation.VERTICAL}>
                  <box>
                    <label label="Light Mode"/>
                    <switch
                      active={true}
                      onNotifyActive={({active}) => print(active)}
                    /> 
                  </box>
                  <button
                    onClicked={() => execAsync(["bash","-c","hyprshade toggle gridlines"])}
                  >
                    <label label="Shader"/>
                  </button>
                </box>
              </popover>
            </menubutton>
            <button>
              <label label="⬛ Sound"/>
            </button>
            <button>
              <label label="⬛ Wi-Fi"/>
            </button>
            <button>
              <label label="⬛ Bluetooth"/>
            </button>
            <menubutton direction={Gtk.ArrowType.RIGHT}>
              <label label="⬛ Power"/>
              <popover
                has-arrow={false}
              >
                <box orientation={Gtk.Orientation.VERTICAL}>
                  <button class="WorkspaceButton"
                    onClicked={() => execAsync(["bash","-c","hyprctl dispatch 'hl.exec_cmd(\"hyprshutdown -t Logout...\")'"])}
                  >
                    <label label="Logout"/>
                  </button>
                  <button
                    onClicked={() => execAsync(["bash","-c","hyprctl dispatch 'hl.exec_cmd(\"hyprshutdown -t Shutdown... -p poweroff\")'"])}
                  >
                    <label label="Shutdown"/>
                  </button>
                  <button
                    onClicked={() => execAsync(["bash","-c","hyprctl dispatch 'hl.exec_cmd(\"hyprshutdown -t Reboot... -p reboot\")'"])}
                  >
                    <label label="Reboot"/>
                  </button>
                </box>
              </popover>
            </menubutton>
          </box>
        </box>
      </box>
    </popover>
  )
}