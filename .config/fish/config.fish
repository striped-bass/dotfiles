if status is-interactive
# Commands to run in interactive sessions can go here
set fish_greeting
starship init fish | source
sttt scanline --scanline-reverse true -d 0.5
end