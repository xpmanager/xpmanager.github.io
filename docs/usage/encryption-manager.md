---
id: encryption-manager
title: Encryption Manager
sidebar_position: 2
---

# Encryption Manager

The Encryption Manager module allows you to encrypt and decrypt files and directories securely using **Fernet** encryption, as well as encode and decode text.

We have two types of encryption (xpmv1, xpmv2), **xpmv1** was for the first version of 
**XPManager** which was written in **Python**, we didn't change the encryption algorithm 
but now there is a difference as we use the buffers principle to read and ecrypt 
files which means we read a certain part of the file and then encryp it, this tactic 
allows us to process huge files quickly and effciently. Use **xpmv1** if you have file 
was encrypted by the old version of **XPManager** (XPManager v1.x.x).

:::note
In the **directory** encryption and decryption we use threads to speed up the process. 
It can make the CPU work at its maximum potential, to avoid this use `--no--threads` 
to make the process only on the main thread this may lead to a decrease in the speed 
of the tool.
:::

## Commands

### Encrypt File

Encrypt a file with Fernet encryption.

- encrypt file with auto-generated key
```sh
$ xpm encryption-manager|em encrypt-file|ef <FILE>

# Example:
$ xpm em ef "./path/file.txt"
```
:::info
- It will display the encryption key to you.
- Please store the key somewhere safe.
:::
:::warning
- If you lose the key, you will **NOT** be able to decrypt the database.
:::

- encrypt file with custom key
```sh
$ xpm encryption-manager|em encrypt-file|ef <FILE> --key|-k

# Example:
$ xpm em ef "./path/file.txt" --key
```
:::info
- It will ask you to enter the encryption key.
:::

- encrypt file with key and delete the origin file
```sh
$ xpm encryption-manager|em encrypt-file|enf <PATH> --key --delete

# Example:
$ xpm em enf "./path/file.txt" --key --delete
```
:::info
- It will ask you to enter the encryption key.
:::
:::warning
- It will **wipe** and **detele** the origin file. in this case the origin file is `./path/file.txt`
:::

---
### Decrypt File

Decrypt a file that was encrypted with Fernet encryption.

- decrypt file
```sh
$ xpm encryption-manager|em decrypt-file|def <PATH>

# Example:
$ xpm em def "./path/file.txt.x"
```
:::info
- It will ask you to enter the decryption key.
:::

- decrypt file and delete it
```sh
$ xpm encryption-manager|em decrypt-file|def <PATH> --delete

# Example:
$ xpm em def "./path/file.txt.x" --delete
```
:::info
- It will ask you to enter the decryption key.
:::
:::warning
- It will **wipe** and **detele** the encryption file. in this case the encryption file is `./path/file.txt.x`
:::

- decrypt file that has been encrypted using XPManager v1.0
```sh
$ xpm encryption-manager|em decrypt-file|def <PATH> --xpmv1

# Example:
$ xpm em def "./path/old-file.txt.x" --xpmv1
```
:::info
- You need to decode the old XPManager v1.x.x key using `xpm em decode --xpmv1`
- It will ask you to enter the decryption key.
:::
:::warning
- Do **NOT** use `--xpmv1` with files has been encrypted using XPManager v2.x.x
:::

---
### Encrypt Directory

Encrypt all files in a directory.

:::note
By default we use **threads**, to avoid that use `--no-threads`.
```sh
$ xpm encryption-manager|em encrypt-dir|end <PATH> --no-threads
```
:::

- encrypt directory with auto-generated key
```sh
$ xpm encryption-manager|em encrypt-dir|end <PATH>

# Example:
$ xpm em end "./path/folder"
```
:::info
- It will ask you to confirm the process.
    - Confirmation code is 6-digit code.
    - It will display it to you.
    - Example: `Please enter 566839 to continue: `
- It will generate new encryption key and display it to you.
:::

- encrypt directory with custom key
```sh
$ xpm encryption-manager|em encrypt-dir|end <PATH> --key

# Example:
$ xpm em end "./path/folder" --key
```
:::info
- It will ask you to confirm the process.
    - Confirmation code is 6-digit code.
    - It will display it to you.
    - Example: `Please enter 566839 to continue: `
- It will ask you to enter the encryption key.
:::

