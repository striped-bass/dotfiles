import app from "ags/gtk4/app"
import { Astal, Gdk, Gtk } from "ags/gtk4"

export function Wallpaper(gdkmonitor: Gdk.Monitor) {
  const { TOP, BOTTOM, LEFT, RIGHT } = Astal.WindowAnchor
  const width = gdkmonitor.get_geometry().width;
  const height = gdkmonitor.get_geometry().height;
  const line_offset_ratio = 0.1;
  const line_offset = line_offset_ratio*width/2;

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

        <box
          $type="overlay"
          class="LineTopShort"
          halign={Gtk.Align.START}
          valign={Gtk.Align.START}
          widthRequest={(1-line_offset_ratio)*width/2}
          heightRequest={(1-line_offset_ratio)*width/2}
          margin-start={line_offset}
        />

        {/* <Gtk.Separator
          $type="overlay"
          class="Test"
          halign={Gtk.Align.START}
          valign={Gtk.Align.START}
          widthRequest={3}
          heightRequest={500}
          css="background-color:red;transform:rotate(-45deg) translateX(250px) translateY(250px) ;"
        /> */}

        <box
          $type="overlay"
          class="LineTopMed"
          halign={Gtk.Align.START}
          valign={Gtk.Align.START}
          widthRequest={width/2}
          heightRequest={width/2}
          margin-top={line_offset}
        />

        <box
          $type="overlay"
          class="LineTopLong"
          halign={Gtk.Align.START}
          valign={Gtk.Align.START}
          widthRequest={(1+2*line_offset_ratio)*width/2}
          heightRequest={(1+2*line_offset_ratio)*width/2}
        />

        <box
          $type="overlay"
          class="ArcTopOuter"
          halign={Gtk.Align.START}
          valign={Gtk.Align.START}
          widthRequest={height/2}
          heightRequest={height/2}
        />

        <box
          $type="overlay"
          class="ArcTopInner"
          halign={Gtk.Align.START}
          valign={Gtk.Align.START}
          widthRequest={0.96*height/2}
          heightRequest={0.96*height/2}
        />

        <box
          $type="overlay"
          class="LineBottomShort"
          halign={Gtk.Align.END}
          valign={Gtk.Align.END}
          widthRequest={(1-2*line_offset_ratio)*width/2}
          heightRequest={(1-2*line_offset_ratio)*width/2}
          margin-bottom={line_offset}
        />

        <box
          $type="overlay"
          class="LineBottomMed"
          halign={Gtk.Align.END}
          valign={Gtk.Align.END}
          widthRequest={(1-line_offset_ratio)*width/2}
          heightRequest={(1-line_offset_ratio)*width/2}
          margin-end={line_offset}
        />

        <box
          $type="overlay"
          class="LineBottomLong"
          halign={Gtk.Align.END}
          valign={Gtk.Align.END}
          widthRequest={(1+line_offset_ratio)*width/2}
          heightRequest={(1+line_offset_ratio)*width/2}
        />
        
        <box
          $type="overlay"
          class="ArcBottomOuter"
          halign={Gtk.Align.END}
          valign={Gtk.Align.END}
          widthRequest={height/2}
          heightRequest={height/2}
        />

        <box
          $type="overlay"
          class="ArcBottomInner"
          halign={Gtk.Align.END}
          valign={Gtk.Align.END}
          widthRequest={0.96*height/2}
          heightRequest={0.96*height/2}
        />

      </overlay>
    </window>
  )
}