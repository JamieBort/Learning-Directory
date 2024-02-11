# gitignore

The purpose of this Git directory is to house info on the .gitignore file in general.

~~To that end, info on .gitignore in general can be found in `this` Git directory.~~

Info regarding the .gitignore file in `this` LearningDirectory repo can be found in `this` gitignore directory:
https://github.com/JamieBort/LearningDirectory/tree/master/Meta/gitignore

To find info specific to the .gitignore file in this LearningDirectory repo, see https://github.com/JamieBort/LearningDirectory/tree/master/Meta/gitignore

---

From https://stackoverflow.com/a/3307252

> Please remember that patterns in .gitignore file apply recursively to the (sub)directory the file is in and all its subdirectories, unless pattern contains '/' (so e.g. pattern name applies to any file named name in given directory and all its subdirectories, while /name applies to file with this name only in given directory).

---

The [.gitignore](https://github.com/JamieBort/LearningDirectory/blob/master/.gitignore) file. This lists all the file types that I do not want this repo to track.
Currently that list consists of:

```
*.DS_Store
*.env
and
*node_modules/
```

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

## Directories and Files

### Directories

### Files

- README.md

  - This readme file.

- template_gitignore

  - A template for the .gitignore file.

## Associated Links

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
