import { Gtk } from "ags/gtk4"

export function ReverseFinalBarline() {
    return(  
        <box
            class="ReverseFinalBarline"
            widthRequest={50}
            >
            <Gtk.Separator
                class="ThickBarline"
                widthRequest={12}
            />
            <Gtk.Separator
                class="ThinBarline"
                widthRequest={3}
                marginStart={5}
            />
        </box>
    )
}