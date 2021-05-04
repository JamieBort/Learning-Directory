# Title

<!-- used this to populate the video titles https://docs.google.com/spreadsheets/d/1T5__se_ChZxoXZvkZaOl9QkjPdeYXxXMbDBR9tFP__k/edit#gid=656806513 -->

## Section 1
### 1
### 2
### 3
### 4
### 5
### 6

## Section 2
### 7
### 8
### 9
### 10
### 11
### 12
### 13
### 14
### 15
### 16
### 17

## Section 3
### 18
### 19
### 20
Keywords
* Access modifiers
  * public
* Class
### 21
Main method
Method declaration
Parameters

Keywords
* Access modifiers
  * staic
  * void
  
Process finished with exit code 0
Code block
Statement - It can include one or more expressions and we'll be talking about expressions and a related topic operators later in the course.
### 22
String literal
Challenge. Too simple to complete.
### 23
Variables
int
expressions - "what is after the equals sign". A construct that evaluates to a single value.
### 24
### 25
Data types

Eight primitive types
* boolean
* byte
* char
* short
* int
* long
* float
* double

Wrapper class
* int -> Integer

overflow

underflow
### 26

### 27
### 28
Challenge - not done yet. I'm getting a negative number.
### 29
### 30
### 31
### 32
### 33
### 34
### 35
### 36
### 37
### 38
### 39
### 40
### 41

## Section 4 - Java Tutorial: Expressions, Statements, Code blocks, Methods and more
### 49 - More on Methods and a Challenge
Challenge - started. 
Nothing I don't already know. 
### 50
Challenge - not started. 
Nothing I don't already know. 
### 51
### 52
### 53
### 54
### 55
Coding Exercise Example Part 1 - not started.
Nothing I don't already know.  
### 56
Coding Exercise Example Part 2 - not started. 
Nothing I don't already know. 
### 57
Coding Exercise Example Part 3 - not started. 
Nothing I don't already know. 
**This video shows how to share solution with instructor and other students.**
### Coding Exercise 1
Not Started.
### Coding Exercise 2
Not Started.
### Coding Exercise 3
Not Started.
### Coding Exercise 4
Not Started.
### Coding Exercise 5
Not Started.
### Coding Exercise 6
Not Started.
### Coding Exercise 7
Not Started.
### 58
### 59
### 60
Challenge not started yet.
### 61 Bonus Challenge Solution
### Coding Exercise 8
Not Started.
### Coding Exercise 9
Not Started.
### Coding Exercise 10
Not Started.
### Coding Exercise 11
Not Started.



## Section 5

## Section 6 - OOP Part 1 - Classes, Constructors and Inheritance

## Section 7- OOP Part 2 - Composition, Encapsulation, and Polymorphism

## Section 8- Arrays, Java inbuilt Lists, Autoboxing and Unboxing
### 99 Arrays
Introduces `new Scanner(System.in)` method.
### 100 Arrays (Challenge Exercise)
Not Started.
### Coding Exercise 41: Sorted Array
Not Started.
### 103
Not Started.
### Coding Exercise 42: 
Not Started.
### 104
Not Started.
### Coding Exercise 43: 
Not Started.
### 105
### 108
Not Started.
### 109
Not Started.
### 110
Not Started.
### 111
Not Started.
### Coding Exercise 44: 
Not Started.
### 116 Linked Lists Part 1
## Section 9 - Inner and Abstract Classes & Interfaces

## Section 10 - Java Generics

## Section 11 - Naming Conventions and Packages. static and final keywords

## Section 12 - Java Collections

## Section 13 - JavaFX

## Section 14 - Basic Input & Output including java.util

## Section 15 - Concurrency in Java

## Section 16 - Lambda Expressions

## Section 17- Regular Expressions

## Section 18 - Debugging and Unit Testing

## Section 19 - Databases
### 325 - Section Introduction
Overview of what to expect in this section.
### 326 - Database Terminology
Database - container
Sqlite stores the entire database in a single file.
Not true of most other database systems.
* Database dictionary
  * comprehensive list of the structure and types of data in teh database
  * Describes the tables and columns.
* Table
  * collection of related data in a database.
