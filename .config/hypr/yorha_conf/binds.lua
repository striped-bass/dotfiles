---------------------
---- KEYBINDINGS ----
---------------------

-- https://wiki.hypr.land/Configuring/Basics/Binds/

local mod1 = "SUPER"
local mod2 = "ALT"

hl.bind(mod1 .. " + Super_L",   hl.dsp.exec_cmd(launcher))
hl.bind(mod1 .. " + E",         hl.dsp.exec_cmd(fileManager))
hl.bind(mod1 .. " + U",         hl.dsp.exec_cmd(unimatrixAngelic))
hl.bind(mod1 .. " + SHIFT + S", hl.dsp.exec_cmd(screenshot))
hl.bind(mod1 .. " + L",         hl.dsp.exec_cmd(lock))
hl.bind(mod2 .. " + RETURN",    hl.dsp.exec_cmd(terminal))

-- -- Bug: Opacity toggle isn't working as expected
hl.bind(mod1 .. " + SPACE", function ()
    hl.dispatch(hl.dsp.window.set_prop({match = { class = ".*" }, prop = "opaque", value = "false"}))
    hl.exec_cmd("agsv1 -b settings -t settings")
end)

-- Switch workspaces
-- Move active window to a workspace
for i = 1, 10 do
    local key = i % 10 -- 10 maps to key 0
    hl.bind(mod1 .. " + " .. key, hl.dsp.focus({ workspace = i}))
    hl.bind(mod2 .. " + " .. key, hl.dsp.window.move({ workspace = i }))
end

-- Move active window within a workspace
hl.bind(mod1 .. " +  left",  hl.dsp.window.move({ direction = "left" }))
hl.bind(mod1 .. " +  right", hl.dsp.window.move({ direction = "right" }))
hl.bind(mod1 .. " +  up",    hl.dsp.window.move({ direction = "up" }))
hl.bind(mod1 .. " +  down",  hl.dsp.window.move({ direction = "down" }))

hl.bind(mod1 .. " + M", hl.dsp.exec_cmd("hyprshutdown"))

-- Manage windows
hl.bind(mod1 .. " + Q", hl.dsp.window.close())
hl.bind(mod1 .. " + S", hl.dsp.window.float({ action = "toggle" }))
hl.bind(mod1 .. " + P", hl.dsp.window.pseudo())
hl.bind(mod1 .. " + C", hl.dsp.window.center())
hl.bind(mod1 .. " + F", hl.dsp.window.fullscreen("maximized", "toggle")) 

-- Move focus
hl.bind(mod2 .. " + left",  hl.dsp.focus({ direction = "left" }))
hl.bind(mod2 .. " + right", hl.dsp.focus({ direction = "right" }))
hl.bind(mod2 .. " + up",    hl.dsp.focus({ direction = "up" }))
hl.bind(mod2 .. " + down",  hl.dsp.focus({ direction = "down" }))

-- Laptop multimedia keys for volume and LCD brightness
hl.bind("XF86AudioRaiseVolume", hl.dsp.exec_cmd('wpctl set-volume -l 1 @DEFAULT_AUDIO_SINK@ 5%+ && notify-send "$(wpctl get-volume @DEFAULT_AUDIO_SINK@)"'), { locked = true, repeating = true })
hl.bind("XF86AudioLowerVolume", hl.dsp.exec_cmd('wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%- && notify-send "$(wpctl get-volume @DEFAULT_AUDIO_SINK@)"'),      { locked = true, repeating = true })
hl.bind("XF86AudioMute",        hl.dsp.exec_cmd('wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle && notify-send "$(wpctl get-volume @DEFAULT_AUDIO_SINK@)"'),     { locked = true, repeating = true })
hl.bind("XF86MonBrightnessUp",  hl.dsp.exec_cmd('brightnessctl -e4 -n2 set 5%+'), { locked = true, repeating = true })
hl.bind("XF86MonBrightnessDown",hl.dsp.exec_cmd('brightnessctl -e4 -n2 set 5%-'), { locked = true, repeating = true })