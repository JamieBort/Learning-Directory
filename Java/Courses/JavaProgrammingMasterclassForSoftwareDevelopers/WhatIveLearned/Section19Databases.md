# WhatIveLearned/Section19Databases.md

<!-- used this to populate the video titles https://docs.google.com/spreadsheets/d/1T5__se_ChZxoXZvkZaOl9QkjPdeYXxXMbDBR9tFP__k/edit#gid=656806513 -->

## Section 19 - Databases
Section19Databases
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