# -----------------------------------------------------------------------------
#  Basic Zsh & Oh My Zsh Configuration (Arch Linux / Hyprland)
# -----------------------------------------------------------------------------

# Path to your Oh My Zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Path to your custom Oh My Zsh stuff.
export ZSH_CUSTOM="$HOME/.local/share/oh-my-zsh"
# Path to your custom Oh My Zsh plugins.
export ZSH_CUSTOM_PLUGINS_PATH="$ZSH_CUSTOM/plugins" 

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time Oh My Zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="af-magic"

# -----------------------------------------------------------------------------
#  Oh My Zsh Settings
# -----------------------------------------------------------------------------

# Uncomment to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment to treat hyphens and underscores interchangeably in completion.
# Requires CASE_SENSITIVE="false" (default).
# HYPHEN_INSENSITIVE="true"

# Uncomment to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment to change auto-update frequency (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment if pasting URLs or other text gets messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment to enable command auto-correction.
ENABLE_CORRECTION="true"

# Uncomment to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment if you want to speed up status checks in large Git repos
# by not marking untracked files as dirty.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Set the timestamp format for the history command.
# HIST_STAMPS="yyyy-mm-dd"

# -----------------------------------------------------------------------------
#  Plugins
# -----------------------------------------------------------------------------
# Ensure external dependencies are installed (see preamble above)!
# Custom plugins (like zsh-autosuggestions) should be in $ZSH_CUSTOM/plugins/

plugins=(
  # Core & Git
  git                      # Git aliases and functions
  sudo                     # Press Esc twice to prepend sudo
  colored-man-pages        # Colorize man pages
  extract                  # Universal archive extractor (needs tar, gzip, etc.)

  # Completions & Syntax Highlighting
  zsh-autosuggestions      # Suggests commands as you type based on history (Clone to $ZSH_CUSTOM/plugins)
  zsh-syntax-highlighting  # Syntax highlighting for the command line (Clone to $ZSH_CUSTOM/plugins)

  # Productivity & Tools
  web-search               # Search DuckDuckGo, Google, etc. (e.g., google query)
  archlinux                # Arch Linux specific aliases & helpers (pacman, yay, etc.)
  command-not-found        # Suggests packages for unknown commands (needs pacman -S pkgfile && sudo pkgfile --update)

  # Docker
  docker                   # Docker aliases & completions (needs pacman -S docker)
  docker-compose           # Docker Compose aliases & completions (needs pacman -S docker-compose)

  # Web Development
  node                     # Node.js (npm/yarn) aliases & helpers (needs nodejs/npm or nvm)
  python                   # Python helpers (virtualenv, etc.)
)

# -----------------------------------------------------------------------------
#  Plugin Configuration
# -----------------------------------------------------------------------------

# Strategy for zsh-autosuggestions (use history and completions)
ZSH_AUTOSUGGEST_STRATEGY=(history completion)

# Set default AUR helper for the 'archlinux' plugin (if you use one)
ZSH_ARCHLINUX_HELPER="yay"

# -----------------------------------------------------------------------------
#  Zsh Options (`setopt`)
# -----------------------------------------------------------------------------
setopt AUTO_CD              # Auto 'cd' if command is a directory path
setopt EXTENDED_GLOB        # Enable extended globbing patterns (e.g., **/*.js)
setopt COMPLETE_IN_WORD     # Allow completion from within a word
setopt ALWAYS_TO_END        # Move cursor to the end of a completed word
setopt PATH_DIRS            # Perform path search even on command names with slashes
setopt HIST_IGNORE_DUPS     # Don't record duplicate commands in history
setopt HIST_IGNORE_SPACE    # Don't record commands starting with a space
setopt SHARE_HISTORY        # Share history between all sessions
setopt INC_APPEND_HISTORY   # Write history entry as soon as command is entered

# -----------------------------------------------------------------------------
#  Aliases
# -----------------------------------------------------------------------------

# Navigation & Listing
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias ls='ls --color=auto -F'   # Add file type indicators (-F)
alias ll='ls -l --color=auto -hF' # Long listing, human-readable sizes (-h)
alias la='ls -la --color=auto -hF' # Long listing including hidden files
alias l='ls -CF --color=auto'   # List in columns

