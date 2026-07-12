import { Gtk } from "ags/gtk4"

export function ReverseFinalBarline() {
    return(  
        <box
            class="ReverseFinalBarline"
            >
            <Gtk.Separator
                class="ThickBarline"
            />
            <Gtk.Separator
                class="ThinBarline"
            />
        </box>
    )
}