import { Gtk } from "ags/gtk4"

export function ReverseFinalBarline() {
    return(  
        <box 
            class="ReverseFinalBarline"
            widthRequest={60}
            >
            <Gtk.Separator
                class="Barline"
                widthRequest={12}
                marginStart={10}
            />
            <Gtk.Separator
                class="Barline"
                widthRequest={3}
                marginStart={5}
            />
        </box>
    )
}