-----------------------
---- LOOK AND FEEL ----
-----------------------

-- Refer to https://wiki.hypr.land/Configuring/Basics/Variables/

local opacityHi = "55"
local opacityLo = "11"

hl.config({
    general = {
        gaps_in     = 20,
        gaps_out    = 20,
        border_size = 0,
        col = {
            active_border   = "#000000",
            inactive_border = "#000000",
        },
    },

    decoration = {
        rounding = 0,

        shadow = {
            range          = 1,
            render_power   = 1,
            offset         = { 20, 20 },
            color          = brown .. opacityHi,
            color_inactive = brown .. opacityLo,
        },

        blur = {
            enabled = true,
            size    = 5,
            passes  = 2,
            noise   = 0.05,
        },
        screen_shader = "~/.config/hypr/components/gridlines.frag",
    },

    animations = {
        enabled = true,
    }
})

hl.curve("inOut", { type = "bezier", points = { {0.65, -0.01}, {0, 0.95} } })
hl.curve("woa",   { type = "bezier", points = { {0, 0}, {0, 1} } })

hl.animation({ leaf = "windows",    enabled = true, speed = 5,  bezier = "woa",     style = "popin" })
hl.animation({ leaf = "border",     enabled = true, speed = 10, bezier = "default" })
hl.animation({ leaf = "fade",       enabled = true, speed = 10, bezier = "default" })
hl.animation({ leaf = "workspaces", enabled = true, speed = 5,  bezier = "inOut",   style = "slide" })

----------------
----  MISC  ----
----------------

hl.config({
    misc = {
        force_default_wallpaper      = 0,
        disable_hyprland_logo        = true,
        disable_splash_rendering     = true,
        animate_manual_resizes       = true,
        animate_mouse_windowdragging = true,
        background_color             = tanBackground,
    },
})