# Searching
alias grep='grep --color=auto'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'

# Git (plugin 'git' provides many, these are additions/overrides)
alias g='git'
alias ga='git add'
alias gaa='git add --all'
alias gc='git commit -m'
alias gca='git commit -v -a' # Commit all tracked changes
alias gco='git checkout'
alias gcb='git checkout -b'
alias gs='git status -sb'    # Short branch status
alias gst='git status'       # Full status
alias gd='git diff'
alias gds='git diff --staged'
alias gl='git log --oneline --graph --decorate --all' # Log all branches concisely
alias glog='git log --graph --pretty=format:"%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset" --abbrev-commit' # Nicer log format
alias gp='git push'
alias gpf='git push --force-with-lease' # Safer force push
alias gpl='git pull'
alias gplr='git pull --rebase'
alias gm='git merge'
alias gr='git remote -v'
alias gcl='git clone'

# Docker (plugin 'docker' & 'docker-compose' provide many, e.g., dco, dcu, dcd)
alias d='docker'
alias dc='docker-compose'
alias dps='docker ps'
alias dpsa='docker ps -a'
alias di='docker images'
alias dv='docker volume ls'
alias dn='docker network ls'
alias dlogs='docker logs -f' # Follow logs of a container

# Arch Linux (plugin 'archlinux' provides update, pacup, pacin, etc.)
# You can override or add your own:
alias update='sudo pacman -Syu' # Basic system update
# alias update='yay -Syu'       # Example if using yay (also updates AUR)
alias cleanup='sudo pacman -Rns $(pacman -Qtdq)' # Remove orphaned packages
alias orphans='pacman -Qtdq'    # List orphaned packages
alias pkginfo='pacman -Qi'      # Info about an installed package
alias pkgfiles='pacman -Ql'     # List files owned by a package
alias pkgsearch='pacman -Ss'    # Search for packages in repos

# Web Development (Node.js, npm, yarn)
alias ni='npm install'
alias nis='npm install --save'
alias nisd='npm install --save-dev'
alias nig='npm install -g'
alias nr='npm run'
alias nrd='npm run dev'         # Common script name
alias nrb='npm run build'       # Common script name
alias nrt='npm run test'        # Common script name
alias ns='npm start'
alias nci='npm ci'              # Clean install from package-lock.json

alias ya='yarn add'
alias yad='yarn add --dev'
alias yag='yarn global add'
alias yr='yarn run'
alias yd='yarn dev'
alias yb='yarn build'
alias yt='yarn test'
alias ys='yarn start'
alias yi='yarn install'         # Yarn install/ci equivalent

# Hyprland / Wayland Specific
alias hc='hyprctl'              # Shortcut for hyprctl
alias pbcopy='wl-copy'          # Use wl-copy for copying to clipboard
alias pbpaste='wl-paste'        # Use wl-paste for pasting from clipboard
alias wlr='wl-paste --watch wl-copy' # Simple clipboard history watcher (basic)

# Other Utilities
alias c='clear'
alias h='history'
alias hg='history | grep'       # Search history
alias ping='ping -c 5'          # Ping 5 times
alias myip='curl -s ifconfig.me' # Get public IP quietly
alias ports='sudo ss -tulpn'    # Show listening ports (ss is preferred over netstat)
alias e='$EDITOR'               # Edit file with default editor
alias v='$VISUAL'               # Edit file with visual editor (often same as EDITOR)

# -----------------------------------------------------------------------------
#  User Configuration (Your custom settings)
# -----------------------------------------------------------------------------

# Accept zsh-autosuggestions with Ctrl+Space
bindkey '^ ' autosuggest-accept

# Set preferred editors
# export EDITOR='nvim'
# export VISUAL='nvim'

# Other environment variables
# export GOPATH=$HOME/go
# export PATH=$GOPATH/bin:$PATH

# -----------------------------------------------------------------------------
#  Load Oh My Zsh 
# -----------------------------------------------------------------------------

source $ZSH/oh-my-zsh.sh

# -----------------------------------------------------------------------------
#  Initialize Plugins / Tools 
# -----------------------------------------------------------------------------

source /usr/share/nvm/init-nvm.sh


neofetch
