# Common Git Commands

Common Git commands that I use and need to reference.

## Listed By Use Case

### Cleaning up the list of branches (local and remote)

Of particular importance to me because I generated a lot with Dependabot pull requests.

I used

- `git branch --merged`,
- `git branch --merged| grep -Ev "(^\*|master|main|dev)"`, and
- `git branch --merged | grep -Ev "(^\*|master|main|dev)" | xargs git branch -d`

source:
[How do I delete all Git branches which have been merged?](https://stackoverflow.com/a/6127884) Stack Overflow response.

### commands related to the .gitignore file

### Renaming a file

command:
`git mv OLD-FILENAME NEW-FILENAME`

source:
[Renaming a file](https://docs.github.com/en/repositories/working-with-files/managing-files/renaming-a-file#renaming-a-file-using-the-command-line) (Renaming a file using the command line)

> You can rename any file in your repository directly in GitHub or by using the command line.

#### checking if a particular file or directory is effected by the .gitignore file

See the [Checking if the file is tracked in github](https://github.com/JamieBort/LearningDirectory/blob/master/Git/gitignore/README.md#checking-if-the-file-is-tracked-in-github) section of the gitignore README file.
**Note, section name may change.**

## Listed (alphabetically )By Using a Git <command>

### branch

#### Deleting branches

Locally

`git branch -d <branch>`

Remote ones

`git push remote_name -d remote_branch_name`

`git push origin -d remote_branch_name`

#### Rename branches

source: https://stackoverflow.com/a/6591218

To rename a branch while pointed to any branch:
`git branch -m <oldname> <newname>`

To push the local branch and reset the upstream branch:
`git push origin -u <newname>`

To delete the remote branch:
`git push origin --delete <oldname>`

#### view branches in a certain order

Here is a simple command that lists all branches with latest commits:

> `git branch -v`

To order by most recent commit, use

> `git branch -v --sort=committerdate`

Both from: https://github.com/JamieBort/Personal-Dashboard/issues/23#issuecomment-1955197420

Related, see https://github.com/JamieBort/LearningDirectory/blob/master/Git/common_git_commands.md#for-each-ref

### commit

#### Reference Issue number within a commit message

> [include #xxx in your commit message to reference an issue without closing it.](https://stackoverflow.com/a/6742691)

#### Closing Issues via Commit Messages

[How to Close Reference issues and pull request](https://github.com/gitbucket/gitbucket/wiki/How-to-Close-Reference-issues-and-pull-request) GitHub Documentation

Stack Overflow post:

> [KEYWORD #ISSUE](https://stackoverflow.com/a/60027286)

and:

> [close, closes, closed, fix, fixes, fixed, resolve, resolves, resolved](https://stackoverflow.com/a/60027286)

Referencing and closing issues across repos:

> [fixes user/repo#xxx](https://stackoverflow.com/a/6742691)

### diff

Git diff in specific file/directory while excluding files and directories
[Exclude a directory from git diff](https://stackoverflow.com/questions/4380945/exclude-a-directory-from-git-diff) StackOverflow

`git diff <one_branch>..<another_branch> -- path/to/directory/or/file`

`git diff <one_branch>..<another_branch> -- path/to/directory/or/file ':!<exclude_this_file_or_directory>' ':!<and_exclude_this_file_or_directory>'`

`git diff <one_branch>..<another_branch> -- ':!./backend/package.json' ':!./backend/package-lock.json' ':!./frontend/package.json' ':!./frontend/yarn.lock'`

### merge

merging in only one file/directory

`git checkout <other branch> <file_or_directory_from_that_other_branch>`

merging in everything but one file/directory

### for-each-ref

Here is a simple command that lists all branches with latest commits:

> `git for-each-ref --count=30 --sort=-committerdate refs/heads/ --format='%(refname:short)'`

Here is a simple command that lists all branches with latest commits:

From: https://github.com/JamieBort/Personal-Dashboard/issues/23#issuecomment-1955197420

Related, see https://github.com/JamieBort/LearningDirectory/blob/master/Git/common_git_commands.md#view-branches-in-a-certain-order

### rm

#### Remove a cached file or directory

##### Remove a cached file

`git rm --cached <path_to_file_name>`

##### Remove a cached directory

`git rm -r --cached <path_to_directory_name>`

example:

`git rm -r --cached node_modules/`
