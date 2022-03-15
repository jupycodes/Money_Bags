[![Angular | CI](https://github.com/JordanRoboGarden/Money_Bags/actions/workflows/angular.js.yml/badge.svg?branch=main)](https://github.com/JordanRoboGarden/Money_Bags/actions/workflows/angular.js.yml)
[![Express | CI](https://github.com/JordanRoboGarden/Money_Bags/actions/workflows/express.js.yml/badge.svg)](https://github.com/JordanRoboGarden/Money_Bags/actions/workflows/express.js.yml)
[![Discord](https://discordapp.com/api/guilds/937863219194789908/embed.png)](#)

# Money_Bags

This is a sample application being built as an excersice with students from the [RoboGarden Full Stack Development Bootcamp](https://bootcamps.robogarden.ca/bootcamp/full-stack)

## Testing with vagrant

These steps assume you have completed the [First time vagrant setup](#first-time-vagrant-setup):

1) Start he vm with `vagrant up`
2) Make changes to the project
3) Reload the vm with the new changes by running `vagrant reload --provision`
4) Test in your browser
5) While you are working on your project you can repeat steps 2-4
6) If at anytime you screw something up you can refresh to the clean snapshot we created with `vagrant snapshot restore good`
7) When you are all done run `vagrant halt` to turn off the VM and reclaim resources
8) If you want to completley remove the VM from your system run `vagrant destroy`. (If you do this you will need to do the [First time vagrant setup](#first-time-vagrant-setup) again)

## First time vagrant setup
1) Download and install [vagrant](https://www.vagrantup.com/)
2) Download and install [VirtualBox](https://www.virtualbox.org/)
3) Clone this repo `git clone https://github.com/JordanRoboGarden/Money_Bags`
4) Move into the project directory `cd Money_Bags`

This is the directory structure of /Money_Bags:
```bash
.
├── Angular
├── bootstrap.sh
├── _docs
├── Express
├── README.md
└── Vagrantfile
```
There are two files here that are used to configure vagrant:
```bash
.
├── bootstrap.sh
└── Vagrantfile
```
5) Open `bootstrap.sh` in your favourite text editor

`bootstrap.sh` is a shell script that vagrant calls to provision the VM. I have seperated this file into 2 sections (INITIAL SETUP, WHILE TESTING). I have done this because the commands under `INITIAL SETUP` only need to be ran once when the VM is first created and take forever to run (maybe around 30 minutes depending on hardware), while the `WHILE TESTING` section needs to run every time we change our code.
This file looks like this:
```bash
#!/usr/bin/env bash

#=============================================================================
#INITIAL SETUP
...
#=============================================================================

<initial setup code here>

#=============================================================================
#WHILE TESTING
...
#=============================================================================

<while testing code here>
```
6) Comment out all of the code under `WHILE TESTING` and uncomment all the code under `INITIAL SETUP`

At this point your `bootstrap.sh` file should look like this:

![image](https://user-images.githubusercontent.com/75544780/158471761-7a2d8833-a9f6-4f3c-bad3-98a641192d90.png)

7) Run `vagrant up` to start the VM. This is going to take a long time
8) Run `vagrant snapshot save good`. This command will create a snapshot of the VM in its current state so we never have to wait for the previous step again.
9) Edit `bootstrap.sh`. This time commenting out all the commands under `INITIAL SETUP` and uncommenting code under `WHILE TESTING`
10) Run `vagrant reload --provision`. This will run the provisioner again this time running the newly uncommented code

At this point everything should be working. You should be able to navigate on your host machine to the project at the following URLS:

```bash
Angular   | https://localhost:8080
Express   | https://localhost:3030
```
### Useful vagrant commands
| Command [required_arg] <--flags> | Effect                       |
|----------------------------------|------------------------------|
| `vagrant up <--provision>`         | starts the VM                |
| `vagrant halt`                     | stops the VM                 |
| `vagrant reload <--provision>`     | halt + up                    |
| `vagrant ssh`                      | Start SSH session in VM      |
| `vagrant snapshot save [name]`     | creates a new named snapshot |
| `vagrant snapshot restore [name]`  | restores to a named snapshot |
| `vagrant snapshot delete [name]`   | deletes a named snapshot     |
