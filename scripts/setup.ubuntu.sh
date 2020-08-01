echo "Ubuntu setup started..."
echo "Adding yarn repository to apt..."
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
echo "Updating apt..."
sudo apt update
echo "Trying to install git..."
command -v git >/dev/null 2>&1 && echo "Already installed :)!" || sudo apt install git
echo "Trying to install git-flow..."
command -v git flow >/dev/null 2>&1 && echo "Already installed :)!" || sudo apt install git-flow
echo "Trying to install nvm..."
command -v nvm >/dev/null 2>&1 && echo "Already installed :)!" || curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
echo "Adding nvm to PATH..."
command export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
echo "Loading nvm..."
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
echo "Loading nvm bash_completion..."
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
echo "Trying to install current node version..."
nvm install
echo "Trying to install yarn..."
command -v yarn >/dev/null 2>&1 && echo "Already installed" || sudo apt install --no-install-recommends yarn
echo "Installing node dependencies..."
yarn
echo "Setup finished, you're ready to go!!"