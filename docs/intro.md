---
sidebar_position: 1
---

# XPManager

It's good to have a CLI tool that manages your passwords and lets you control them and quickly create new passwords of various sizes to suit your needs. This is where XPManager comes in to help you manage passwords, and also allows you to work with files/folders and secure them with the **Fernet** encryption.

## What's New in v2.3.0?

- Fix: 
    - Decoded string display.
- New: 
    - Encryption and decryption directory with threads (default behavior), see [encryption manager](./usage/encryption-manager).
    - Encryption and decryption directory without threads (`--no-threads`), 
    see [encrypt directory](./usage/encryption-manager#encrypt-directory) and [decrypt directory](./usage/encryption-manager#decrypt-directory).

## Getting Started

- Check out the [Installation Instructions](./installation/index.md) to set up XPManager on your system.
- Learn how to use XPManager with our comprehensive [Usage Guide](./usage/index.md).
- If you encounter any errors, refer to our [Exit Codes](./errors/index.md) documentation for troubleshooting.

## Quick Help

You can use `--help` with any command to print the help message.

```sh
$ xpm --help
```

## About the Project

XPManager is developed by [Mohaned Sherhan (Mr.x)](https://github.com/Mohaned2023).
