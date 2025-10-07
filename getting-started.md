# How to get started?

## Compatibility

The installation and update procedures for XMapTools 4.5 have changed and the binaries are compatible with the MATLAB Runtime 25.1. You must install the compatible version of the Runtime. This happens automatically when you install XMapTools using the graphical installer (see below). Older versions of the Runtime (e.g. v99, or v912) can be [deleted](#delete-old-runtime-libraries) after updating to XMapTools 4.5.

## Installing XMapTools

Please check the [compatibility](#compatibility) before installing or updating to this version of XMapTools as it may not be compatible with your OS or CPU.

### Installation macOS

To install XMapTools on macOS, open your Terminal and copy and paste the following command.

```
curl -fsSL https://xmaptools.ch/install.sh | bash -s -- --install
```

  Press Enter to run the installation script and launch the graphical installer. Note that you may be prompted to enter an administrator password.

#### Detailed steps
1. Copy the above code into your terminal and press return.
2. Removing an old XMapTools installation may require you to enter your administrator password in the terminal and press return.
3. Once the installer files are downloard the script launches the graphical installer.
4. Enter your password to allow the MATLABruntimeInstaller to make changes.
5. Press Next.
6. Leave the default installation folder ‘/Applications/XMapTools’ to allow automatic updates in the future and press Next to continue.
7. Leave the default installation folder for the Runtime ‘/Applications/MATLAB/MATLAB_Runtime’ and press Next.
7. Click ‘Begin Install’ to install XMapTools and download the runtime (~2Gb).
8. Press Close.
9. The installation is complete and you can start XMapTools using XMapTools.app.

#### Warning

The code executed by the prompt command is available at https://xmaptools.ch/install.sh. Do not use any other domain name. The xmaptools.ch is official and the only domain used to distribute the compiled version of XMapTools. If you are using XMapTools behind a firewall that blocks access to these, you may have trouble downloading and installing the program. If this is the case, please ask your system admin to add this domain to the firewall allow list. Traffic can be limited to HTTPS.

#### Other versions on macOS

The list of available XMapTools versions can be obtained using the following command:  
 
```
curl -fsSL https://xmaptools.ch/install.sh | bash -s -- --info
```

The Intel version (runtime v99) can be installed using: 
 
```
curl -fsSL https://xmaptools.ch/install.sh | bash -s -- --install Intel
```

The Rosetta version (runtime v912) can be installed using: 

```
curl -fsSL https://xmaptools.ch/install.sh | bash -s -- --install Rosetta
```

Please note that these versions will not be supported in future. 

### Installation Windows


## Updating XMapTools

### Update macOS

The automatic update of XMapTools to the latest version can be performed after closing XMapTools by simply running this command in a new terminal:

```
curl -fsSL https://xmaptools.ch/install.sh | bash -s -- --update
```

If you receive an error message saying that the target directory does not exist, run the installation script using the command provided in the [Installation macOS](#installation-macos) section.  


### Update Windows


## Opening XMapTools for the first time

This article will guide you through the steps to open XMapTools (standalone versions) for the first time.

1. Open the XMapTool app. __Note__ that it may take XMapTools up to a minute to start. Take this opportunity to get a drink or chat to someone. XMapTools will start up slightly faster the next time you use it, until you turn off your computer.

2. When the programme is ready, a dialogue box opens; select your working directory and press the ‘Open’ button. __Note__: A working directory contains the data of a specific project. XMapTools automatically generates files during use that are stored in the selected working directory. Although you can change the working directory later on, you must select one when you start the program. A log file is also automatically created in the selected working directory.

3. When the interface is displayed, you will see that the current working directory is displayed in the top bar of the main window.

4. You are now ready to go and you can start converting raw data or importing maps.

5. Working with EPMA data? Try to this [tutorial](/tutorials.html#tutorial-1-xmaptools-for-epma-2023).

6. Working with LA-ICPMS data? Read this [paper](https://pierrelanari.com/wp-content/uploads/2024/01/2024_Markmann_ChemGeol.pdf).


## Common questions

### Why do I have to choose a working directory?

XMapTools creates a lot of files during data processing and it is better to store these files together with the data they belong to.

Therefore, it is strongly recommended to have a folder for each project that contains only the map and standard files needed by XMapTools. Raw data should be stored in a separate folder.

### Why does it take so long to start XMapTools?

Well, we have to load all the MATLAB libraries and this takes some time. Note that the second time you run XMapTools, it will be faster if you haven’t restarted your computer. Use this time to think about your project and perhaps just a cup of tea or coffee.

### I am lost, where can I get some help?

You can find articles on this website and help files in the program. We also have [tutorial videos](/tutorials.html). Do not hesitate to click on the help button available in each section to access a description of the main steps. If you feel that something is missing or unclear, or if you find an error, do not hesitate to contact us on [Discord](https://discord.com/invite/2ak9RXcJ5b) or via the [developer repository](https://github.com/xmaptools/XMapTools_Developers) on Github.


## Delete old runtime libraries

