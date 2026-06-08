<div>
    <img src="./assets/title.svg" height="30px">
</div>
<img src="https://github.com/flick0/dotfiles/assets/77581181/4b94622c-69f4-4f2d-82c4-7032d6e66ca4">
<div align="right">
        do check out the full showcase vid here ~>
        <a href="https://www.youtube.com/watch?v=YRDbhWHF8bY">
            <img alt="Youtube" src="https://img.shields.io/badge/YouTube-%23c2bda6.svg?style=for-the-badge&logo=YouTube&logoColor=48463d">
        </a>
        <a href="https://www.reddit.com/r/unixporn/comments/18zwfhj/hyprland_yorha/">
            <img alt="Reddit" src="https://img.shields.io/badge/Reddit-%23c2bda6.svg?style=for-the-badge&logo=Reddit&logoColor=48463d">
        </a>
</div>


# 👾 YoRHa

A rice inspired by `NieR:Automata` ui


## 📥 Installation


- ## Manual
    - ### Dependancies
        #### Arch
        > ```sh
        > paru -S hyprland hyprlauncher hyprlock hypridle hyprpolkitagent foot grim fish theme.sh sassc starship ttf-ibmplex-mono-nerd imagemagick gnome-bluetooth wl-clipboard libdbusmenu-gtk3 gnome-bluetooth-3.0 xorg-xrandr cpio cmake git meson gcc stow
        > ```
        #### STTT
        > install from https://github.com/flick0/sttt
        #### AGS (v1.9.0 with patches)
        > Get aylurs-gtk-shell package build
        > ```sh
        > paru -G aylurs-gtk-shell
        > ```
        > Copy package build files for  agsv1
        > ```sh
        > git clone https://github.com/kotontrion/PKGBUILDS.git
        > cp -a PKGBUILDS/agsv1/. aylurs-gtk-shell/
        > ```
        > Install missing dependencies and agsv1 package
        >```sh
        > makepkg -si
        > ```
        
        #### Unimatrix (Angelic fork) 
        > install from https://github.com/striped-bass/unimatrix
    - ### Install and enable `hyprbars` plugin via `hyprpm`
      > ```sh
      > hyprpm update
      > hyprpm add https://github.com/hyprwm/hyprland-plugins
      > hyprpm enable hyprbars
      > ```
    - ### Clone Dotfiles and link with Stow
      ```sh
      git clone -b hyprland-yorha https://github.com/striped-bass/dotfiles.git
      cd ~/dotfiles
      stow .
      ```

## ✨ Features
 - ### Slurp clone made in ags
   > https://github.com/flick0/dotfiles/assets/77581181/efd9363e-47f4-4768-bdd9-3d8d15e5a9c4

 - ### Light/Dark mode with transitions
   > https://github.com/flick0/dotfiles/assets/77581181/663c9a12-ff65-4130-aa19-7c38cb6e90e6


## Thanks to
- https://www.platinumgames.com/official-blog/article/9624 amazing blog by the creators of NieR:Automata
- https://codepen.io/RobotsPlay/pen/bGeNGdx (few svgs and for reference)
- https://github.com/gigsoll/YoRHaLogo (yorha logo svg)