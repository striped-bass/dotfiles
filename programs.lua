-- My programs
global launcher       = "hyprlauncher"
global terminal       = "footclient"
global terminalServer = "foot -s"
-- To-do: Theme yazi
global fileManager    = terminal .. " -e yazi"
global lock           = "hyprlock"
global screenshot     = 'grim -g "$(agsv1 -b geom -c ~/.config/hypr/components/ags/windows/geom/geom.js)" - | wl-copy && notify-send "Screenshot copied to clipboard"'