- encrypt directory and delete all files
```sh
$ xpm encryption-manager|em encrypt-dir|end <PATH> --key --delete

# Example:
$ xpm em end "./path/folder" --key --delete
```
:::info
- It will ask you to confirm the process.
    - Confirmation code is 6-digit code.
    - It will display it to you.
    - Example: `Please enter 566839 to continue: `
- It will ask you to enter the encryption key.
:::
:::warning
- This will **wipe** and **delete** all origin files in the directory.
:::

---
### Decrypt Directory

Decrypt all files in a directory that were encrypted with Fernet encryption.

:::note
By default we use **threads**, to avoid that use `--no-threads`.
```sh
$ xpm encryption-manager|em decrypt-dir|ded <PATH> --no-threads
```
:::

- decrypt decrypt
```sh
$ xpm encryption-manager|em decrypt-dir|ded <PATH>

# Example:
$ xpm em ded "./path/folder"
```
:::info
- It will ask you to enter the decryption key.
:::

- decrypt directory and delete all files
```sh
$ xpm encryption-manager|em decrypt-dir|ded <PATH> --delete

# Example:
$ xpm em ded "./path/folder" --delete
```
:::info
- It will ask you to enter the decryption key.
:::
:::warning
- This will **wipe** and **delete** all encrpyted files in the directory.
:::

- decrypt directory that has been encrypted using XPManager v1.x.x
```sh
$ xpm encryption-manager|em decrypt-dir|ded <PATH> --xpmv1

# Example:
$ xpm em ded "./path/folder" --xpmv1
```
:::info
- You need to decode the old XPManager v1.x.x key using `xpm em decode --xpmv1`
- It will ask you to enter the decryption key.
:::
:::warning
- Do **NOT** use `--xpmv1` with files has been encrypted using XPManager v2.x.x
:::

---
### Encode

Encode strings using different techniques.

- encode strings as hexadecimal
```sh
$ xpm encryption-manager|em encode|enc 
# OR
$ xpm encryption-manager|em encode|enc --hex

# Example:
$ xpm em enc
# OR
$ xpm em enc --hex
```
:::info
- It will ask you to enter the string.
- INPUT example: `XPManager`
- OUTPUT example: `58 50 4D 61 6E 61 67 65 72`
:::

- encode strings as binary
```sh
$ xpm encryption-manager|em encode|enc --bin

# Example:
$ xpm em enc --bin
```
:::info
- It will ask you to enter the string.
- INPUT example: `xpm`
- OUTPUT example: `1111000 1110000 1101101`
:::

- encode strings as XPManager v1.x.x key
```sh
$ xpm encryption-manager|em encode|enc --xpmv1

# Example:
$ xpm em enc --xpmv1
```
:::info
- It will ask you to enter the string.
- It will ask you to enter the constant.
- Constant is an integer number between `1000-9999`.
- INPUT example: 
    - string: `xpm`
    - constant: `9999`
- OUTPUT example: `0x124f08%$%0x111690%$%0x10a163`
:::

- Hash string using simple hexadecimal hash
```sh
$ xpm encryption-manager|em encode|enc --hex-hash

# Example:
$ xpm em enc --hex-hash
```
:::info
- It will ask you to enter the string.
- INPUT example: `Rust is the best`
- OUTPUT example: `1AE DC 141 1AE`
:::

---
### Decode

Decode strings using different techniques

- decode hexadecimal strings
```sh
$ xpm encryption-manager|em decode|dec
# OR
$ xpm encryption-manager|em decode|dec --hex

# Example:
$ xpm em dec
# OR
$ xpm em dec --hex
```
:::info
- It will ask you to enter the encode string.
- INPUT example: `58 50 4D 61 6E 61 67 65 72`
- OUTPUT example: `XPManager`
:::

- decode strings as binary 
```sh
$ xpm encryption-manager|em decode|dec --bin

# Example:
$ xpm em dec --bin
```
:::info
- It will ask you to enter the encode string.
- INPUT example: `1111000 1110000 1101101`
- OUTPUT example: `xpm`
:::

- decode strings as XPManager v1.x.x key
```sh
$ xpm encryption-manager|em decode|dec --xpmv1

# Example:
$ xpm em dec --xpmv1
```
:::info
- It will ask you to enter the encode string.
- It will ask you to enter the constant.
- INPUT example: 
    - encode: `0x124f08%$%0x111690%$%0x10a163`
    - constant: `9999`
- OUTPUT example: `xpm`
:::

---
