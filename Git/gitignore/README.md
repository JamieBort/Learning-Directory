# gitignore

## Purpose

This directory houses information about .gitignore files in general.

Therefore, info regarding the .gitignore file in `this` LearningDirectory repo can be found in this [meta/gitignore/](../../Meta/README.md#metagitignore) directory.

## About

[Some information about this directory.]

## General info

[5 Types of File to Include in Your .gitignore](https://www.makeuseof.com/gitignore-file-types-to-include/)

1. ~~Configuration Files~~

   I disagree with this one. However, environment variable files should ALWAYS be included when credentials are used. Therefore, always include `.env`.

2. Build Artifacts (for example build/ directories.)
3. Integrated Development Environment Files (IDE Files) (for example .vscode/ directories.)
4. Dependency and Package Files (for example node_modules/ directories.)
5. Operating System Files (for example .DS_Store files.)

Note, there's an alternative to .gitignore:
[Exclude files from git without committing changes to .gitignore](https://medium.com/@dave_lunny/exclude-files-from-git-without-committing-changes-to-gitignore-986fa712e78d).

## Directories and Files to omit from a repo

These files and directories

- should not be tracked by git,
- should not checked into git,
- should be remove from git cache, <!-- TODO: link to command or documentation for removing file/directory from git cache. -->
- and should not be deployed to a [live hosting site](../../Meta/README.md#hosting).

Therefore they **should** be listed in the .gitignore file.

| Technology | List of files and directories                   |
| :--------: | ----------------------------------------------- |
|     -      | .env                                            |
| JavaScript | <ul><li>node_modules/</li><li>another</li></ul> |
|    Java    | <ul><li></li><li></li></ul>                     |
|            |                                                 |

## Directories and Files that should NOT be listed in the .gitignore file.

| Technology | List of files and directories                            |
| :--------: | -------------------------------------------------------- |
| JavaScript | <ul><li>package.json</li><li>package-lock.json</li></ul> |
|    Java    | <ul><li></li><li></li></ul>                              |
|            |                                                          |
|            |                                                          |

## Best practices files to keep out of repos

[See `Best practices files to keep out of repos` of https://trello.com/c/GYruL063/167-familiarize-about-sensitive-files-to-keep-off-of-github-and-personal-dashboard#comment-65e76856763cfe0b98137098]

## Checking if the file is tracked in github

Description from this [git-check-ignore - Debug gitignore / exclude files](https://git-scm.com/docs/git-check-ignore) documentation:

> [C]heck whether the file is excluded by .gitignore ... and output the path if it is excluded.

> By default, tracked files are not shown at all since they are not subject to exclude rules; but see ‘--no-index’.

Good info here:
https://stackoverflow.com/a/3306090

`git check-ignore -v -- <file_path>` Note: `--` may not be needed.

## Pattern Format

Documentation for Pattern Format:
https://git-scm.com/docs/gitignore#_pattern_format

From https://stackoverflow.com/a/3307252:

> Please remember that patterns in .gitignore file apply recursively to the (sub)directory the file is in and all its subdirectories, unless pattern contains '/' (so e.g. pattern name applies to any file named name in given directory and all its subdirectories, while /name applies to file with this name only in given directory). (From https://stackoverflow.com/a/3307252)

## Resources

[Some resources relevant to this directory.]

### Resources to explore

These will be deleted when I am done with them. If they are of use they'll be moved to [Vetted Resources](#vetted-resources) below. Or a relevant file/directory in this directory.

- See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

- The following Trello cards may have info on creating a template gitignore file.

  - https://trello.com/c/LEttKYh8/1369-populate-the-global-gitignore-file

  - https://trello.com/c/J8iwuPFV/227-read-up-on-gitignore

  - https://trello.com/c/GYruL063/167-sensitive-files-to-keep-off-of-github

  - https://trello.com/c/NnqWRZIE/158-clean-up-github-repositories

  - https://trello.com/c/XZUZHxW9/265-address-these-files-in-the-github-repos

  - https://trello.com/search?q=gitignore

- FYI, this https://github.com/JamieBort/LearningDirectory/tree/master/Meta/gitignore exists.

- the global .gitignore file.

  - mine is located here: `~/.config/git/ignore` ~~`./Users/jamiebort/.gitignore`~~

    See https://trello.com/c/LEttKYh8/1369-populate-the-global-gitignore-file#comment-654e97bfc00b7e5cbe01ab5f ~~https://trello.com/c/J8iwuPFV/227-read-up-on-gitignore#comment-654e8ab9b6a82eb7f05cec62~~

  - See

    - First https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files#configuring-ignored-files-for-all-repositories-on-your-computer

    - [Global gitignore](https://gist.github.com/subfuzion/db7f57fff2fb6998a16c) GitHub gist

    - [Global Git ignore](https://stackoverflow.com/questions/7335420/global-git-ignore) Stack Overflow post

    - [https://sebastiandedeyne.com/setting-up-a-global-gitignore-file](Setting up a global .gitignore file)

    - [global gitignore](https://www.google.com/search?aqs=chrome..69i57.3253j0j7&ie=UTF-8&oq=global%20gitignore&q=global%20gitignore&sourceid=chrome&utm_source=pocket_saves) internet search

- .gitignore Templates

  - [A collection of .gitignore templates](https://github.com/github/gitignore) GitHub repo.

    Quite comprehensive.

    **A LOT** of good information.

    Also links to documentation.

  - https://www.gitignore.io/ (The [Source](https://stackoverflow.com/a/60221045/8210460))

- My [Gitignore](https://docs.google.com/document/d/1jjaClZ6chwkRsA4jQJf6zIMMsiOrYBqi6bvuSSJ3NaU/edit#heading=h.5tr8sqn1eyz0) Google Drive doc.

### Vetted Resources

## Directories and Files

Information regarding the directories and files in this directory.

Navigate back to the [parent readme file.](../README.md)

### Directories

### Files

#### [README.md](./README.md)

This readme file.

#### [template_gitignore.md](./template_gitignore.md)

A template for the .gitignore file.
