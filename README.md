# Dotfiles - Arch Linux + Hyprland with Rosé Pine Theme

My personal dotfiles for Arch Linux using Hyprland and the [Rosé Pine](https://rosepinetheme.com/) theme.

<!-- ![Screenshot](path/to/your/screenshot.png) -->

## Required Packages

### Core System
```bash
# Window Manager & Desktop
hyprland
hypridle
hyprlock
hyprpaper
xdg-desktop-portal-hyprland
polkit-kde-agent
swaync
waybar
wofi
wlogout
pyprland

# Display & Audio
grim
slurp
wl-clipboard  
cliphist
dunst
libnotify
pavucontrol
playerctl
brightnessctl

# File Management
nautilus

# Terminal & Shell
zsh
oh-my-zsh
ghostty
neofetch
```

### Development
```bash
# Core Tools
git
docker
docker-compose
nodejs
npm
python-pip
jq

# Version Management
nvm
```

### Rosé Pine Theme
```bash
# From AUR
rose-pine-gtk-theme-full      # https://github.com/rose-pine/gtk
rose-pine-cursor             # https://github.com/rose-pine/cursor
```

### Fonts
```bash
ttf-jetbrains-mono-nerd
ttf-font-awesome
noto-fonts-emoji
```

### Additional Utilities
```bash
wget
unzip
unrar
p7zip
htop
```

## Zsh Plugins
Required plugins for Oh My Zsh:
- git
- sudo
- colored-man-pages
- extract
- zsh-autosuggestions
- zsh-syntax-highlighting
- web-search
- command-not-found
- docker
- docker-compose
- node
- python

## Main Components

### Window Manager
- Hyprland - Wayland compositor
- Waybar - Status bar
- Wofi - Application launcher
- Wlogout - Logout menu
- Hypridle - Idle management
- Hyprpaper - Wallpaper manager
- Swaync - Notification center
- Pyprland - Python plugin manager for Hyprland

### Terminal
- Ghostty - Terminal emulator
- Zsh - Shell
- Oh My Zsh - Zsh framework

### Theme
- Rosé Pine GTK theme
- Rosé Pine cursor theme
- Custom Waybar styling
- GTK theme integration
- Terminal color scheme

### Development
- Full Git integration
- Docker support
- Node.js environment (with nvm)
- Python development ready

### File Management
- Nautilus - GNOME file manager
- Archive support (zip, unzip, rar, p7zip)

### Clipboard & Screenshots
- Cliphist - Clipboard manager
- wl-clipboard (wl-copy, wl-paste) - Wayland clipboard utilities
- Grim + Slurp - Screenshot tools
