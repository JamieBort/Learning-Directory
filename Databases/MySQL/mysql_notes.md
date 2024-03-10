# mysql_notes.md

## Commands

### mysqle commands

To start mysql

> mysql -u root

Creating a database

> CREATE DATABASE IF NOT EXISTS movies;

Creating a table

> CREATE TABLE [IF NOT EXISTS] `TableName` (`fieldname` dataType [optional parameters]) ENGINE = storage Engine;

To stop mysql

> mysql> QUIT

or

> mysql> exit

Output the users and the hosts (I think)

> SELECT User, Host FROM mysql.user;

I am not sure.

> SHOW PROCESSLIST;

### bash commands

> which mysql

> locate mysql

(which mysql produces `/usr/local/bin/mysql`)

> /usr/local/bin/mysql --version

## Installation of mysql

I followed [How to Install MySQL 8 on macOS Using Homebrew](https://hackernoon.com/how-to-install-mysql-8-on-macos-using-homebrew) tutorial.

But not completely.

I ran only these commands:

> brew install mysql

When I ran any `mysql` command, including

> mysql -u root

I received this [ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock'](https://stackoverflow.com/questions/15450091/error-2002-hy000-cant-connect-to-local-mysql-server-through-socket-tmp-mys) error.

This [response](https://stackoverflow.com/a/38805194/8210460) addressed it. It said to run `brew services start mysql`.

Now when I run `mysql -u root` the `mysql>` prompt displays.

~~Notice, I did NOT run ~~

> ~~mysql -u root -p~~

~~nor any other commands.~~

Received

Other comments:

- Resources

  **Good information here.**

  - [Getting Started with MySQL](https://dev.mysql.com/doc/mysql-getting-started/en/)

  - [MySQL 8.0 Reference Manual](https://dev.mysql.com/doc/refman/8.0/en/)

    - [Chapter 3 Tutorial](https://dev.mysql.com/doc/refman/8.0/en/tutorial.html)
      3.1 Connecting to and Disconnecting from the Server
      3.2 Entering Queries
      3.3 Creating and Using a Database
      3.4 Getting Information About Databases and Tables
      3.5 Using mysql in Batch Mode
      3.6 Examples of Common Queries
      3.7 Using MySQL with Apache

- A good tutorial but I didn't follow it closely. I used it only to make sure what I was doing was correct and up to date.
  [How to Install MySQL 8 on macOS Using Homebrew](https://hackernoon.com/how-to-install-mysql-8-on-macos-using-homebrew)

- Another tutorial but I didn't follow it closely. I used it only to make sure what I was doing was correct and up to date.
  [How to install MySQL on macOS](https://flaviocopes.com/mysql-how-to-install/)

- Another tutorial I found. But I didn't follow it at all.
  [How to Install MySQL on Linux?](https://www.geeksforgeeks.org/how-to-install-mysql-on-linux/)

- This too.
  [Using HomeBrew to install MySQL](https://stackoverflow.com/questions/60864461/using-homebrew-to-install-mysql)

- While using Homebrew to install mysql I ran into this error:

  > Error: Your Command Line Tools are too outdated.

      So I followed [https://coady.tech/macos-command-line-tools-outdated/](https://coady.tech/macos-command-line-tools-outdated/) this tutorial to address it.

- [MySQL Documentation](https://dev.mysql.com/doc/)
