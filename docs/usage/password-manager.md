---
id: password-manager
title: Password Manager
sidebar_position: 1
---

# Password Manager

The Password Manager module allows you to generate, save, update, delete, and manage passwords securely.

## Commands

### Generate

Generate new password as ASCII/HEX.

:::note
Password does **NOT** contain **space**.
:::

- Generate password with random length between 32 to 72 character as ASCII
```sh
$ xpm password-manager|pm generate|g 

# Example:
$ xpm pm g
```

- generate password with random length between 32 to 72 character as HEX
```sh
$ xpm password-manager|pm generate|g --hex

# Example:
$ xpm pm g --hex
```

- generate and save password with random length between 32 to 72 character as ASCII
```sh
$ xpm password-manager|pm generate|g --save <name>

# Example:
$ xpm pm g --save "github account"
```

- generate password with custom length as ASCII
```sh
$ xpm password-manager|pm generate|g <LENGTH>

# Example:
$ xpm pm g 33
```

- generate password with custom length as HEX
```sh
$ xpm password-manager|pm generate|g <LENGTH> --hex

# Example:
$ xpm pm g 16 --hex
```

- generate and save password with custom length
```sh
$ xpm password-manager|pm generate|g <LENGTH> --save <name>

# Example:
$ xpm pm g 33 --save "github account"
```
--- 
### Save

Save custom password in the database.

```sh
$ xpm password-manager|pm save <name>

# Example
$ xpm pm save "My custom password"
```
:::info
- It will ask you to enter the password.
- If password manager database is encrypted it will ask you to enter the decryption key.
:::

---
### Find

Search for password in the database.

```sh
$ xpm password-manager|pm find <STRING>

# Example
$ xpm pm find "github"
```
:::info
- If password manager database is encrypted it will ask you to enter the decryption key.
- It will search based on the string to find the password that contains the string in the password name.
- The search is not case sensitive.
- It will display all passwords that match the string in this format:
    - `<ID> - <CREATED-AT> - <UPDATED-AT> - <NAME>: <PASSWORD>`
:::

---
### Show

Display all passwords in the database.

- Show as list
```sh
$ xpm password-manager|pm show

# Example:
$ xpm pm show
```
:::info
- If password manager database is encrypted it will ask you to enter the decryption key.
- It will display all passwords in this format:
    - `<ID> - <CREATED-AT> - <UPDATED-AT> - <NAME>: <PASSWORD>`
:::

- Show as table
```sh
$ xpm password-manager|pm show --table|-t

# Example:
$ xpm pm show --table
```
:::info
- If password manager database is encrypted it will ask you to enter the decryption key.
- OUTPUT Example:
```txt
╭────┬──────────────────────────────┬─────────────────────┬─────────────────────╮
│ id │             name             │      create_at      │      update_at      │
├────┼──────────────────────────────┼─────────────────────┼─────────────────────┤
│ 1  │ XPManager GitHub             │ 2025-04-08 15:32:12 │ 2025-04-09 08:43:46 │
│ 2  │ API token                    │ 2025-04-08 15:32:12 │ 2025-04-08 15:32:12 │
│ 3  │ test xpm                     │ 2025-04-09 08:38:55 │ 2025-04-09 08:38:55 │
╰────┴──────────────────────────────┴─────────────────────┴─────────────────────╯
```
:::

---
### Count

Get the number of passwords saved in the database.

```sh
$ xpm password-manager|pm count

# Example:
$ xpm pm count
```
:::info
- If password manager database is encrypted it will ask you to enter the decryption key.
- OUTPUT Example:
```txt
[INFO] - [count-password] there is 3 in the database. - 4ms
```
:::

---
### Update

Update the password information.

- update password
```sh
$ xpm password-manager|pm update|up <ID> --password|-p

# Example:
$ xpm pm update 1 --password
```
:::info
- `<ID>` is integer.
- If password manager database is encrypted it will ask you to enter the decryption key.
- It will ask you to enter the new password.
:::

- update the password name
```sh
$ xpm password-manager|pm update|up <ID> --name|-n

# Example:
$ xpm pm update 1 --name
```
:::info
- `<ID>` is integer.
- If password manager database is encrypted it will ask you to enter the decryption key.
- It will ask you to enter the new name.
:::

- update both password and its name
```sh
$ xpm password-manager|pm update|up <ID> --name|-n --password|-p

# Example:
$ xpm pm update 1 --password --name
```
:::info
- `<ID>` is integer.
- If password manager database is encrypted it will ask you to enter the decryption key.
- It will ask you to enter the new name and password.
:::

---
### Delete

Delete specific password from the database.

```sh
$ xpm password-manager|pm delete <ID>

# Example:
$ xpm pm delete 1
```
:::info
- `<ID>` is integer.
- If password manager database is encrypted it will ask you to enter the decryption key.
:::
:::warning
- The password will be permanently **deleted**, you will **NOT** be able to retrieve it.
:::

---
### Encrypt

Encrypt the password manager database.

- encrypt passwords manager database without key
```sh
$ xpm password-manager|pm encrypt

# Example:
$ xpm pm encrypt
```
:::info
- If password manager database is encrypted it will not encrypt it again.
- It will generate new encryption key and display it to you.
- Please store the key somewhere safe.
:::
:::warning
- If you lose the key, you will **NOT** be able to decrypt the database.
:::

- encrypt passwords manager database with custom key
```sh
$ xpm password-manager|pm encrypt --key

# Example:
$ xpm pm encrypt --key
```
:::info
- If password manager database is encrypted it will not encrypt it again.
- It will ask you to enter the key.
:::
:::warning
- If you lose the key, you will **NOT** be able to decrypt the database.
:::

---
### Decrypt

Decrypt the password manager database.

```sh
$ xpm password-manager|pm decrypt

# Example:
$ xpm pm decrypt
```
:::info
- If password manager database is not encrypted it will not decrypt it.
- It will ask you to enter the key.
- Please encrypt the database after you finish working on it.
:::
:::warning
- Leaving the database unecrypted puts your passwords at risk.
:::

---
