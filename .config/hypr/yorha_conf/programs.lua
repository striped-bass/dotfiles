-- My programs
global launcher         = "hyprlauncher"
global terminal         = "footclient"
global terminalServer   = "foot -s"
-- To-do: Theme yazi
global unimatrixAngelic = terminal .. " -o  font=Angelic:size=12 unimatrix -c white -l a"
global fileManager      = terminal .. " -e yazi"
global lock             = "hyprlock"
global screenshot       = 'grim -g "$(agsv1 -b geom -c ~/.config/agsv1/windows/geom/geom.js)" - | wl-copy && notify-send "Screenshot copied to clipboard"'
global systemMenu       = "ags toggle LeftSystemMenu"