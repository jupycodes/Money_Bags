#!/usr/bin/env bash

#=============================================================================
#INITIAL SETUP
#This will take a long time
#Updates OS
#Installs dependencies
#Setup pm2
#=============================================================================

# apt-get update
# apt-get upgrade -y
# apt-get install -y build-essential
# apt-get install -y apache2
# apt-get install -y mysql-server
#
# curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
# apt-get install -y nodejs
#
# npm install pm2 -g
# pm2 startup systemd

#=============================================================================
#WHILE TESTING
#Installs npm packages for Angular project
#Builds Angular Project
#Links apache2 web server directory to project directory
#Installs npm packages for Express project
#Starts Express project using pm2
#=============================================================================

npm --prefix /vagrant/Angular install
npm --prefix /vagrant/Angular run build
if ! [ -L /var/www/html ]; then
  rm -rf /var/www/html
  ln -fs /vagrant/Angular/dist/money-bags /var/www/html
fi

npm --prefix /vagrant/Express install
pm2 start /vagrant/Express/ecosystem.config.js
