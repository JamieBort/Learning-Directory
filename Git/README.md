# Git

The purpose of this Git directory is to house info on files and directories regarding Git in general.

~~To that end, info on .gitignore in general can be found in `this` Git directory.~~

~~Info regarding the .gitignore file in `this` LearningDirectory repo can be found in `this` gitignore directory:~~
~~https://github.com/JamieBort/LearningDirectory/tree/master/Meta/gitignore~~

To find info on the files and directories specific to this LearningDirectory repo, see https://github.com/JamieBort/LearningDirectory/tree/master/Meta

##

### node_modules/

### package-lock.json

> [[The] package-lock.json [file] is intended to be checked into source control.](https://stackoverflow.com/a/44210813)

## Directories and Files

### Directories

- GitImmersion/

  - A guided tour that walks through the fundamentals of Git.
  - See `Git Immersion` in `Resources` below.

- nodeModules/

  - These should not be uploaded to git repositories.

### Files

- common_git_commands.md

  - Common Git commands that I use and need to reference.

- README.md

  - This readme file.

## Associated Links

- Resources

  - Documentation

    - https://git-scm.com/

  - Maintenance

    - Retroactively removing files and directories. And adding their names to the `.gitignore` file.

      - Directories

        - `node_modules`

      - Files

        - `.DS_Store` file

          - [.gitignore all the .DS_Store files in every folder and subfolder](https://stackoverflow.com/questions/18393498/gitignore-all-the-ds-store-files-in-every-folder-and-subfolder/38797342?utm_source=pocket_reader) Stack Overflow post.

    - Upkeep for prospective employers.

  - Best Practices

    - Git Fetch Best Practices

      - [None yet.]

    - Git Branch Merging Best Practices

      - https://gist.github.com/calaway/ea880263b0c0495bb00ee877f001dc59

  - Commands

    - Compare two branches using git diff

      - https://devconnected.com/how-to-compare-two-git-branches/
        git diff branch1..branch2

    - Delete branches

      - https://trello.com/c/XZXUcEjo/757-read-up-on-deleting-old-github-branches
      - https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely

  - Git Immersion

    - A guided tour that walks through the fundamentals of Git, inspired by the premise that to know a thing is to do it.
    - See https://github.com/JamieBort/LearningDirectory/tree/master/Git/GitImmersion

- Associated Trello card

  - https://trello.com/c/ckIvNpLi/869-git-professional-development
