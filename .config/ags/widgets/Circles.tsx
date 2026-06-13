import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"

export function CircleTopOuter(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT } = Astal.WindowAnchor
  const height = gdkmonitor.get_geometry().height;

  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="circle_top_outer"
      class="CircleTopOuter"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={TOP | LEFT}
      application={app}
    >
      <image
        iconName={"circle-symbolic"}
        pixelSize={(height/2)}
      />
    </window>
  )
}

export function CircleBottomOuter(gdkmonitor: Gdk.Monitor) {
  const { BOTTOM, RIGHT } = Astal.WindowAnchor
  const height = gdkmonitor.get_geometry().height;

  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="circle_bottom_outer"
      class="CircleBottomOuter"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={BOTTOM | RIGHT}
      application={app}
    >
      <image
        iconName={"circle-symbolic"}
        pixelSize={(height/2)}
      />
    </window>
  )
}

export function CircleTopInner(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT } = Astal.WindowAnchor
  const height = gdkmonitor.get_geometry().height;

  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="circle_top_inner"
      class="CircleTopInner"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={TOP | LEFT}
      application={app}
    >
      <image
        iconName={"circle-symbolic"}
        pixelSize={(0.97*height/2)}
      />
    </window>
  )
}

export function CircleBottomInner(gdkmonitor: Gdk.Monitor) {
  const { BOTTOM, RIGHT } = Astal.WindowAnchor
  const height = gdkmonitor.get_geometry().height;

  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="circle_bottom_inner"
      class="CircleBottomInner"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={BOTTOM | RIGHT}
      application={app}
    >
      <image
        iconName={"circle-symbolic"}
        pixelSize={(0.97*height/2)}
      />
    </window>
  )
}