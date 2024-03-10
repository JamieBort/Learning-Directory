# Terminal Commands

## find

### find a file or directory

`find . -path ./Documents -prune -o -name ".gitignore" -print`

From the current directory this command finds and prints the file path for all .gitignore files while excluding the ./Documents directory.

`find <directory_path> -type f -name "`<wildcard-match>`"`

`find ./ -type d -name node_modules/`

`find ./ -type f -name .DS_Store`

### find a string in a file

From https://stackoverflow.com/a/45802423

`grep -R <stringToSearch> <dirName>`

From https://stackoverflow.com/a/16957078

`grep -Rnw '/path/to/somewhere/' -e 'pattern'`

## open up textEdit

[How do I start TextEditor from the command line?](https://apple.stackexchange.com/a/16598) Stack Overflow post.

> open -a TextEdit <./path_to_file_name>

## git commands

See the [README](../../Git/README.md) file in the `Git/` directory.
