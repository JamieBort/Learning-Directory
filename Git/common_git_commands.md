# Common Git Commands

Common Git commands that I use and need to reference.

## branch

### Deleting branches

Locally

`git branch -d <branch>`

Remote ones

`git push remote_name -d remote_branch_name`

`git push origin -d remote_branch_name`

### Rename branches

source: https://stackoverflow.com/a/6591218

To rename a branch while pointed to any branch:
`git branch -m <oldname> <newname>`

To push the local branch and reset the upstream branch:
`git push origin -u <newname>`

To delete the remote branch:
`git push origin --delete <oldname>`

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

## commands related to the .gitignore file

### checking if a particular file or directory is effected by the .gitignore file

See the [Checking if the file is tracked in github](https://github.com/JamieBort/LearningDirectory/blob/master/Git/gitignore/README.md#checking-if-the-file-is-tracked-in-github) section of the gitignore README file.
**Note, section name may change.**
