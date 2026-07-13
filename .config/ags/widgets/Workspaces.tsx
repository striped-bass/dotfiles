// import Hyprland from "gi://AstalHyprland"
// import { createBinding, createEffect, createState } from "ags"
// import { Gtk } from "ags/gtk4"

// type WorkspaceButtonProps = JSX.IntrinsicElements["button"] & {
//   ws: Hyprland.Workspace
// }

// function range(max: number) {
// 	return Array.from({ length: max + 1 }, (_, i) => i)
// }

// function WorkspaceButton({ ws, ...props }: WorkspaceButtonProps) {
//   let button: Gtk.Button
//   const hyprland = Hyprland.get_default()
//   const fws = createBinding(hyprland, "focusedWorkspace")
//   const clients = createBinding(hyprland, "clients")

//   const [classes, setClasses] = createState(["workspace-button"])

//   if (fws.peek().id == ws.id) {
//     const newClasses = classes.peek()
//     newClasses.push("active")
//     setClasses(newClasses)
//   }

//   const updateClasses = (
//     focusedWorkspace: Hyprland.Workspace,
//     clients: Hyprland.Client[],
//   ) => {
//     const active = focusedWorkspace.id == ws.id
//     if (active) {
//       button.add_css_class("active")
//     } else {
//       button.remove_css_class("active")
//     }

//     const occupied = clients.some((c) => c.workspace.id == ws.id)
//     if (occupied) {
//       button.add_css_class("occupied")
//     } else {
//       button.remove_css_class("occupied")
//     }
//   }

//   createEffect(() => {
//     updateClasses(fws(), clients())
//   })

//   return (
//     <button
//       $={(self) => {
//         button = self
//       }}
//       class="WorkspaceButton"
//       valign={Gtk.Align.CENTER}
//       halign={Gtk.Align.CENTER}
//       onClicked={() => ws.focus()}
//       {...props}
//     />
//   )
// }

// export function WorkspacesPanelButton() {
//   return (
//     <box cssClasses={["workspace-container"]} spacing={4}>
//       {range(3).map((i) => (
//         <WorkspaceButton ws={Hyprland.Workspace.dummy(i + 1, null)} />
//       ))}
//     </box>
//   )
// }


export function WorkspaceButton({workspace_id}:{workspace_id: number}) {
  return(
//    <centerbox orientation={Gtk.Orientation.VERTICAL}>
  //    <Gtk.Separator $type = "start" class="TopSeparator"/>
      <button
        class="WorkspaceButton"
        // onClicked={() => ws.focus()}
      >
        <box spacing={5}>
          <label
            class="LeftLabel"
            label={workspace_id.toString()}
            width-chars={3}
          />
          <label 
            class="RightLabel"
            label="Placeholder"
            // label={AstalHyprland.Workspace.dummy(8, null).id.toString()}
          />
        </box>
      </button>
    //  <Gtk.Separator $type = "end" class="BottomSeparator"/>
   // </centerbox>
  )
}

// function WorkspaceArray() {
//   const workspace_count = 10;

//   return(
//     <box>
//       {Array.from({length: workspace_count},(_,i) => <button
//       label={(i+1).toString()}
//       />)}
//     </box>
//   )
// }
