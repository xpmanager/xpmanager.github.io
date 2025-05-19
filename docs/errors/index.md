---
id: error-codes
title: Exit Codes
sidebar_position: 3
---

## Exit Codes:
Exit codes are numerical values returned by a program upon completion, indicating the success or failure of the executed command. 
These codes are essential for automation, scripting, and error handling, allowing other programs or users to easily interpret the 
outcome of a command. By convention, an exit code of `0` signifies success, while any non-zero value indicates an error or failure. 
Properly defining and using exit codes ensures better usability and troubleshooting in command-line environments.

## XPManager Exit Codes:
In XManager we provide exit codes to facilitate error tracking and make integration with other tools easy. Here is a table showing the exit codes, their values ​​and descriptions:

| name                   | Exit Code | Description                                                         |
|------------------------|-----------|---------------------------------------------------------------------|
| FileNotFound           | 50        | The file you will be working on does not exist.                     |
| FileCreate             | 51        | Can not create the file.                                            |
| FileOpen               | 52        | Can not open the file.                                              |
| FileRead               | 53        | Can not read the file.                                              |
| FileWrite              | 54        | Can not write to the file.                                          |
| FileSeek               | 55        | Can not move the file pointer.                                      |
| FileFlush              | 56        | Can not flush the file to the disk.                                 |
| FileDelete             | 57        | Can not delete the file.                                            |
| FileAlreadyEncrypted   | 58        | The file you will be working on is already encrypted.               |
| FileNotEncrypted       | 59        | The file you will be working on is not encrypted.                   |
| DirNotFound            | 65        | The directory you will be working on does not exist.                |
| DirCreate              | 66        | Can not create the directory.                                       |
| DirUnsupported         | 67        | Can not process the directory because it is not supported.          |
| CanNotGetDirData       | 68        | Can not get the directory data.                                     |
| SystemDataDirNotFound  | 69        | Can not find the system data directory.                             |
| CanNotGetFileOrDirType | 70        | The type could not be determined whether it is file or directory.   |
| CanNotGetJsonObject    | 75        | Can not map the json object to Value type in serde_json.            |
| InvalidJson            | 76        | The json value is invalid.                                          |
| InvalidKey             | 80        | Invalid encryption or decryption key.                               |
| InvalidEncryptionData  | 81        | Encryption data can not be decrypted.                               |
| DBConnection           | 85        | Can not connect the SQLite database file.                           |
| DBInsert               | 86        | Can not insert to the database file.                                |
| DBCreateTable          | 87        | Can not create the database table.                                  |
| PMDatabaseNotFound     | 89        | Password manager database file not found.                           |
| PMDatabaseEmpty        | 90        | Password manager database is empty.                                 |
| LMDatabaseNotFound     | 91        | Log manager database file not found.                                |
| LogNotFound            | 92        | Not found log in the database.                                      |
| LMDatabaseEncrypted    | 93        | Log manager database encrypted.                                     |
| Input                  | 95        | Error input.                                                        |
| MissingArg             | 96        | Missing some args.                                                  |
| ConfirmationNotMatch   | 97        | The confirmation code not match.                                    |
| SampleContainSpace     | 98        | Sample contain space.                                               |
