# Common Git Commands

Common Git commands that I use and need to reference.

## diff

Git diff in specific file/directory while excluding files and directories
[Exclude a directory from git diff](https://stackoverflow.com/questions/4380945/exclude-a-directory-from-git-diff) StackOverflow

`git diff <one_branch>..<another_branch> -- path/to/directory/or/file`

`git diff <one_branch>..<another_branch> -- path/to/directory/or/file ':!<exclude_this_file_or_directory>' ':!<and_exclude_this_file_or_directory>'`

## merge

merging in only one file/directory

merging in everything but one file/directory
