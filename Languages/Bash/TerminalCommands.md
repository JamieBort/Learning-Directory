# Terminal Commands

## find

`find . -path ./Documents -prune -o -name ".gitignore" -print`

From the current directory this command finds and prints the file path for all .gitignore files while excluding the ./Documents directory.

find <directory_path> -type f -name "<wildcard-match>"

find ./ -type d -name node_modules/
