# Terminal Commands

<!-- TODO: add a Table of Contents here. See the same here https://github.com/JamieBort/Learning-Directory/blob/master/Git/common_git_commands.md#table-of-contents -->

## find

### find a file or directory

`find . -path ./Documents -prune -o -name ".gitignore" -print`

From the current directory this command finds and prints the file path for all .gitignore files while excluding the ./Documents directory.

`find <directory_path> -type f -name "`<wildcard-match>`"`

`find ./ -type d -name node_modules/`

`find ./ -type f -name .DS_Store`

### find at least two files or directories

`find . -type f \( -name "package-lock.json" -o -name "package.json" \)`

### find a string in a file

command:
`grep -R <stringToSearch> <dirName>`

source:
From https://stackoverflow.com/a/45802423

command:
`grep -Rnw '/path/to/somewhere/' -e 'pattern'`

source:
From https://stackoverflow.com/a/16957078

## open up textEdit

command:
`open -a TextEdit <./path_to_file_name>`

source:
[How do I start TextEditor from the command line?](https://apple.stackexchange.com/a/16598) Stack Overflow post.

## git commands

See the [README.md](../../Git/README.md) file in the `Git/` directory.

## which
