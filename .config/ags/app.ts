import app from "ags/gtk4/app"
import style from "./style/style.scss"
import {CircleTopOuter, CircleTopInner, CircleBottomOuter, CircleBottomInner} from "./widgets/Circles"
import {LineTopOuter, LineTopInner, LineBottomOuter, LineBottomInner} from "./widgets/Lines"
import {BordersAndBar} from "./widgets/BordersAndBar"

app.start({
  css: style,
  icons: `${SRC}/icons`,
  main() {
    app.get_monitors().map((monitor) => {
			CircleTopOuter(monitor);
			CircleTopInner(monitor);
			CircleBottomOuter(monitor);
			CircleBottomInner(monitor);

      LineTopOuter(monitor);
      LineTopInner(monitor);
      LineBottomOuter(monitor);
      LineBottomInner(monitor);

      BordersAndBar(monitor);
		});
  },
})