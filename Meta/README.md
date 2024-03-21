# Meta

TODO: See the [java_version_notes.md](../Languages/Java/README.md#java_version_notesmd) file regarding Java files on my computer. On second thought, maybe that info isn't relevant here...

## Purpose

This directory houses info regarding this repo. Specifically, information **about** the files and directories that this repo contains.

And **not** about Git repos in general. To find info regarding files and directories about Git in general, see the `Git/` [README](../Git/README.md) file.

## About

<!-- [Some information about this directory.] -->

## Naming Conventions in this Repo

### Currently

Pascalcase

### Future

Maybe Snakecase

## Learning Directory Git Workflow

Git workflow for this Learning Directory repo.

For information on Git workflow in general, see the [git_workflow/](../Git/git_workflow/) directory in the Git/ directory.

1. git checkout dev

   `git checkout dev && git status`

2. Push changes from the dev branch to the origin/dev branch.

   `git push && git status`

3. Make copy of dev branch (dev_backup).

   `git branch`

   `git branch -d dev_backup && git branch -c dev dev_backup && git branch`

4. git checkout master

   `git checkout master && git status`

5. Make copy of master branch (master_backup).

   `git branch -d master_backup && git branch -c master master_backup && git branch`

6. Pull changes from origin/master to master branch.

   `git pull origin master && git status`

7. Make copy of master branch after pull (master_backup_after_pull).

   `git branch -d master_backup_after_pull && git branch -c master master_backup_after_pull && git branch`

8. git checkout dev

   `git checkout dev && git status`

<!-- TODO: Figure out which is better for this repo at this step. Rebase or merge. See https://github.com/JamieBort/Learning-Directory/issues/252 -->

9. [Merge master into dev.](https://gist.github.com/calaway/ea880263b0c0495bb00ee877f001dc59)

   `git merge master && git status`

   [or rebase master into dev](https://gwu-libraries.github.io/Git.html)

   `git rebase master && git status`

10. Resolve merge conflicts.

11. Push changes from the dev branch to the origin/dev branch.

    `git push && git status`

12. git checkout master

    `git checkout master && git status`

13. Merge dev into master.

    `git merge dev && git status`

14. Checkout the dev branch

    `git checkout dev && git status`

15. Delete all copies of dev and master branches.

## Resources

### Resources to explore

These will be deleted when I am done with them. If they are of use they'll be moved to the [Vetted Resources](#vetted-resources) section below. Or a relevant file/directory in this directory.

### Vetted Resources

Note, Items found in this resources section contain content that do not fit in just one of the directories in this repo.

- https://runestone.academy/ns/books/index

  found from https://blog.runestone.academy/

## Directories and Files

Information regarding the directories and files in this directory.

<!-- Navigate back to the [parent_readme_file/ README.md](../README.md) -->

The [Learning Directory README.md](../README.md) file.

<!-- The [Meta/ README.md](../Meta/README.md) file. -->

### Directories

### [./.github/](../.github)

This is where the Pull Request template lives. See [Pull Request Templates](https://github.com/JamieBort/LearningDirectory/tree/master/Git/pull_request_templates).

<!-- This is also where the Dependabot yaml file is. Right now it is used just for `Dependabot version updates`. See [Dependabot](../Git/security/README.md#dependabot). -->

#### [.github/](../.github/)

#### [API/](../API/)

#### [CLI/](../CLI/)

Command Line Interfaces

#### [Accessibility/](../Accessibility/)

#### [Algorithms Data Structures And Big O Notation/](../AlgorithmsDataStructuresAndBigONotation/)

#### [Data Science/](../DataScience/)

#### [Data Visualization/](../DataVisualization/)

#### [Database/](../Databases/)

#### [Git/](../Git/)

Info on the .gitignore file in general.

#### [Hosting/](../Hosting/)

List of live hosting sites.

#### [IDEs/](../IDEs/)

Integrated Development Environments.

#### [Languages/](../Languages/)

This directory houses information about software languages.

#### Meta

This directory.

#### [Meta/env/](./env/)

This directory houses information about the env file(s) in this repo.

#### [Meta/gitignore/](./gitignore/)

This directory houses information about the .gitignore file in this repo.

To house info on the meta topic of .gitignore files.

That said, info on .gitignore may be better suited here maybe?: https://github.com/JamieBort/LearningDirectory/tree/master/Git#associated-links

#### [Meta/readme/](./readme/)

To house info on the meta topic of README files.

#### [Meta/templates/](./templates/)

To house template files for this repo.

#### [Meta/vscode/](./vscode/)

#### [Principles Paradigms Patterns Designs](../PrinciplesParadigmsPatternsDesigns/)

#### [Regular Expressions](../RegularExpressions/)

#### [Resources](../Resources/)

This directory houses information about all the topics found in the Learning Directory repo.

However the ones found here are here because they encompasses information about more than one topic. Rather than reference this info at least twice, once in each directory, it is placed here.

#### [Security](../Security/)

#### [Servers](../Servers/)

#### [Testing](../Testing/)

Repository for my exploration of code testing.

### Files

#### [/Meta/README.md](./README.md)

This readme file.

#### [.gitignore](../.gitignore)

The file listing files and directories that are to be excluded from this repo.

#### [CONTRIBUTING.md](../CONTRIBUTING.md)

The contribution guide for this repo.

#### [Contributor_Covenant_Code_of_Conduct.md](../Contributor_Covenant_Code_of_Conduct.md)

The code of conduct for this repo.

#### [LICENSE.txt](../LICENSE.txt)

The license for this repo.

The text can be found [here](../LICENSE.txt).

#### [README.md](../README.md)

The readme file for this repo.
