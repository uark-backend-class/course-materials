## Directory Functions

Sample directory tree:

```
+--	Projects
	+-- mysite
	|	\-- .gitignore
	|	\-- about.txt
	|	\-- index.html
	|
	+-- nodecli
	|	\-- index.js
```

A user's home directory is represented by a `~` in the terminal window. It's possible to see the actual path for this directory by typing `$HOME` into the terminal window.

To see the current directory, use the `pwd` (print working directory) command. This will show the current directory.

```bash
$ pwd
/home/Projects
```

### Changing Directories

To change directories, use the `cd` (change directory) command.

```bash
$ cd destination

$ cd ~/Projects/mysite
$ cd ..
$ pwd
/home/Projects
```

By using `..` after `cd`, the current directory will go up one level in the tree (i.e. back one level).

### Directory Contents

To see the directory's contents, `ls` (list) can be used.

There are several important arguments for `ls`:

- `-a` - all. Lists all hidden files & folders in the current directory. `ls -a`
- `-l` - long. Lists all the contents in long format. `ls -l`. This will return results with 7 columns:
	1. Access rights.
	2. Number of child directories and files (including parent directory and current directory -- also known as "hard links")
	3. Username of file owner.
	4. Name of group that owns file.
	5. Size of the file in bytes.
	6. Date & time file was last modified.
	7. Name of the file or directory. 
- `-t` - time. Lists contents by the time they were last modified.

A sample output of the above will look something like:

```bash
permissions username usergroup filesize mod_date file_name
drwxr-xr-x3 blakej blakej 4096 Oct 30 18:42 Projects
```

This can be broken down to look like: `[d][rwx][r-x][r-x][3]`

The first character of the permissions string represents the type of file.

- `d`: directory
- `-`: normal file
- `l`: link

The next 9 characters represent permissions.

- `r`: read permission.
- `w`: write permission
- `x`: execute permission.

The first set of 3 characters represents the file owner's permissions. The next three are the group's permissions. The final three characters are the permissions for all other users that are not the owner or part of the owner's group. The final number represents the number of hard links.

In the above example, the owner can read, write and execute files in the directory. However, the group and other users cannot write to the directory. They can only read and execute.

It's also possible to concatenate several options together. 

```bash
$ ls -options

$ cd Projects/mysite
$ ls
about.txt 	index.html

$ ls -a
.gitignore 	about.txt 	index.html
```

To concanate more than one option, use the syntax `-xxx` (i.e. `$ ls -alt`).

### File Contents

To view the contents of a file, use the `cat` (concatenate) comamnd.

```bash
$ pwd
/home/Projects/mysite

$ cat about.txt
My site is the coolest!
```

### Create a File

To create new files, use the `touch` command.

```bash
$ pwd
/home/Projects/mysite

$ ls
about.text 	index.html

$ touch blog.html
$ ls
about.text 	blog.html 	index.html
```

### Renaming Files

To rename files, use the `mv` (move) command.

```bash
$ mv oldfilename newfilename

$ pwd
/home/Projects/mysite

$ mv blog.html blogpost.html
$ ls
about.text 	blogpost.html 	index.html
```

### Moving Files

The `mv` command can also be used to move files from one location to another.

```bash
$ pwd
/home/Projects/mysite

$ mv .gitignore ~/Projects/nodecli
$ ls -a
about.text 	blogpost.html 	index.html

$ cd ~/Projects/nodecli
$ ls -a
.gitignore 	index.js
```

### Copying Files

To copy files from one directory to another, use the `cp` (copy) command.

```bash
$ pwd
/home/Projects/mysite

$ cp about.txt ~/Projects/nodecli
$ li
about.txt 	index.js
```

### Deleting Files

Files can be deleted using `rm` (remove). Using the `-r` (recursive) option with this command will remove all subfolders and files.

```bash
$ pwd
/home/Projects

$ rm -r node cli
$ ls
mysite
```

### Search for Files

To search for files within a given directory, use the `find` command. This will search for specific files. It's also possible to use the `*` wildcard character with this command to find all files that match a particular pattern.

```bash
$ find /path/ -name file.txt

$ pwd
/home/Projects

$ find ~/Projects/mysite -name ab*.txt
about.txt
```

In the above example, if there were multiple `txt` files in the `mysite` directory that started with `ab`, then all would be returned. If no path is provided as an argument for the `find` command, it will search the current working directory.

### Search in Files

To search for content within files, it's possible to use regular expression with the `grep` (global regular expression print) command. This command takes a keyword and filename as arguments, and will return any lines within the file which match the criteria.

```bash
$ pwd
/home/Projects

$ grep cool ~/Projects/mysite/about.txt
My site is the coolest!
```

### Replace File Content

The `sed` (stream editor) command can be used to edit or replace existing content within a file.

```bash
$ sed 's/search-string/replacement' file.txt

$ pwd
/home/Projects

$ sed 's/cool/best' ~/Projects/mysite/about.txt
$ cat ~/Projects/mysite/about.txt
My site is the bestest!
```

