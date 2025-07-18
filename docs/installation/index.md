---
id: installation
title: Installation Instructions
sidebar_position: 1
---

# Installation Instructions

Follow the steps below to install XPManager on your system based on your operating system.

## Linux
### using .deb package:
```sh
$ sudo dpkg -i xpmanager.deb
```

### using bin file:
- Go to the [Release](https://github.com/xpmanager/XPManager/releases) page and download the latest version of XPManager for Linux.
- Decompress the file.
- Move the xpm bin to `/usr/local/bin`:
```sh
$ chmod +x xpmnager/bin/xpm
$ sudo mv xpmnager/bin/xpm /usr/local/bin
```

## Windows

- Download the latest version of XPManager from the [Release](https://github.com/xpmanager/XPManager/releases) page.
- Extract the contents and move the XPManager folder to your system drive (e.g., C:\XPManager).
- Add the `bin` folder to your system's PATH:
  - Open Environment Variables settings:
    - Press `Win + X`, then select **System**.
    - Click on Advanced system settings > Environment Variables.
  - Under **System variables**, find and select `Path`, then click **Edit**.
  - Add the path to the `XPManager\bin` folder (e.g., C:\XPManager\bin).
  - Click **OK** to save changes.

## From Crates.io:
```sh
$ cargo install XPManager
$ xpm --version
```

## From Source

- You need to install **Rust** and **Cargo** on your system.
- Clone the repo:

```sh
$ git clone https://github.com/xpmanager/XPManager.git
$ cd XPManager
```

- Build the binary
```sh
$ cargo build --release
```

- Move `XPManager/target/release/xpm` to your `bin` folder.
- Try to run:

```sh
$ xpm --version
```

Once this is done, you should be able to run xpm from the command line. 