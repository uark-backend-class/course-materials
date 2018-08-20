# How to Setup Your Development Environment

- Install Git
  - Mac Users
    - Open terminal using `command+space` to open Spotlight and type `terminal` into the search field
    - Type `git` and download anything if there are prompts. Otherwise, you should see a usage guide.
  - Windows Users
    - Download and install git from [git-scm.com](git-scm.com)
- Install Node.js LTS from [nodejs.org](https://nodejs.org/en/)
- Install Visual Studio Code from [code.visualstudio.com](https://code.visualstudio.com/)
- Windows users: we will only be covering unix-style and not Windows cmd window commands. Please run `git bash` to have a unix-like terminal window. See this [article](https://stackoverflow.com/questions/42606837/how-to-use-bash-on-windows-from-visual-studio-code-integrated-terminal) for information on how to run the git bash inside of Visual Studio Code.
  <!-- - Install nvm:1
    ```
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
    ```
- Create your bash profile `touch ~/.bash_profile`
- Open your bash profile `vim .bash_profile`
- Update your bash profile to include a path to your install of nvm: (use `command + v` to paste)

  ```sh
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
  ```

  Make sure the first line has the full export command, since that was causing us problems in class yesterday. Manually fix it in your bash profile if you have to.

- Exit vim via `esc`, then press and hold `shift`, then press `z` twice
- Completely quit your terminal `command + q`
- Reopen terminal
- Install Node 6.11: `nvm install 6.11`
- Install Node 8.1: `nvm install 8.1`
- Use Node 6.11: `nvm use 6.11` -->
