---
id: backup-manager
title: Backup Manager
sidebar_position: 3
---

# Backup Manager

The Backup Manager module allows you to create and restore backups of your password manager and log manager databases.

## Commands

### Backup

Create a backup of your password manager or log manager database.

- backup the password manager database
```sh
$ xpm backup-manager|bm backup <SAVE-PATH> --password 

# Example:
$ xpm bm backup "./path/backup_folder" --password
```
:::info
- It will not create the backup if the password manager database is not encrypted.
- In this case you will find the backup at `./path/backup_folder/passwords.db.x`
:::

- backup the log manager database
```sh
$ xpm backup-manager|bm backup <SAVE-PATH> --log 

# Example:
$ xpm bm backup "./path/backup_folder" --log
```
:::info
- In this case you will find the backup at `./path/backup_folder/xpm-log.db`
:::

- backup the log manager and password manager database
```sh
$ xpm backup-manager|bm backup <SAVE-PATH> --log --password

# Example:
$ xpm bm backup "./path/backup_folder" --log --password
```
:::info
- In this case you will find the log backup at `./path/backup_folder/xpm-log.db` and the password backup at `./path/backup_folder/passwords.db.x`
:::

---
### Restore

Restore a backup of your password manager and log manager databases.

:::note
For **XPManager v2.x.x** we just **merge** the restore if the database have information.
:::

- restore the password manager database
```sh
$ xpm backup-manager|bm restore <PATH> --password 

# Example:
$ xpm bm restore "./path/backup_folder/passwords.db.x" --password
```
:::info
- It will ask you to enter the restore file decryption key.
- It will ask you to enter the password manager database decryption key.
- If the restore file is not encrypted -> encrypt it and then restore it.
:::

- restore the log manager database
```sh
$ xpm backup-manager|bm restore <PATH> --log 

# Example:
$ xpm bm restore "./path/backup_folder/xpm-log.db" --log
```
:::info
- If the restore file is encrypted -> decrypt it and then restore it.
:::
:::warning
- We do not support the **merge** in the log manager restore, so it will delete the old database and restore the new one.
:::

- restore the XPManager v1.x.x passwords database
```sh
$ xpm backup-manager|bm restore <PATH> --xpmv1

# Example:
$ xpm bm restore "./path/backup_folder/.passwords.json.x" --xpmv1
```
:::info
- You need to decode the old XPManager v1.x.x key using `xpm em decode --xpmv1`.
- It will ask you to enter the restore file decryption key.
- It will ask you to enter the password manager database decryption key.
- If the restore file is not encrypted -> use `xpm bm restore <PATH> --password-json`.
:::

- restore passwords from a json file
:::note
- File must be JSON.
- Must contain single key and value.
- File fromat:
```json
{ 
    "<PASSWORD-NAME-1>": "<PASSWORD-1>",
    "<PASSWORD-NAME-2>": "<PASSWORD-2>",
    ...
}
```
:::
```sh
$ xpm backup-manager|bm restore <PATH> --password-json

# Example:
$ xpm bm restore "./path/backup_folder/passwords.json" --password-json
```
:::info
- It will ask you to enter the password manager database decryption key.
- If the restore file is encrypted -> decrypt it and then restore it.
:::

---