## File Permissions

To change permissions of a particular file, the `chmod` command should be used. There are two ways to use this command: _letters method_ and _numbers method_.

The letter method uses operators (`+`, `-`, `=`) to add, remove and assign permissions in combination with the letters `a` (all), `o` (others), `u` (owner) and `g` (group).

```bash
$ chmod u=rwx file.txt
$ chmod o+w file.txt
$ chmod g-r file.txt
$ chmod a+x file.txt
```

In the above examples:

- `chmod u=rwx` gives the owner read, write and execute permission for the file
- `chmod o+w` adds write permission to the file for others
- `chmod g-r` removes read access to the file from the group that the file belongs to
- `chmod a+x` adds execute permission to everyone

When assigning permissions to everyone, it's not required to use `a`. Therefore, `chmod a+x` is equivalent to `chmod +x`.

The numbers method uses `4` (read), `2` (write) and `1` (execute) to assign permissions. These values are added together in sets of 3 to provide a 3 digit number for permissions.

```bash
$ chmod [owner][group][others]
$ chmod 761 file.txt
```

In the above example, `7` (4 + 2 + 1) represents read, write and execute permission for the owner. `6` (4 + 2) represents read and write access for the group. `1` provides execute access for everyone.

## Glossary

- `$` - shell prompt. Appears when the terminal is ready to receive a command.
- `~` - home directory. A path which represents the current user's home directory.
- `*` - wildcard. Selects all files in the working directory.
- `>` - redirect. Redirects the standard output to a file.
- `>>` - append. Appends the contents of the `stdout`. Commonly used with `cat`.
- `|` - Takes the `stdout` of the command on the left and pipes it as input to the command on the right. `cat file.txt | wc`
- `bash profile` - A file (typically stored at the `home` directory) which contains user settings for the terminal. A bash file can be reloaded in the current session after modifications using the `source ~/.bashfile` command.
- `cat` - concatenate. Outputs the contents of the file to the terminal. `cat file.txt`.
- `cd` - change directory. Switches current directory to target directory of statement. `cd <target directory>`. To move up one directory, type use `cd ..`. 
- `chmod` - change mode. This command can be used to alter file permissions.
- `cp` - copy. If used with files, this will copy the contents of one file to another. `cp original.txt new.txt`. It's also possible to copy a file from one directory to another using `cp original.txt /destination/`. This creates a copy of the `original.txt` in the `destination` directory.
- `echo` - This command prints information in the terminal window.
- `find` - Will search the directory for files with the name used as an argument. `find /path/ -name filename.txt`
- `grep` - global regular expression print. Searches files ro lines that match a pattern and returns results. Case sensitive.
	- `-i` - insensitive. Removes case sensitivity requirement.
	- `-R` - recursive. Searches all files in a directory and outputs filenames and lines containing the matching results.
	- `-l` - list. Will list only file names which contain a match for the regular expression
	- `-n` - line numbers. Will display line numbers for any matches found.
- `ls` - list. Lists the files and folders within current location.
	- `-a` - all. Lists all hidden files & folders in the current directory. `ls -a`
	- `-l` - long. Lists all the contents in long format. `ls -l`. This will return results with 7 columns:
		1. Access rights.
		2. Number of child directories and files (including parent directory and current directory -- also known as "hard links")
		3. Username of file owner.
		4. Name of group that owns file.
		5. Size of the file in bytes.
		6. Date & time file was last modified.
		7. Name of the file or directory.
	- `-t` - time. Lists contents by the time they were last modified.
- `mkdir` - make directory. Creates a new directory in the current location. `mkdir <directory name>`.
- `mv` - move. This command has similar functionality to the `cp` command. `mv original /destination/`. Using the command with two file name arguments will rename the file. `mv original.txt newfile.txt`. `original.txt` is renamed to `newfile.txt`.
- `pwd` - print working directory. Prints the name and path to the current directory.
- `rm` - remove. This command removes the specified file or folder from the current directory. `rm file.txt`
	- `-r` - recursive. Deletes a directory and all child directories.
- `sed` - stream editor. Accepts `stdin` and modifies based on an expression (i.e. find and replace). `sed 's/search-string/replacement' file.txt`
	- `s` - substitution. Always included when using `sed` to subsitite values
	- `g` - global. Replaces values globally instead of once per line.
- `sort` - Sorts the `stdinput` alphabetically. `sort file.txt`
- `stdin` - standard input. Information input into the terminal by a keyboard or other input device.
- `stderr` - standard error. An error message output due to a failed process.
- `stdout` - standard output. Information output in the terminal after the process has completed.
- `sudo` - super user do. Used to invoke admin commands.
- `touch` - touch creates a new file in the current directory. `touch name.ext`
- `uniq` - unique. Filters out _adjacent, duplicate_ lines in a file. `uniq file.txt`.
- `wc` - word count. Outputs the number of lines, words and characters (in that order) in a file. `wc file.txt`
