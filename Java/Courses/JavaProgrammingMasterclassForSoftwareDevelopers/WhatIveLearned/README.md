# WhatIveLearned

<add brief description of this file.>

<!-- used this to populate the video titles https://docs.google.com/spreadsheets/d/1T5__se_ChZxoXZvkZaOl9QkjPdeYXxXMbDBR9tFP__k/edit#gid=656806513 -->

## [Section 1 - Course Introduction](https://github.com/JamieBort/LearningDirectory/blob/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/WhatIveLearned/Section01CourseIntroduction.md)
### 2 - Remaster in Progress
### 3 - Video Quality
### 4 - Subtitles
### 5 - How to get help
### 6 - Important Tip - Source Code
## [Section 2 - Software Tools Setup](https://github.com/JamieBort/LearningDirectory/blob/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/WhatIveLearned/Section02SoftwareToolsSetup.md)
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
### 18
## [Section 3 - First Steps](https://github.com/JamieBort/LearningDirectory/blob/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/WhatIveLearned/Section03FirstSteps.md)
### 19
### 20
### 21
### 22
### 23
### 24
### 25
### 26
### 27
### 28
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
### 42
## [Section 4 - Java Tutorial: Expressions, Statements, Code blocks, Methods and more](https://github.com/JamieBort/LearningDirectory/blob/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/WhatIveLearned/Section04JavaTutorialExpressionsStatementsCodeBlocksMethodsAndMore.md)
### 49 - More on Methods and a Challenge
### 50
### 51
### 52
### 53
### 54
### 55
### 56
### 57
### Coding Exercise 1
### Coding Exercise 2
### Coding Exercise 3
### Coding Exercise 4
### Coding Exercise 5
### Coding Exercise 6
### Coding Exercise 7
### 58
### 59
### 60
### 61 Bonus Challenge Solution
### Coding Exercise 8
### Coding Exercise 9
### Coding Exercise 10
### Coding Exercise 11
## [Section 5 - Control Flow Statements](https://github.com/JamieBort/LearningDirectory/blob/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/WhatIveLearned/Section05ControlFlowStatements.md)
## [Section 6 - OOP Part 1 - Classes, Constructors and Inheritance](https://github.com/JamieBort/LearningDirectory/blob/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/WhatIveLearned/Section06OOPPart1ClassesConstructorsAndInheritance.md)
### 76 - Introduction
### 77 - Classes Part 1
### 78 - Classes Part 2
### Coding Exercise 29: Sum Calculator
### Coding Exercise 30: Person
### 79 - Constructors - Part 1 (+Challenge Exercise)
### 80 - Constructors - Part 2 (+Challenge Exercise)
### Coding Exercise 31: 
### Coding Exercise 32: 
### Coding Exercise 33: 
### Coding Exercise 34: 
### 81 - Inheritance Part 1
### 82 - Inheritance Part 2
### 83 - Reference vs Object vs Instance vs Class
### 84 - this vs super
### 85 - Method Overloading vs Overriding Recap
### 86 - Static vs Instance Methods
### 87 - Static vs Instance Variables
### 88
### 89
### Coding Exercise 35:
### Coding Exercise 36:  ~~
## [Section 7- OOP Part 2 - Composition, Encapsulation, and Polymorphism](https://github.com/JamieBort/LearningDirectory/blob/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/WhatIveLearned/Section07OOPPart2CompositionEncapsulationAndPolymorphism.md)
## [Section 8 - Arrays, Java inbuilt Lists, Autoboxing and Unboxing](https://github.com/JamieBort/LearningDirectory/blob/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/WhatIveLearned/Section08ArraysJavaInbuiltListsAutoboxingAndUnboxing.md)
### 99 Arrays
### 100 Arrays (Challenge Exercise)
### Coding Exercise 41: Sorted Array
### 103
### Coding Exercise 42: 
### 104
### Coding Exercise 43: 
### 105
### 108
### 109
### 110
### 111
### Coding Exercise 44: 
### 116 Linked Lists Part 1
## Section 9 - Inner and Abstract Classes & Interfaces

## Section 10 - Java Generics

## Section 11 - Naming Conventions and Packages. static and final keywords

## Section 12 - Java Collections

## Section 13 - JavaFX

## Section 14 - Basic Input & Output including java.util

## Section 15 - Concurrency in Java

## Section 16 - Lambda Expressions

## Section 17 - Regular Expressions
### 306 - Regular Expressions Introduction


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

### 332 - 332. Querying Data With SQL
See [this README](https://github.com/JamieBort/LearningDirectory/tree/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/332QueryingDataWithSQL) file for what I have done for this video.

Other things of note:
`ID column` and `_id` mentioned here.

### 333 - SQL Order by and Joins
**Revisit this video at 3:45 to complete the challenges - there are at least 2.**

Also, **I didn't take notes nor watch after 3:45.** 

Copied the contents of [this directory](https://github.com/JamieBort/LearningDirectory/tree/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/332QueryingDataWithSQL) into [new new directory](https://github.com/JamieBort/LearningDirectory/tree/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/333SQLOrderByAndJoins).

`SELECT * FROM albums ORDER BY name;` displays alphabetically.
`SELECT * FROM albums ORDER BY name COLLATE NOCASE;` displays alphabetically & ignorse case.
`SELECT * FROM albums ORDER BY name COLLATE NOCASE DESC;` displays alphabetically & ignorse case & reverse order.
`SELECT * FROM albums ORDER BY artist, name COLLATE NOCASE;`

### 334 - More complex Joins

### 335 - Wildcards Queries and Views

### 337 - JDBC and SQLite GUI Browser
Java Database Connectivity
We need a SQLite JDBC driver in order to access a SQLite database.
The driver is a Java Library containing classes that implement the JDBC API.

Already installed the driver when I followed this course 1+ year(s) ago. Also found [here](https://github.com/JamieBort/LearningDirectory/tree/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/SuppliedFiles/Section19Databases/338CreatingDatabasesWithJDBCInJava).

### 338 - Creating Databases with JDBC in Java
338CreatingDatabasesWithJDBCInJava

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