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

        <image
          $type="overlay"
          class="CircleTopOuter"
          halign={Gtk.Align.START}
          valign={Gtk.Align.START}
          iconName="circle-symbolic"
          pixelSize={(height/2)}
        />
        
        <image
          $type="overlay"
          class="CircleTopInner"
          halign={Gtk.Align.START}
          valign={Gtk.Align.START}
          iconName="circle-symbolic"
          pixelSize={(0.97*height/2)}
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

        <image
          $type="overlay"
          class="CircleBottomOuter"
          halign={Gtk.Align.END}
          valign={Gtk.Align.END}
          iconName="circle-symbolic"
          pixelSize={(height/2)}
        />

        <image
          $type="overlay"
          class="CircleBottomInner"
          halign={Gtk.Align.END}
          valign={Gtk.Align.END}
          iconName="circle-symbolic"
          pixelSize={(0.97*height/2)}
        />

        {/* <drawingarea
          $type="overlay"
          halign={Gtk.Align.END}
          valign={Gtk.Align.END}
          widthRequest={height/2}
          heightRequest={height/2}
          $={(self) => {self.set_draw_func((_area, cr, _width, height) => {
              const line_width = 3;
            
              const xc = height;
              const yc = height;
              const radius = height - line_width/2;
              const angle1 = Math.PI;
              const angle2 = (3 * Math.PI) / 2;

              cr.setSourceRGBA(...color);

              cr.setLineWidth(line_width)

              cr.arc(xc, yc, radius, angle1, angle2);
              cr.stroke()
            });
          }}
        /> */}
      </overlay>
    </window>
  )
}