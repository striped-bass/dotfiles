import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"

export function LineTopOuter(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT } = Astal.WindowAnchor
  const width = gdkmonitor.get_geometry().width;

  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="line_top_outer"
      class="LineTopOuter"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={TOP | LEFT}
      application={app}
    >
      <image
        iconName="line-outer-symbolic"
        pixelSize={(width/2)*1.1}
      />
    </window>
  )
}

export function LineTopInner(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT } = Astal.WindowAnchor
  const width = gdkmonitor.get_geometry().width;

  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="line_top_inner"
      class="LineTopInner"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={TOP | LEFT}
      application={app}
    >
      <image
        iconName="line-inner-symbolic"
        pixelSize={(width/2)*1.1*1.1}
      />
    </window>
  )
}

export function LineBottomOuter(gdkmonitor: Gdk.Monitor) {
  const { BOTTOM, RIGHT } = Astal.WindowAnchor
  const width = gdkmonitor.get_geometry().width;

  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="line_bottom_outer"
      class="LineBottomOuter"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={BOTTOM | RIGHT}
      application={app}
    >
      <image
        iconName="line-outer-symbolic"
        pixelSize={width/2}
      />
    </window>
  )
}

export function LineBottomInner(gdkmonitor: Gdk.Monitor) {
  const { BOTTOM, RIGHT } = Astal.WindowAnchor
  const width = gdkmonitor.get_geometry().width;

  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="line_bottom_inner"
      class="LineBottomInner"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={BOTTOM | RIGHT}
      application={app}
    >
      <image
        iconName="line-inner-symbolic"
        pixelSize={(width/2)*1.1}
      />
    </window>
  )
}