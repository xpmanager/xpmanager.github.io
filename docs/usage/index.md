---
id: usage
title: Usage Guide
sidebar_position: 2
---

# Usage Guide

XPManager provides several modules to manage your passwords, encrypt and decrypt files, manage backups, and work with logs. This guide will help you understand how to use each of these modules effectively.

## Available Modules

XPManager consists of the following main modules:

1. [**Password Manager**](./password-manager.md): Generate, save, find, update, delete, and manage passwords.
2. [**Encryption Manager**](./encryption-manager.md): Encrypt and decrypt files and directories, as well as encode and decode text.
3. [**Backup Manager**](./backup-manager.md): Create and restore backups of your password manager database.
4. [**Log Manager**](./log-manager.md): Manage logs, including viewing, finding, and deleting log entries.

## Getting Help

You can use the `--help` flag with any command to get more information about its usage:

```sh
# Get general help
$ xpm --help

# Get help for a specific module
$ xpm password-manager --help

# Get help for a specific command
$ xpm password-manager generate --help
```

## Command Aliases

For convenience, many commands have shorter aliases:

- `password-manager` → `pm`
- `encryption-manager` → `em`
- `backup-manager` → `bm`
- `log-manager` → `lm`

For example, instead of typing `xpm password-manager generate`, you can use `xpm pm g`.

## Next Steps

Explore each module in detail by clicking on the links above, or navigate through the sidebar to learn more about specific commands and features. 