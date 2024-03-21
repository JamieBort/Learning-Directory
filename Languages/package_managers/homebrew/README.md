# Homebrew

## Purpose

<!-- The purpose of this directory is to [...]. -->

## About

This directory houses information about Homebrew.

> [What Does Homebrew Do?](https://brew.sh/)

> [Homebrew installs the stuff you need that Apple (or your Linux system) didn’t.](https://brew.sh/)

<!-- [Some information about this directory.] -->

## Brew commands

TODO: Follow convention found ~~here [../../Bash/TerminalCommands.md](../../Bash/TerminalCommands.md) or~~ in the [Table of Contents](../../../Git/common_git_commands.md#table-of-contents) of the `common_git_commands.md` file.

### (brew) --cellar

Source: https://apple.stackexchange.com/a/145471

> `brew --cellar` prints the directory which is the default location on macOS. You'll see sub-directories in there for all your installed formulae.

### (brew) info

[installation path of a package](https://apple.stackexchange.com/questions/145437/where-can-i-find-the-installed-package-path-via-brew)

> brew info <package_name>

```
jamiebort@MacBook-Pro:~/Documents$ brew info hping
==> hping: stable 3.20051105 (bottled)
Command-line oriented TCP/IP packet assembler/analyzer
http://www.hping.org/
Deprecated because it is not maintained upstream!
Not installed
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/h/hping.rb
==> Analytics
install: 15 (30 days), 450 (90 days), 2,578 (365 days)
install-on-request: 15 (30 days), 450 (90 days), 2,578 (365 days)
build-error: 0 (30 days)
jamiebort@MacBook-Pro:~/Documents$
```

### (brew) help

```
brew help
Example usage:
  brew search TEXT|/REGEX/
  brew info [FORMULA|CASK...]
  brew install FORMULA|CASK...
  brew update
  brew upgrade [FORMULA|CASK...]
  brew uninstall FORMULA|CASK...
  brew list [FORMULA|CASK...]

Troubleshooting:
  brew config
  brew doctor
  brew install --verbose --debug FORMULA|CASK

Contributing:
  brew create URL [--no-fetch]
  brew edit [FORMULA|CASK...]

Further help:
  brew commands
  brew help [COMMAND]
  man brew
  https://docs.brew.sh
```

### (brew) list

Source: https://apple.stackexchange.com/a/101092

> brew list and brew list --cask
> Running `brew list` will show a list of all your installed Homebrew packages.

> In addition, `brew list --cask` will provide the items installed using Homebrew Cask.

### (brew) tap

## brew concepts

### versions

### homebrew files

source: https://mac.install.guide/homebrew/3

> [If Homebrew is successfully installed, there will be Homebrew files in `/usr/local/bin` (for macOS Intel) or `/opt/homebrew` (for Apple Silicon).](<https://mac.install.guide/homebrew/3#:~:text=If%20Homebrew%20is%20successfully%20installed,homebrew%20(for%20Apple%20Silicon).>)

Location of my homebrew files:

~~**Note**, my Homebrew files are **not** located in `usr/local/bin` but rather in `usr/local/Homebrew`.~~

Never mind. They're in `usr/local/bin` and I think they get pointed to `usr/local/Homebrew`.

```
jamiebort@MacBook-Pro:/$ ls -al usr/local/bin/brew
lrwxr-xr-x  1 jamiebort  admin    28B Nov 15  2016 usr/local/bin/brew@ -> /usr/local/Homebrew/bin/brew
```

### is it installed?

One option is to use the `Bash` [which](../../Bash/TerminalCommands.md#which) command.

### packages

See [(brew) info](#brew-info) above.

### binaries

[Linking binaries](https://apple.stackexchange.com/a/226936)

## Resources

Resources relevant to this directory.

### Resources to explore

These will be deleted when I am done with them. If they are of use they'll be moved to the [Vetted Resources](#vetted-resources) section below. Or a relevant file/directory in this directory.

- [What is a cask, Cellar and a tap?](https://stackoverflow.com/questions/46403937/what-is-the-difference-between-brew-install-x-and-brew-cask-install-x) Stack Overflow article.

- [What is the difference between `brew` and `brew cask`?](https://apple.stackexchange.com/questions/125468/what-is-the-difference-between-brew-and-brew-cask) Stack Exchange article.

- https://docs.brew.sh/FAQ

  - Glossary of terms

    - https://docs.brew.sh/Formula-Cookbook#homebrew-terminology

  - Updating local packages

- [HomeBrew Maintenance](https://gist.github.com/kdabir/6201840) Gist:

  ```
  HomeBrew Maintenance
  ====================
  - To list all the software/lib installed by brew `$ brew list`
  - to update an app `$ brew upgrade appname`
  - to see issues `$ brew doctor`
  - to update brew  `$ brew update`
  - list outdated software/lib `$ brew outdated`
  - update all the outdated software/lib `$ brew upgrade`
  - to cleanup `$ brew cleanup`
  ```

- [Housekeeping for Homebrew](https://mac.install.guide/homebrew/8)

### What is

#### What is a brew formula?

See `Glossary of terms` above.

#### What is brew cask?

See `Glossary of terms` above.

### Vetted Resources

### Documentation

#### Official Documentation

- https://docs.brew.sh/

#### Unofficial Documentation

## Directories and Files

Information regarding the directories and files in this directory.

Navigate back to the `package_managers/` [README.md](../README.md) file.

### Directories

<!-- #### [directory_name/](./path_to_directory)

[About_this_directory.]

[More_info_about_this_directory.]

The `directory_name/` [README.md](./directory_name/README.md) file. -->

### Files

<!-- #### [name_of_other_file_in_here.extension]()

[About_this_file.]

[More_info_about_this_file.] -->

#### [README.md](./README.md)

This readme file.
