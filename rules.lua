--------------------------------
---- RULES ----
--------------------------------

-- Enable blur and ignore_alpha for bg_settings
hl.layer_rule({
  match        = { namespace = "bg_settings" },
  blur         = true,
  ignore_alpha = 0.3,
})

-- Enable blur and ignore_alpha for side
hl.layer_rule({
  match        = { namespace = "side" },
  blur         = true,
  ignore_alpha = 0,
})

-- Enable blur and ignore_alpha for bar
hl.layer_rule({
  match        = { namespace = "bar" },
  blur         = true,
  ignore_alpha = 0,
})

-- Ignore_alpha for geom
hl.layer_rule({
  match        = { namespace = "geom" },
  blur         = true,
  ignore_alpha = 0,
})