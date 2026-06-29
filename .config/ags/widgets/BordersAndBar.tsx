import app from "ags/gtk4/app"
import { Astal, Gdk, Gtk } from "ags/gtk4"
import { execAsync } from "ags/process"
import { createPoll } from "ags/time"
import Battery from "gi://AstalBattery"
import { createBinding } from "ags"

function Border({gdkmonitor}:{gdkmonitor: Gdk.Monitor}) {
  const count = 25;
  const width = gdkmonitor.get_geometry().width / count;

  return(
    <centerbox class="BorderBox">
      <image
        $type="start"
        iconName="dots-0-symbolic"
        class="LeftCap"
        pixelSize={width}
        hexpand={true}
        halign={Gtk.Align.END}
      />

      <box $type = "center">
          {Array.from({length: count - 2},(_,i) => <image
          iconName={"dots-3-symbolic"}
          pixelSize={width}
        />)}
      </box>

      <image
        $type = "end"
        iconName="dots-0-symbolic"
        class="RightCap"
        pixelSize={width}
        hexpand={true}
        halign={Gtk.Align.START}
      />

    </centerbox>
  )
}

function System() {

  return(
    <popover has-arrow={false}>
      <box orientation={Gtk.Orientation.VERTICAL}>
        <label label="SYSTEM"/>  
        <button>
          <label label="Appearance"/>
        </button>
        <button>
          <label label="Sound"/>
        </button>
        <button>
          <label label="Wi-Fi"/>
        </button>
        <button>
          <label label="Bluetooth"/>
        </button>
        <menubutton direction={Gtk.ArrowType.RIGHT}>
          <label label="Power"/>
            <popover
              has-arrow={false}
            >
              <box orientation={Gtk.Orientation.VERTICAL}>
                <button
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
    </popover>
  )
}

function Bar() {
  const time = createPoll("", 1000, () => Temporal.Now.plainDateTimeISO().toLocaleString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }));
  const battery = Battery.get_default();

  return(  
    <box
      class="Bar"
      hexpand={true}
    >
      <menubutton halign={Gtk.Align.END}>
        <box>
          <label label="⏻"/>
          <label label="SYSTEM"/>
        </box>
        <System/>
      </menubutton>

      <Workspaces/>
      <menubutton>
        <box>
          <label label="⧖"/>
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
  )
}

function Workspaces() {
  const workspace_count = 10;

  return(
    <box>
      {Array.from({length: workspace_count},(_,i) => <button
      label={(i+1).toString()}
      />)}
    </box>
  )
}

export function BordersAndBar(gdkmonitor: Gdk.Monitor) {
  const { TOP, BOTTOM, LEFT, RIGHT} = Astal.WindowAnchor;
  const count = 25;
  const width = gdkmonitor.get_geometry().width / count;
  
  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="borders_and_bar"
      class="BordersAndBar"
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
          <Gtk.Separator class="HorizontalSeparator"/>
          <Border gdkmonitor={gdkmonitor}/>
        </box>
        <box
          $type = "end"
          orientation = {Gtk.Orientation.VERTICAL}
        >
          <Gtk.Separator class="HorizontalSeparator"/>
          <Border gdkmonitor={gdkmonitor}/>
        </box>
      </centerbox>
    </window>
  )
}