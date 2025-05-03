# Dotfiles for Arch Linux + Hyprland Setup

This repository contains my personal dotfiles for Arch Linux with Hyprland window manager setup. Below you'll find detailed instructions for installation and configuration of various components.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Terminal Setup](#terminal-setup)
- [Hyprland Configuration](#hyprland-configuration)
- [Development Tools](#development-tools)
<!-- - [Screenshots](#screenshots) -->

## Prerequisites

Before you begin, make sure you have a fresh Arch Linux installation. You'll need an AUR helper (yay) for easier package management:

```bash
# Install git first
sudo pacman -S git base-devel

# Install yay
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

## Installation

1. Clone this repository:
```bash
git clone https://github.com/YourUsername/dotfiles.git
cd dotfiles
```

2. Install required packages:
```bash
# Core packages
yay -S zsh oh-my-zsh-git neofetch hyprland waybar wl-clipboard

# Terminal utilities
yay -S pkgfile docker docker-compose nodejs npm python

# Development tools
yay -S git nodejs npm python
```

## Terminal Setup

### Zsh Configuration
The setup uses Zsh with Oh My Zsh framework and several plugins:

1. Install Oh My Zsh:
```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

2. Install required plugins:
```bash
# Create custom plugins directory
mkdir -p ~/.local/share/oh-my-zsh/plugins

# Install custom plugins
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.local/share/oh-my-zsh/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting ~/.local/share/oh-my-zsh/plugins/zsh-syntax-highlighting
```

3. Copy .zshrc:
```bash
cp .zshrc ~/.zshrc
```

### Features
- Theme: af-magic
- Command auto-correction
- Git integration
- Docker and Docker Compose aliases
- Development environment helpers (Node.js, Python)
- Arch Linux specific aliases and helpers

## Hyprland Configuration

### Required Packages
```bash
yay -S hyprland waybar wl-clipboard
```

### Features
- Wayland-native clipboard management
- Integration with various Wayland tools
- Custom keybindings for window management

## Development Tools

### Installed Development Tools
- Git with extensive aliases
- Node.js and npm
- Python
- Docker and Docker Compose
- Various development-related plugins and tools

### Package Management
The setup includes various package management tools:
- pacman (Arch Linux package manager)
- yay (AUR helper)
- npm (Node.js package manager)
- pip (Python package manager)

<!-- ## Screenshots
Add your screenshots here with descriptions:

### Terminal
[Terminal Screenshot Description]

### Hyprland Desktop
[Desktop Screenshot Description]

### Development Environment
[Development Environment Screenshot Description]
-->

## Maintenance

### Updating the System
```bash
# Update system packages
yay -Syu

# Update Oh My Zsh
omz update

# Update all plugins
git -C ~/.local/share/oh-my-zsh/plugins/zsh-autosuggestions pull
git -C ~/.local/share/oh-my-zsh/plugins/zsh-syntax-highlighting pull
```

### Cleaning Up
```bash
# Remove orphaned packages
yay -Rns $(pacman -Qtdq)

# Clean package cache
yay -Sc
```

## Additional Notes
- The configuration is optimized for Arch Linux with Hyprland
- Custom aliases are provided for common operations
- Extensive Git integration with useful aliases
- Docker and development environment ready
- Wayland-native clipboard management

## Contributing
Feel free to fork this repository and customize it to your needs. Pull requests are welcome!

## License
This project is licensed under the MIT License - see the LICENSE file for details. 