# Git

Git is a tool for source control.

## Purpose

The purpose of this Git directory is to house info on git files, git directories, git commands, and git features.

To find info on the files and directories specific to this LearningDirectory repo, see the `Meta/` [README](../Meta/README.md) file.

See this `List of standards for each repo` section in the Activity of this https://trello.com/c/NnqWRZIE/158-clean-up-github-repositories-and-gists Trello card:
https://trello.com/c/NnqWRZIE/158-clean-up-github-repositories-and-gists#comment-65e8a2ed79e6df717b84c23a

## Features

### [issues/](./issues/README.md#from-digital-knowledge-base)

### Labels

#### General info

- https://seantrane.com/posts/logical-colorful-github-labels-18230/#:~:text=Issue%2FPR%20labels%20should%20only,intuitive%20at%2Da%2Dglance.
- https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels#about-default-labels
- Not read yet:
  - https://seantrane.com/posts/logical-colorful-github-labels-18230/#:~:text=Issue%2FPR%20labels%20should%20only,intuitive%20at%2Da%2Dglance.

#### Best Practices

collapsed:: true

- ???

### Milestones

#### A major feature or improvement. Or the completion of a major feature or improvement.

#### General Info

- {{video(https://www.youtube.com/watch?v=tVLOafMAzFg)}}
- https://docs.github.com/es/issues/using-labels-and-milestones-to-track-work/about-milestones

#### Best Practices

### Projects

- Look into automation for when a card is added, removed, readded, etc to a column:
  - {{video(https://www.youtube.com/watch?v=ff5cBkPg-bQ)}}

#### About

- [Projects is an adaptable, flexible tool for planning and tracking work on GitHub.](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)

#### General info

- Not viewed yet:
  collapsed:: true
  - {{video(https://www.youtube.com/watch?v=yFQ-p6wMS_Y)}}
  - https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects
  - https://docs.github.com/en/issues/planning-and-tracking-with-projects
  - {{video(https://www.youtube.com/watch?v=lzpcyYIbHqE)}}
  - {{video(https://www.youtube.com/watch?v=bUE846fGFec)}}
  - {{video(https://www.youtube.com/watch?v=bUE846fGFec)}}

#### Best practices

- Not read yet:
  - https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/best-practices-for-projects

### Tasklists

#### General Info

- {{video(https://www.youtube.com/watch?v=BplF7vHXewA)}}

#### Best Practice

### Wikis

- They're for documentation that README files will not suffice. ( ???? )
- https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis

## ???

### git-hooks

What are git-hooks?

First used here: [Back link](https://github.com/JamieBort/Digital-Knowledge-Base/blob/main/pages/Logseq.md#backing-up-via-github)

## Directories and Files

### Directories

#### [code_of_conduct/](./code_of_conduct/)

All things related to behavior while contributing to Git (GitHub ?) repos.

#### [commit_message/](./commit_message/)

All things related to Git (GitHub ?) commit messages.

#### [config_files/](./config_files/)

#### [contributing/](./contributing/)

All things related to contributing to Git (GitHub ?) repos.

#### [env/](./env/)

This directory houses information about .env files and environment variables.

#### [gitignore/](./gitignore/)

All things related to .gitignore files.

#### [GitImmersion/](./GitImmersion/)

A guided tour that walks through the fundamentals of Git.

See `Git Immersion` in `Resources` below.

#### [issues/](./issues/)

GitHub repo Issues

#### [licensing/](./licensing/)

Info on Git repo licenses.

#### [prune/](./prune/)

#### [pull_request/](./pull_request/)

This directory houses information about Pull Requests.

#### [security/](./security/)

### Files

#### [common_git_commands.md](./common_git_commands.md)

Common Git commands that I use and need to reference.

#### [git_features.md](./git_features.md)

Git features such as Issues.

#### [README.md](./README.md)

This readme file.

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
