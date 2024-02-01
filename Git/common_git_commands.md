# Common Git Commands

Common Git commands that I use and need to reference.

## diff

Git diff in specific file/directory while excluding files and directories
[Exclude a directory from git diff](https://stackoverflow.com/questions/4380945/exclude-a-directory-from-git-diff) StackOverflow

`git diff <one_branch>..<another_branch> -- path/to/directory/or/file`

`git diff <one_branch>..<another_branch> -- path/to/directory/or/file ':!<exclude_this_file_or_directory>' ':!<and_exclude_this_file_or_directory>'`

`git diff <one_branch>..<another_branch> -- ':!./backend/package.json' ':!./backend/package-lock.json' ':!./frontend/package.json' ':!./frontend/yarn.lock'`

## merge

merging in only one file/directory

`git checkout <other branch> <file_or_directory_from_that_other_branch>`

merging in everything but one file/directory

## rm

### Remove the node_module/ directory.

`git rm -r --cached`
git rm -r --cached node_modules/
