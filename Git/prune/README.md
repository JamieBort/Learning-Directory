# prune

This is a command for...

Note, this https://trello.com/c/rAGHQHbL/832-read-up-on-pruning-in-git Trello card exists.

## Resources to explore

### Use cases

Read this [When does Git refresh the list of remote branches?](https://stackoverflow.com/a/36358502) Stack Overflow post.

I found it because I had this list of remote branches:

```
  jamiebort@MacBook-Pro:~/Documents/DevFiles/Personal_Projects/Personal-Dashboard$ git branch -a
  dev
  * dev_backup
  master
  remotes/heroku/master
  remotes/origin/JamieBort-patch-1
  remotes/origin/dependabot/npm_and_yarn/administrative/collected_resources/tempFiles/otherBranches/api_trello_attempt01/frontend/npm_and_yarn-security-group-a8b8d80d1d
  remotes/origin/dependabot/npm_and_yarn/administrative/collected_resources/tempFiles/otherBranches/api_trello_attempt01/frontend/npm_and_yarn-security-group-b217ccfe3d
  remotes/origin/dependabot/npm_and_yarn/administrative/collected_resources/tempFiles/otherBranches/api_trello_attempt01/frontend/npm_and_yarn-security-group-e3b7849656
  remotes/origin/dev
  remotes/origin/master
```

And I wanted to remove `remotes/origin/JamieBort-patch-1` from that list because it was deleted via my account at GitHub.com.
So I ran this command `git remote update origin --prune` per the posting:

```
  jamiebort@MacBook-Pro:~/Documents/DevFiles/Personal_Projects/Personal-Dashboard$ git remote update origin --prune
  Fetching origin
  From github.com:JamieBort/Personal-Dashboard
  - [deleted]         (none)     -> origin/JamieBort-patch-1
```

Then I wanted to verify that `JamieBort-patch-1` was deleted:

```
  jamiebort@MacBook-Pro:~/Documents/DevFiles/Personal_Projects/Personal-Dashboard$ git branch -a
  dev
  * dev_backup
  master
  remotes/heroku/master
  remotes/origin/dependabot/npm_and_yarn/administrative/collected_resources/tempFiles/otherBranches/api_trello_attempt01/frontend/npm_and_yarn-security-group-a8b8d80d1d
  remotes/origin/dependabot/npm_and_yarn/administrative/collected_resources/tempFiles/otherBranches/api_trello_attempt01/frontend/npm_and_yarn-security-group-b217ccfe3d
  remotes/origin/dependabot/npm_and_yarn/administrative/collected_resources/tempFiles/otherBranches/api_trello_attempt01/frontend/npm_and_yarn-security-group-e3b7849656
  remotes/origin/dev
  remotes/origin/master
```

## Directories and Files

### Directories

### Files

- README.md

  - This readme file.
