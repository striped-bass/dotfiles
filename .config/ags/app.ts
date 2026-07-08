import app from "ags/gtk4/app"
import style from "./style/style.scss"
import {Wallpaper} from "./windows/Wallpaper"
import { TopBar } from "./windows/TopBar"
import { TopBorder } from "./windows/TopBorder"
import { BottomBorder } from "./windows/BottomBorder"

app.start({
  css: style,
  icons: `${SRC}/icons`,
  main() {
    app.get_monitors().map((monitor) => {
			Wallpaper(monitor);
      TopBar(monitor);
      TopBorder(monitor);
      BottomBorder(monitor);
		});
  },
})