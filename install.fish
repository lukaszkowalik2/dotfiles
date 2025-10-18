#!/usr/bin/env fish

argparse -n 'install.fish' -X 0 \
    'h/help' \
    'noconfirm' \
    'spotify' \
    'cursor' \
    'discord' \
    'zen' \
    'aur-helper=!contains -- "$_flag_value" yay paru' \
    -- $argv
or exit

# Print help
if set -q _flag_h
    echo 'usage: ./install.fish [-h] [--noconfirm] [--spotify] [--cursor] [--discord] [--zen] [--aur-helper]'
    echo
    echo 'options:'
    echo '  -h, --help                  show this help message and exit'
    echo '  --noconfirm                 do not confirm package installation'
    echo '  --spotify                   install Spotify (Spicetify)'
    echo '  --cursor                    install Cursor editor'
    echo '  --discord                   install Discord (OpenAsar + Equicord)'
    echo '  --zen                       install Zen browser'
    echo '  --aur-helper=[yay|paru]     the AUR helper to use (default: paru)'

    exit
end


# Helper funcs
function _out -a colour text
    set_color $colour
    # Pass arguments other than text to echo
    echo $argv[3..] -- ":: $text"
    set_color normal
end

function log -a text
    _out cyan $text $argv[2..]
end

function input -a text
    _out blue $text $argv[2..]
end

function sh-read
    sh -c 'read a && echo -n "$a"' || exit 1
end

function confirm-overwrite -a path
    if test -e $path -o -L $path
        # No prompt if noconfirm
        if set -q noconfirm
            input "$path already exists. Overwrite? [Y/n]"
            log 'Removing...'
            rm -rf $path
        else
            # Prompt user
            input "$path already exists. Overwrite? [Y/n] " -n
            set -l confirm (sh-read)

            if test "$confirm" = 'n' -o "$confirm" = 'N'
                log 'Skipping...'
                return 1
            else
                log 'Removing...'
                rm -rf $path
            end
        end
    end

    return 0
end


# Variables
set -q _flag_noconfirm && set noconfirm '--noconfirm'
set -q XDG_CONFIG_HOME && set -l config $XDG_CONFIG_HOME || set -l config $HOME/.config
set -q XDG_STATE_HOME && set -l state $XDG_STATE_HOME || set -l state $HOME/.local/state

# Determine AUR helper
if set -q _flag_aur_helper
    set -l aur_helper $_flag_aur_helper
else
    # Check which helper is installed
    if pacman -Q yay &> /dev/null
        set -l aur_helper yay
    else if pacman -Q paru &> /dev/null
        set -l aur_helper paru
    else
        # Neither installed, ask user
        if ! set -q _flag_noconfirm
            log 'No AUR helper found. Which would you like to install?'
            log '[1] yay  [2] paru'
            input '=> ' -n
            set -l choice (sh-read)
            
            if test "$choice" = '1'
                set -l aur_helper yay
            else if test "$choice" = '2'
                set -l aur_helper paru
            else
                log 'Invalid choice. Defaulting to paru...'
                set -l aur_helper paru
            end
        else
            # Default to paru if noconfirm
            set -l aur_helper paru
        end
    end
end

# Startup prompt
set_color magenta
echo '╭─────────────────────────────────────────────────╮'
echo '│                                                 │'
echo '│           Dotfiles Installation Script          │'
echo '│                                                 │'
echo '╰─────────────────────────────────────────────────╯'
set_color normal
log 'Welcome to the dotfiles installer!'
log 'Before continuing, please ensure you have made a backup of your config directory.'

# Prompt for backup
if ! set -q _flag_noconfirm
    log '[1] Two steps ahead of you!  [2] Make one for me please!'
    input '=> ' -n
    set -l choice (sh-read)

    if contains -- "$choice" 1 2
        if test $choice = 2
            log "Backing up $config..."

            if test -e $config.bak -o -L $config.bak
                input 'Backup already exists. Overwrite? [Y/n] ' -n
                set -l overwrite (sh-read)

                if test "$overwrite" = 'n' -o "$overwrite" = 'N'
                    log 'Skipping...'
                else
                    rm -rf $config.bak
                    cp -r $config $config.bak
                end
            else
                cp -r $config $config.bak
            end
        end
    else
        log 'No choice selected. Exiting...'
        exit 1
    end
end


# Install AUR helper if not already installed
if ! pacman -Q $aur_helper &> /dev/null
    log "$aur_helper not installed. Installing..."

    # Install
    sudo pacman -S --needed git base-devel $noconfirm
    cd /tmp
    git clone https://aur.archlinux.org/$aur_helper.git
    cd $aur_helper
    makepkg -si
    cd ..
    rm -rf $aur_helper

    # Setup
    if test $aur_helper = yay
        $aur_helper -Y --gendb
        $aur_helper -Y --devel --save
    else
        $aur_helper --gendb
    end
end

# Cd into dir
cd (dirname (status filename)) || exit 1

# Install hypr* configs
if confirm-overwrite $config/hypr
    log 'Installing hypr* configs...'
    ln -s (realpath hypr) $config/hypr
    # Reload hyprland if running
    if pgrep -x Hyprland > /dev/null
        hyprctl reload
    end
end

# Starship
if confirm-overwrite $config/starship.toml
    log 'Installing starship config...'
    ln -s (realpath starship.toml) $config/starship.toml
end

# Fish
if confirm-overwrite $config/fish
    log 'Installing fish config...'
    ln -s (realpath fish) $config/fish
end

# Ghostty
if confirm-overwrite $config/ghostty
    log 'Installing ghostty config...'
    ln -s (realpath ghostty) $config/ghostty
end

# Install spicetify
if set -q _flag_spotify
    log 'Installing spotify (spicetify)...'

    set -l has_spicetify (pacman -Q spicetify-cli 2> /dev/null)
    $aur_helper -S --needed spotify spicetify-cli spicetify-marketplace-bin $noconfirm

    # Set permissions and init if new install
    if test -z "$has_spicetify"
        sudo chmod a+wr /opt/spotify
        sudo chmod a+wr /opt/spotify/Apps -R
        spicetify backup apply
        spicetify config custom_apps marketplace 2> /dev/null
        spicetify apply
    end
end

# Install cursor
if set -q _flag_cursor
    log 'Installing cursor...'
    $aur_helper -S --needed cursor-bin $noconfirm
end

# Install caelestia-shell
log 'Installing caelestia-shell...'
$aur_helper -S --needed caelestia-shell $noconfirm

# Install discord
if set -q _flag_discord
    log 'Installing discord...'
    $aur_helper -S --needed discord equicord-installer-bin $noconfirm

    # Install OpenAsar and Equicord
    sudo Equilotl -install -location /opt/discord
    sudo Equilotl -install-openasar -location /opt/discord

    # Remove installer
    $aur_helper -Rns equicord-installer-bin $noconfirm
end

# Install zen
if set -q _flag_zen
    log 'Installing zen browser...'
    $aur_helper -S --needed zen-browser-bin $noconfirm
end

log 'Done! Please restart your shell or log out and back in for changes to take effect.'