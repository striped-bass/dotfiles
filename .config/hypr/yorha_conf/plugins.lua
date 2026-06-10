--------------------------------
---- PLUGINS ----
--------------------------------
hl.config({
    plugin = {
        hyprbars = {
            bar_height     = 40,
            bar_text_size  = 17,
            bar_text_font  = "FOT-Rodin Pro M",
            bar_text_align = "left",
            bar_color      = brown,
            -- col.text = brown, -- Bug: Not sure how to specify key for Lua
        },
    },
})

hl.plugin.hyprbars.add_button({
    fg_color = tan,
    bg_color = brown,
    size     = 30,
    icon     = "◬",
    action   = "hyprctl dispatch killactive", -- Bug: Not working
})

hl.plugin.hyprbars.add_button({
    fg_color = tan,
    bg_color = brown,
    size     = 30,
    icon     = "▽",
    action   = "hyprctl dispatch fullscreen 1", -- Bug: Not working
})