# GUI and CLI

1. Graphical User Interface(GUI)

   - Uses graphical components such as Icons, Buttons, Menus to
     interact with our machine.

2. Command-Line Interface(CLI)
   - Uses text based commands to interact with our machines.

## Default Terminals

- Windows: Powershell.
- Mac: Z-Shell(zsh).

## Command-line commands

1.  mkdir (Make Directory)

- Note: If the folder name contains spaces, encapsulate it using either " or ""

```bash
    mkdir [directory_name] = make directory
    # Creating multple folders
    mkdir [directory_name] [directory_name]
```

2.  rmdir (Remove Directory)

```bash
    # With consent
    rm -ir [directory_name] = remove directory with consent
    # Without consent
    rmdir [directory_name] = remove directory without consent
```

3.  pwd (Print Working Directory)

```bash
    pwd = To know our current location
```

4.  ls (List Command)

```bash
    ls = List all the files and folders inside the current folder
```

5.  cd (Change Directory)

```bash
    cd [new_directory] = To change directory
    cd .. = Go back to the parent folder/directory
```

## File Operations

1. Create file

```bash
touch [filename.extension]
```

2. Delete a file

```bash
rm [filename.extension]
```

3. Rename a file

```bash
mv [current_filename.extension] [new_filename.extension]
```

4. Move a file

```bash
mv [current_filename.extension] [new_directory_path]
```

5. Display the contents of the file.

```bash
cat [filename.extension]
```

6. Display the first 10 lines of a file.

```bash
head [filename.extension]
```

7. Display the last 10 lines of a file.

```bash
tail [filename.extension]
```

8. Display the nth number lines of a file.

```bash
[head/tail] -n [number_of_lines] [filename.extension]
```

## Searching

1. Check the files, folders, and subfolder of the current folder.

```bash
 find .
```

2. Check the files inside the current folder.

```bash
find . -type f
```

3. Check the folder inside the current folder.

```bash
find . -type d
```

4. Search for a specific file.s

```bash
find . -name [filename.extension]
```
