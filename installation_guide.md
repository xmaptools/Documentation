# XMapTools Installation & Update Guide

This guide covers how to install and update XMapTools 4.5 and future releases on **macOS** and **Windows** using the official bootstrap scripts. These scripts automate downloading, extracting, and configuring XMapTools and the required MATLAB Runtime.

## Table of Contents

- [Prerequisites](#prerequisites)
- [macOS](#macos)
  - [Full Installation (macOS)](#full-installation-macos)
  - [Update Only (macOS)](#update-only-macos)
  - [Show Information (macOS)](#show-information-macos)
  - [Architecture Selection (macOS)](#architecture-selection-macos)
  - [Terminal Command (macOS)](#terminal-command-macos)
- [Windows](#windows)
  - [Full Installation (Windows)](#full-installation-windows)
  - [Update Only (Windows)](#update-only-windows)
  - [Show Information (Windows)](#show-information-windows)
- [Troubleshooting](#troubleshooting)
  - [XMapTools suddenly not opening (Windows)](#xmaptools-suddenly-not-opening-windows)
  - [Unfreeze XMapTools in case of error](#unfreeze-xmaptools-in-case-of-error)
  - [Uninstalling XMapTools (Windows)](#uninstalling-xmaptools-windows)


## Prerequisites

| Requirement | macOS | Windows |
|---|---|---|
| **OS** | macOS (Intel or Apple Silicon) | Windows 10/11 |
| **Admin rights** | Yes (script prompts for `sudo` password) | Yes (run PowerShell as Administrator) |
| **Internet connection** | Required | Required |
| **Shell** | Terminal (zsh or bash) | PowerShell |

> **Note:** The MATLAB Runtime is installed automatically during a full installation. You do not need a MATLAB licence.

> **Compatibility:** XMapTools 4.5 for Apple Silicon Macs requires MATLAB Runtime 25.1. XMapTools 4.5 for Windows and Intel-based Macs requires MATLAB Runtime v99 (R2020b). The older Runtime v912 can be safely deleted after updating to XMapTools 4.5. On Apple Silicon Macs, v99 can also be [deleted](#delete-old-runtime-libraries).

> **Security:** The code executed by the install command is available at [https://xmaptools.ch/install.sh](https://xmaptools.ch/install.sh) (macOS) and [https://xmaptools.ch/install.ps1](https://xmaptools.ch/install.ps1) (Windows). Do not use any other domain name. The `xmaptools.ch` domain is official and the only domain used to distribute XMapTools. If you are behind a firewall that blocks access, ask your system administrator to allow HTTPS traffic to this domain.

---

## macOS

All macOS commands are run in the **Terminal** app. The script is fetched directly from the XMapTools server and executed locally.

### Full Installation (macOS)

A full installation downloads XMapTools **and** the MATLAB Runtime. Use this when installing XMapTools for the first time or when you need to reinstall the runtime.

**Auto-detect architecture (recommended):**

```bash
curl -fsSL https://xmaptools.ch/install.sh | bash -s -- --install
```

The script automatically detects whether your Mac uses Apple Silicon or Intel and downloads the correct version.

<!-- 
**Specify architecture manually:**

If auto-detection fails or you need to force a specific architecture, you can manually specify which version to install. This is useful if you have multiple architectures available or want to override the detected architecture.

```bash
# Apple Silicon (M1, M2, M3, M4, …)
curl -fsSL https://xmaptools.ch/install.sh | bash -s -- --install AppleSilicon

# Intel
curl -fsSL https://xmaptools.ch/install.sh | bash -s -- --install Intel
```
-->

**What happens during installation:**

1. Any previous XMapTools installation in `/Applications/XMapTools` is removed (you may be prompted for your administrator password).
2. The installer archive is downloaded and extracted to a temporary directory.
3. macOS Gatekeeper quarantine flags are cleared so the app can launch.
4. The graphical installer opens — follow the steps below to complete the setup.
5. A terminal command `xmaptools` is created so you can launch the app from any terminal window.

**Graphical installer steps (macOS):**

1. Enter your password to allow the MATLAB Runtime Installer to make changes.
2. Press **Next**.
3. Leave the default installation folder `/Applications/XMapTools` to allow automatic updates in the future and press **Next**.
4. Leave the default installation folder for the Runtime `/Applications/MATLAB/MATLAB_Runtime` and press **Next**.
5. Click **Begin Install** to install XMapTools and download the Runtime (~2 GB).
6. Press **Close** when the installation is complete.
7. You can now start XMapTools using `XMapTools.app`.

### Update Only (macOS)

An update replaces the XMapTools application bundle **without reinstalling** the MATLAB Runtime. This is faster than a full installation and preserves your runtime setup.

> **Prerequisite:** XMapTools 4.5 or a more recent version running with Runtime 25.1 (Apple Silicon) or v99 (Intel) must already be installed in `/Applications/XMapTools` and **must be closed**.

**Auto-detect architecture (recommended):**

```bash
curl -fsSL https://xmaptools.ch/install.sh | bash -s -- --update
```

<!-- 
**Specify architecture manually:**

```bash
# Apple Silicon
curl -fsSL https://xmaptools.ch/install.sh | bash -s -- --update AppleSilicon

# Intel
curl -fsSL https://xmaptools.ch/install.sh | bash -s -- --update Intel
```
-->

**What happens during an update:**

1. The script verifies that XMapTools is already installed.
2. The latest application archive is downloaded and extracted.
3. The previous app bundle (`XMapTools.app`) is replaced with the new version.
4. Gatekeeper quarantine flags are cleared.
5. Correct file permissions are set on user configuration files.
6. Temporary files are cleaned up.

### Show Information (macOS)

To display the available versions, remote file timestamps, detected MATLAB Runtime installations, and usage instructions:

```bash
curl -fsSL https://xmaptools.ch/install.sh | bash -s -- --info
```

### Architecture Selection (macOS)

| Option | When to use |
|---|---|
| `AppleSilicon` | Macs with M1, M2, M3, M4, or later Apple chips (native performance) |
| `Intel` | Macs with Intel processors |
| *(omitted)* | The script auto-detects the architecture — Apple Silicon is selected on arm64 hardware |

> **Tip:** If you are unsure which architecture your Mac uses, click  > **About This Mac**. If the **Chip** field says "Apple M…", use `AppleSilicon`. If it says "Intel", use `Intel`.

### Terminal Command (macOS)

After installation or update, the script creates a command-line launcher at `/usr/local/bin/xmaptools`. You can start XMapTools from any terminal by typing:

```bash
xmaptools
```

The script also updates your shell configuration file (`.zshrc`, `.bash_profile`, or `.profile`) to ensure `/usr/local/bin` is on your `PATH`.

---

## Windows

All Windows commands are run in **PowerShell**. You should run PowerShell **as Administrator** (right-click → *Run as Administrator*).

### Full Installation (Windows)

A full installation downloads XMapTools **and** the MATLAB Runtime.

```powershell
iex "& { $(irm https://xmaptools.ch/install.ps1) } --install"
```

**What happens during installation:**

1. Any previous XMapTools installation in `C:\Program Files\XMapTools` is removed.
2. The installer archive is downloaded and extracted to a temporary directory.
3. The graphical installer (`XMapToolsInstaller_Windows.exe`) is launched — follow the on-screen instructions to complete the setup.

**Graphical installer steps (Windows):**

1. Press **Next**.
2. Leave the default installation folder `Program Files/XMapTools` to allow automatic updates in the future and press **Next**.
3. Leave the default installation folder for the Runtime `Program Files/MATLAB/MATLAB_Runtime` and press **Next**.
4. Click **Begin Install** to install XMapTools and download the Runtime (~3 GB).
5. Press **Close** when the installation is complete.
6. You can now start XMapTools using `XMapTools.exe`.

### Update Only (Windows)

An update replaces the XMapTools executable and splash screen **without reinstalling** the MATLAB Runtime.

> **Prerequisite:** XMapTools must already be installed in `C:\Program Files\XMapTools`.

```powershell
iex "& { $(irm https://xmaptools.ch/install.ps1) } --update"
```

**What happens during an update:**

1. The script verifies that XMapTools is already installed.
2. The latest application archive is downloaded and extracted.
3. `XMapTools.exe` (and `splash.png` if present) are copied into the existing installation directory.
4. Temporary files are cleaned up.

### Show Information (Windows)

To display the available version, remote file timestamps, detected MATLAB Runtime installations, and usage instructions:

```powershell
iex "& { $(irm https://xmaptools.ch/install.ps1) } --info"
```

---

## Troubleshooting

### "XMapTools does not appear to be installed"

This error occurs when running `--update` without a prior installation. Run a full installation first:

- **macOS:** `curl -fsSL https://xmaptools.ch/install.sh | bash -s -- --install`
- **Windows:** `iex "& { $(irm https://xmaptools.ch/install.ps1) } --install"`

### "Invalid MCR version" after updating

If XMapTools reports an invalid MATLAB Runtime version after an update, the runtime may have changed between versions. Perform a **full reinstallation** using `--install` to get the matching runtime.

### MATLAB Runtime not found

The scripts check for the MATLAB Runtime in:

- **macOS:** `/Applications/MATLAB/MATLAB_Runtime`
- **Windows:** `C:\Program Files\MATLAB\MATLAB Runtime`

If the runtime is missing, a full installation (`--install`) is required.

### Supported MATLAB Runtime versions

| Runtime version | Platform |
|---|---|
| `v99` (R2020b) | macOS Intel, Windows |
| `R2025a` | macOS Apple Silicon (native) |

### macOS: "app is damaged" or Gatekeeper warning

The installation script automatically clears Gatekeeper quarantine flags. If you still see a warning, run manually:

```bash
sudo xattr -cr /Applications/XMapTools/application/XMapTools.app
```

### Windows: script execution policy

If PowerShell refuses to run the script, you may need to adjust the execution policy for the current session:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Then re-run the installation or update command.

### Windows: MATLAB Runtime 2025a conflict

If you already have MATLAB Runtime 2025a (R2025a) installed on your computer, you may receive an error message stating that the installer cannot connect to the MATLAB server. If this happens, open a Command Prompt window (`cmd`) as an administrator (right-click and select *Run as administrator*), then run:

```cmd
cd C:\Program Files\MATLAB\MATLAB_Runtime
rmdir /s R2025a
```

Then re-run the XMapTools installation.

### Windows: permission denied

Make sure you are running PowerShell **as Administrator**. Right-click the PowerShell icon and select *Run as Administrator*.

### XMapTools suddenly not opening (Windows)

If XMapTools was working previously and suddenly stops opening, this can be caused by a corrupted MATLAB Runtime installation or a Windows update that modified system paths. Try the following:

1. Perform a full reinstallation using the `--install` flag
2. If the issue persists, uninstall the MATLAB Runtime (see [Delete Old Runtime Libraries](#delete-old-runtime-libraries)) and reinstall

### Unfreeze XMapTools in case of error

If XMapTools becomes unresponsive during an operation, a dialog box may appear with **OK** and **Cancel** buttons. Click **Cancel** to cancel the current operation and unfreeze XMapTools. Clicking **OK** may restart the operation and keep XMapTools frozen.

### Uninstalling XMapTools (Windows)

To fully uninstall XMapTools on Windows:

1. Open **Settings → Apps & Features** (or **Control Panel → Programs and Features**)
2. Find **XMapTools** in the list and click **Uninstall**
3. Optionally, uninstall the **MATLAB Runtime** from the same list if no other MATLAB-based applications require it

---

## Quick Reference

| Action | macOS | Windows |
|---|---|---|
| **Install** | `curl -fsSL https://xmaptools.ch/install.sh \| bash -s -- --install` | `iex "& { $(irm https://xmaptools.ch/install.ps1) } --install"` |
| **Update** | `curl -fsSL https://xmaptools.ch/install.sh \| bash -s -- --update` | `iex "& { $(irm https://xmaptools.ch/install.ps1) } --update"` |
| **Info** | `curl -fsSL https://xmaptools.ch/install.sh \| bash -s -- --info` | `iex "& { $(irm https://xmaptools.ch/install.ps1) } --info"` |
| **Install dir** | `/Applications/XMapTools` | `C:\Program Files\XMapTools` |
| **Runtime dir** | `/Applications/MATLAB/MATLAB_Runtime` | `C:\Program Files\MATLAB\MATLAB Runtime` |

---

## Delete Old Runtime Libraries

After upgrading to XMapTools 4.5 on an **Apple Silicon Mac**, the older MATLAB Runtime versions (v99, v912) are no longer needed and can be safely removed to free disk space.

> **Note:** On **Windows** and **Intel Macs**, MATLAB Runtime v99 is still required. Do not delete it on these platforms.

**macOS (Apple Silicon only):**

```bash
sudo rm -rf /Applications/MATLAB/MATLAB_Runtime/v99
sudo rm -rf /Applications/MATLAB/MATLAB_Runtime/v912
```

**Windows:**

Use **Settings → Apps & Features** (or **Add or Remove Programs**) to uninstall the older MATLAB Runtime versions (R2020b / v912).