* Field
  * Basic unit of data in a datatable. 
  * Thought of similarly to a variable
  * Has a name and a type.
  * Field type called BLOBS (Binary Large OBject)
  * Columns in Database
* Record
  * Single set of data for all fields in that table.
  * A row of data across all of the fiels in that table.

* Flat file database
  * Stores all data in a single file.
  * SQLite is an example of this.
  * Can result in a lot of duplication of data.
* Database Normalization
* View
SQLite cannot update data in a view.

### 327
Installing SQLite on Windows - didn't watch this video.
### 328
Installing SQLite on Macs
SQLite command line shell is already installed on a Mac.
So nothing extra needed to do to start using it.
To start using it:
Open up Terminal.
At the command prompt type `sqlite3`:
```
jamiebort@My-MacBook-Pro-3:~$ sqlite3
SQLite version 3.13.0 2016-05-18 10:57:30
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite> 
```
This opens up the command line for SQLite.

`.quit` to quit out of the command line program.

### 329
Installing SQLite on Linux - didn't watch this video.
### 330 - Introduction to SQLite
Create database: `sqlite3 <database name>`
Help Man Pages: `.help`
`sqlite3 test.db` to open up the database in the command line interface.
`.databases` lists the databases
`.headers on` when in a database will display the headers when the `SELECT` command is executed.
`create table contacts(name text, phone integer, email text);` creates a table called `contacts` with `name`, `phone`, and `email` as headers.
`.tables ?TABLE?` didn't do anything for me
`.tables` Lists all the tables in the database. This was the output:
`contacts`
`INSERT INTO contacts( name, phone, email) values('Tim', 6545678, 'tim@email.com');` added those values to the `contacts` table.
`SELECT * FROM contacts;` displayed the entire contents of the `contacts` table.
`SELECT email FROM contacts;`  displayed the each email from the `contacts` table.
`INSERT INTO contacts values("Brian", 1234, "brian@email.com");` added those values to the `contacts` table.
`INSERT INTO contacts( name, phone) values('Steve', 87654);` added those values to the `name` and `phone` columns of the `contacts` table.

### 331 - More with SQLite
`.quit` closes the sqlite command line.
`sqlite3 test.db` opens the `test` database in the sqlite comman line.
`SELECT * FROM contacts;`
`INSERT INTO contacts values("Avril", "+61 (0) 87654321", "avril@email.com.au");`
`.backup testbackup` **Note:** dot/period first or semicolen last. Not both. SQL statements require a semicolon. SQLite commands require a dot/period.
`.backup testbackup.db` didn't need to run this.
`UPDATE contacts SET email="steve@hisemail.com";` intentionally ran a command that we did not want to run.
`SELECT * FROM contacts;` verified that we ran a command that we shouldn't have run.
`.restore testbackup` restored the database at this step.
`SELECT * FROM contacts;` verified that the database was restored correctly.
`UPDATE contacts SET email="steve@hisemail.com" WHERE name = "Steve";` 
`DELETE FROM contacts WHERE phone = 1234;`
`SELECT * FROM contacts;` verified that the row(s) that have `1234` as an `email` was deleted correctly.
`.schema` lists the command used to create the tables in that database. This was the output:
`CREATE TABLE contacts(name text, phone integer, email text);`
`.schema <table name>` lists the command used to create that table. 
`.dump` Will talk about more later. Output:
```
PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE contacts(name text, phone integer, email text);
INSERT INTO "contacts" VALUES('Tim',6545678,'tim@email.com');
INSERT INTO "contacts" VALUES('Steve',87654,'steve@hisemail.com');
INSERT INTO "contacts" VALUES('Avril','+61 (0) 87654321','avril@email.com.au');
COMMIT;
```
`.exit`

### 332 - Querying Data with SQL

### 333 - SQL Order by and Joins

### 334 - More complex Joins

## Section 20 - Java Networking Programming

## Section 21 - Java 9 Module System

## Section 22 - Migrating Java Projects to Java 9

## Section 23 - Course Remaster in Progress

## Section 24 - Archived Videos
### 397
### 398

## Section 25 - Extra Information - Source code, and other stuff
### 399
### 400