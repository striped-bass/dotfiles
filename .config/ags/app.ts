import app from "ags/gtk4/app"
import style from "./style/style.scss"
import {Wallpaper} from "./windows/Wallpaper"
import {BarAndBorders} from "./windows/BarAndBorders"

app.start({
  css: style,
  icons: `${SRC}/icons`,
  main() {
    app.get_monitors().map((monitor) => {
			Wallpaper(monitor);
      BarAndBorders(monitor);
		});
  },
})