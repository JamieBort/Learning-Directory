# Terminal Commands

## find

`find . -path ./Documents -prune -o -name ".gitignore" -print`

From the current directory this command finds and prints the file path for all .gitignore files while excluding the ./Documents directory.

find <directory_path> -type f -name "`<wildcard-match>`"

find ./ -type d -name node_modules/

## open up textEdit

[How do I start TextEditor from the command line?](https://apple.stackexchange.com/a/16598) Stack Overflow post.

> open -a TextEdit <./path_to_file_name>

## git commands

See the `Git/` [README](../../Git/README.md) file.
