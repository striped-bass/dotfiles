import app from "ags/gtk4/app"
import style from "./style/style.scss"
import {CircleTopOuter, CircleTopInner, CircleBottomOuter, CircleBottomInner} from "./widgets/Circles"

app.start({
  css: style,
  icons: `${SRC}/icons`,
  main() {
    app.get_monitors().map((monitor) => {
			CircleTopOuter(monitor);
			CircleTopInner(monitor);
			CircleBottomOuter(monitor);
			CircleBottomInner(monitor);
		});
  },
})