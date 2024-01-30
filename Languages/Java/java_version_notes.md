# java_version_notes.md

The end goal is to understand my java environment on my machine.

And to have a clean install of only one java version.

By removing all the current versions and starting clean.

**Perform the clean install using Homebrew.**

## Commands

Commands to find out which versions I am using/have and where they are located.

`java -version`

`/usr/libexec/java_home -V`

`java_home /usr/libexec/java_home -V`

`/Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin/Contents/Home/bin/java -version`

`/usr/libexec/java_home --help`

`/usr/libexec/java_home`

Commands regarding environment variables.

`printenv` and `env` print the environment variables.

## To research

What I want to find out:

How to definitively 

* find all version of Java that I have on my computer.

* where they are located.

* how to remove them all

* how to cleanly install only one version.

* where environment variables are located for Java

* and how they're used.

* and what is Java_Home? Or java_home?

## The research.

For environment variables:

Good info here [(macOS/Linux) Environment Variables](https://www3.ntu.edu.sg/home/ehchua/programming/howto/Environment_Variables.html#zz-3.).

And in this [Environment variables in Mac OS X](https://stackoverflow.com/a/4567308/8210460) Stackoverflow post.

JAVA_HOME:

from: https://www.theserverside.com/definition/JAVA_HOME#:~:text=JAVA_HOME%20is%20an%20operating%20system,JDK%20or%20JRE%20was%20installed.
>JAVA_HOME is an operating system (OS) environment variable which can optionally be set after either the Java Development Kit (JDK) or the Java Runtime Environment (JRE) is installed. The JAVA_HOME environment variable points to the file system location where the JDK or JRE was installed. 

Lots of info here
[Understanding Java From Command Line on OSX](http://web.archive.org/web/20140813164713/http://blog.hgomez.net/blog/2012/07/20/understanding-java-from-command-line-on-osx/)

Removing and/or installing:

[macos removing multiple versions of Java](https://www.google.com/search?q=macos+removing+multiple+versions+of+Java&oq=macos+removing+multiple+versions+of+Java&aqs=chrome..69i57.9809j0j7&sourceid=chrome&ie=UTF-8) internet search.

[macos clean java install homebrew macos](https://www.google.com/search?q=macos+clean+java+install+homebrew+macos&sxsrf=AJOqlzX0doU1mKEg6veX0bi3nq8LNicITg%3A1674226965917&ei=Fa3KY43WN8uG0PEP0suK8Ak&oq=macos+clean+java+install+Homebrew+mac&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgUIIRCgATIFCCEQoAEyBQghEKsCOgoIABBHENYEELADOggIABAWEB4QCjoFCAAQhgM6CAghEBYQHhAdOgsIIRAWEB4Q8QQQHUoECEEYAEoECEYYAFDKDFjeRGDmWGgBcAF4AIABuAGIAb8OkgEEMC4xM5gBAKABAcgBCMABAQ&sclient=gws-wiz-serp) internet search.


[removing all versions of java macos](https://www.google.com/search?q=removing+all+versions+of+java+macos&sxsrf=AJOqlzUE28FRsKeZiFyYUvKOHD0HfhdeeA%3A1674226956701&ei=DK3KY_G9KtuE0PEPs6G0kAw&ved=0ahUKEwjx85u4tdb8AhVbAjQIHbMQDcIQ4dUDCBA&uact=5&oq=removing+all+versions+of+java+macos&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQFhAeMgUIABCGAzoKCAAQRxDWBBCwAzoFCCEQoAFKBAhBGABKBAhGGABQvwNY5AlgjAxoAXABeACAAZACiAH0B5IBBTAuNC4ymAEAoAEByAEIwAEB&sclient=gws-wiz-serp) internet search.