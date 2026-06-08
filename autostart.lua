-------------------
---- AUTOSTART ----
-------------------

-- See https://wiki.hypr.land/Configuring/Basics/Autostart/

hl.on("hyprland.start", function () 
    hl.exec_cmd("/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1")
    hl.exec_cmd("dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP")
    hl.exec_cmd("hyprpm reload -n");
    hl.exec_cmd("systemctl --user start hyprpolkitagent"); 
    hl.exec_cmd("hypridle"); 
    hl.exec_cmd("pkill agsv1"); 
end);

hl.exec_cmd('fish -c "set -Ux STARSHIP_CONFIG ~/.config/starship/starship.toml"');
hl.exec_cmd('fish -c "set -Ux HYPRLAND_THEME ~/.config/hypr"');

hl.exec_cmd("agsv1 -c ~/.config/hypr/components/ags/config.js");
hl.exec_cmd(terminalServer);