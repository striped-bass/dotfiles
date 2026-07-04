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
            label="Test"
            // label={AstalHyprland.Workspace.dummy(8, null).id.toString()}
          />
        </box>
      </button>
    //  <Gtk.Separator $type = "end" class="BottomSeparator"/>
   // </centerbox>
  )
}

function WorkspaceArray() {
  const workspace_count = 10;

  return(
    <box>
      {Array.from({length: workspace_count},(_,i) => <button
      label={(i+1).toString()}
      />)}
    </box>
  )
}
