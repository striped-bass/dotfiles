import app from "ags/gtk4/app"
import { Astal, Gdk, Gtk } from "ags/gtk4"

// let dark = false
// let color: [number, number, number, number];
// color = dark?[218/255, 212/255, 187/255, 0.25]:[87/255, 84/255, 74/255, 0.25];

export function Wallpaper(gdkmonitor: Gdk.Monitor) {
  const { TOP, BOTTOM, LEFT, RIGHT } = Astal.WindowAnchor
  const width = gdkmonitor.get_geometry().width;
  const height = gdkmonitor.get_geometry().height;

  return (
    <window
      visible
      layer={Astal.Layer.BACKGROUND}
      name="wallpaper"
      class="Wallpaper"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={TOP | BOTTOM | LEFT | RIGHT}
      application={app}
    >
      <overlay>
        <box
          hexpand={true}
          vexpand={true}
        />

        <image
          $type="overlay"
          class="LineTopInner"
          halign={Gtk.Align.START}
          valign={Gtk.Align.START}
          iconName="line-inner-symbolic"
          pixelSize={(width/2)*1.1*1.1}
        />

        <image
          $type="overlay"
          class="LineTopOuter"
          halign={Gtk.Align.START}
          valign={Gtk.Align.START}
          iconName="line-outer-symbolic"
          pixelSize={(width/2)*1.1}
        />

        <box
          $type="overlay"
          class="CircleTopOuter"
          halign={Gtk.Align.START}
          valign={Gtk.Align.START}
          widthRequest={height/2}
          heightRequest={height/2}
        />

        <box
          $type="overlay"
          class="CircleTopInner"
          halign={Gtk.Align.START}
          valign={Gtk.Align.START}
          widthRequest={0.96*height/2}
          heightRequest={0.96*height/2}
        />

        <image
          $type="overlay"
          class="LineBottomInner"
          halign={Gtk.Align.END}
          valign={Gtk.Align.END}
          iconName="line-inner-symbolic"
          pixelSize={(width/2)*1.1}
        />

        <image
          $type="overlay"
          class="LineBottomOuter"
          halign={Gtk.Align.END}
          valign={Gtk.Align.END}
          iconName="line-outer-symbolic"
          pixelSize={(width/2)}
        />

        <box
          $type="overlay"
          class="CircleBottomOuter"
          halign={Gtk.Align.END}
          valign={Gtk.Align.END}
          widthRequest={height/2}
          heightRequest={height/2}
        />

        <box
          $type="overlay"
          class="CircleBottomInner"
          halign={Gtk.Align.END}
          valign={Gtk.Align.END}
          widthRequest={0.96*height/2}
          heightRequest={0.96*height/2}
        />

      </overlay>
    </window>
  )
}