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
  * comprehensive list of the structure and types of data in the database
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
SQLite cannot update data in a `VIEW`.

### 327 - Install and Setup SQLite for Windows
Installing SQLite on Windows - didn't watch this video.

### 328 - Install and Setup SQLite for Mac
SQLite command line shell is already installed on a Mac. 
So nothing extra needed to do to start using it.
To start using it:
1. Open up Terminal. 
2. At the command prompt type `sqlite3`:
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

### 329 - Install and Setup SQLite for Linux
Installing SQLite on Linux - didn't watch this video.

### 330 - Introduction to SQLite
Create database: `sqlite3 <database name>`

Help Man Pages: `.help`

`sqlite3 test.db` to open up the database in the command line interface.

`.databases` lists the databases.

Result if no databases:
```
sqlite> .databases
seq  name             file                                                      
---  ---------------  ----------------------------------------------------------
0    main                                                                       
sqlite> 
```

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

`.backup testbackup` **Note:** dot/period first or semicolen last. Not both. SQL statements require a semicolon. 
SQLite commands require a dot/period.

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

### 332 - Querying Data With SQL
See [this](https://github.com/JamieBort/LearningDirectory/tree/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/332QueryingDataWithSQL) README.md file for what I have done for this video. 

Navigate to that file to see how I created the database for the following video(s).

Other things of note:
`ID column` and `_id` mentioned here.

### 333 - SQL Order by and Joins
See also: https://github.com/JamieBort/LearningDirectory/blob/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/333SQLOrderByAndJoins/README.md

For the purpose of this video I copied the contents of the directory for the [previous video](https://github.com/JamieBort/LearningDirectory/tree/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/332QueryingDataWithSQL) and pasted them into the directory for [this video](https://github.com/JamieBort/LearningDirectory/tree/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/333SQLOrderByAndJoins).

`SELECT * FROM artists;` displays based on the primary key.  it's the same every time. 

`ORDER BY` clause specifies a different order.

`SELECT * FROM albums ORDER BY name;` displays alphabetically.

`SELECT * FROM albums ORDER BY name COLLATE NOCASE;` displays alphabetically & ignores case.

`SELECT * FROM albums ORDER BY name COLLATE NOCASE DESC;` displays alphabetically & ignores case & reverse order.

`SELECT * FROM albums ORDER BY artist, name COLLATE NOCASE;`

Challenge (the first challenge): list all of the songs from the same album so that they appear in track order.
I first ran `.schema` to see what the tables looked like.
```
CREATE TABLE songs (_id INTEGER PRIMARY KEY, track INTEGER, title TEXT NOT NULL, album INTEGER);
CREATE TABLE albums (_id INTEGER PRIMARY KEY, name TEXT NOT NULL, artist INTEGER);
CREATE TABLE artists (_id INTEGER PRIMARY KEY, name TEXT NOT NULL);
```

`songs` is the only table with track info.

Solution:
`SELECT * FROM songs ORDER BY album, track;`

Mini-challenge (the second challenge): 
The last record from the query `SELECT * FROM songs ORDER BY album, track;` is:
```
_id|track|title|album
5021|11|Things Ain't Like They Used To Be|439
```
Suppose you want to find the name of the band/group for that album. You'd have to run these two queries:

`SELECT * FROM albums WHERE _id = 439;`

Result:
```
_id|name|artist
439|Attack & Release|133
```

and `SELECT * FROM artists WHERE _id = 133;`

Result:
```
_id|name
133|Black Keys
```

In order to find "Black Keys" as the name.
Alternatively use `JOIN`.

Looking at a screenshot from the video I see that `album` in the `songs` table is the `PRIMARY KEY` in the `albums` table.
And that `artist` in the `albums` table is the `PRIMARY KEY` in the `artists` table.
```
songs (_id INTEGER PRIMARY KEY, track INTEGER, title TEXT NOT NULL, album INTEGER);
albums (_id INTEGER PRIMARY KEY, name TEXT NOT NULL, artist INTEGER);
artists (_id INTEGER PRIMARY KEY, name TEXT NOT NULL);
```

With this info we can (and will) use the `JOIN`.
`SELECT songs.track, songs.title, albums.name FROM songs JOIN albums ON songs.album = albums._id;`

The above is equivelent to:
`SELECT songs.track, songs.title, albums.name FROM songs INNER JOIN albums ON songs.album = albums._id;`

These are the columns I want to display: songs.track, songs.title, and albums.name
track and title are in the songs table, hence songs.track and songs.title
name is in the albums table, hence albums.name
the songs table is joined with the albums table where the values in the album column (of the songs table) match the values in the _id column (of the albums table).
Note: since track and title  are in only one table, "songs." could have been left off in songs.track and songs.title

### 334 - More complex Joins
Continuation of the last video.
`SELECT albums.name, songs.track, songs.title FROM songs INNER JOIN albums ON songs.album = albums._id ORDER BY albums.name, songs.track;`

Mini-challenge: 
Produce a list of all artists, with their albums, in alphabetical order of artist name.
SELECT * WHERE <> JOIN <> ORDER BY name;
`SELECT artists.name, albums.name FROM albums 
INNER JOIN artists ON albums.artist = albums._id 
ORDER BY artists.name;`

`SELECT artists.name, albums.name, songs.track, songs.title FROM songs 
INNER JOIN albums ON songs.album = albums._id 
INNER JOIN artists ON albums.artist = artists._id 
ORDER BY artists.name, albums.name, songs.track;`

Using `WHERE` clause:
`SELECT artists.name, albums.name, songs.track, songs.title FROM songs 
INNER JOIN albums ON songs.album = albums._id 
INNER JOIN artists ON albums.artist = artists._id
WHERE albums._id = 19 
ORDER BY artists.name, albums.name, songs.track;`

### 335 - Wildcards Queries and Views
**Wildcard** with '**doctor**':
```
SELECT artists.name, albums.name, songs.track, songs.title FROM songs 
INNER JOIN albums ON songs.album = albums._id 
INNER JOIN artists ON albums.artist = artists._id
WHERE songs.title LIKE "%doctor%"
ORDER BY artists.name, albums.name, songs.track;
```

Benefits of `VIEW`s:
* security - VIEWs can be used to provide details that are needed while hiding the details that are not needed.

**Creating a `VIEW`**:

```
CREATE VIEW artist_list AS
SELECT name 
FROM albums 
ORDER BY name;
```

Now verify it is party of the database by running `.schema`:
```
sqlite> .schema
CREATE TABLE songs (_id INTEGER PRIMARY KEY, track INTEGER, title TEXT NOT NULL, album INTEGER);
CREATE TABLE albums (_id INTEGER PRIMARY KEY, name TEXT NOT NULL, artist INTEGER);
CREATE TABLE artists (_id INTEGER PRIMARY KEY, name TEXT NOT NULL);
CREATE VIEW artist_list AS
SELECT name 
FROM albums 
ORDER BY name;
sqlite> 
```

`CREATE VIEW artist_list...` can be seen above.

To use this `VIEW` run a `SELECT` query:
```
SELECT * FROM artist_list;
```

Lower case names are listed alphabetically **after** capitalized names. 

```
XS All Areas
You Know Who You Are
Zappa In New York
Zooma
heavens to betsy
whip Jamboree
sqlite> 
```

To address this we need to modify the `VIEW`. However `VIEW`s need to be deleted and recreated in order to update or change them.
Command to delete them:
```
DROP VIEW <view name>;
```

Our command will be: `DROP VIEW artist_list;`

We will then modify it using `COLLATE NOCASE`:

`CREATE VIEW artist_list AS SELECT name FROM albums ORDER BY name COLLATE NOCASE;` 

(one line this time so that when I run `.schema` it will look more tidy - this is a prefernece, it is not necessary.)

Now `whip Jamboree` is alphabetized between `Welcome To My Nightmare` and `Who Do We Think We Are Remastered Edition`:

```
Welcome To My Nightmare
whip Jamboree
Who Do We Think We Are Remastered Edition
```

Using a `VIEW` with a `JOIN`:

```
CREATE VIEW artist_list AS
SELECT artists.name, albums.name, songs.track, songs.title 
FROM songs 
INNER JOIN albums ON songs.album = albums._id 
INNER JOIN artists ON albums.artist = artists._id
ORDER BY artists.name, albums.name, songs.track;
```

This will display 
* the `name` column from the `artists` table, 
* the `name` column from the `albums` table, 
* the `track` column from the `songs` table, and
* the `title` column from the `songs` table, 

and it will be first ordered by 
* the `name` column from the `artists` table, 

then it will be first ordered by  
* the `name` column from the `albums` table, 

and lastly it will be first ordered by  
* the `track` column from the `songs` table.

By running `SELECT * FROM artist_list;` We now have:
```
name        |name:1           |track|title
----------------------------------------------------------
1000 Maniacs|Our Time in Eden |1    |Candy Everybody Wants
1000 Maniacs|Our Time in Eden |2    |Circle Dream
1000 Maniacs|Our Time in Eden |3    |Eden
1000 Maniacs|Our Time in Eden |4    |Few And Far Between
.
.
.
```

To address `name:1` above, use `AS` in the creating of the view:

```
CREATE VIEW artist_list AS
SELECT artists.name AS artist, albums.name, songs.track, songs.title 
FROM songs 
INNER JOIN albums ON songs.album = albums._id 
INNER JOIN artists ON albums.artist = artists._id
ORDER BY artists.name, albums.name, songs.track;
```

```
artist      |name             |track|title
----------------------------------------------------------
1000 Maniacs|Our Time in Eden |1    |Candy Everybody Wants
1000 Maniacs|Our Time in Eden |2    |Circle Dream
1000 Maniacs|Our Time in Eden |3    |Eden
.
.
.
```

### 336 - Housekeeping and final sql challenge
1. backup database again.
`.backup music-backup2`
2. alter database
`DELETE FROM songs WHERE track < 50;`

3. review what's left
`SELECT * FROM songs;`
and/or
`SELECT * FROM artist_list;`

You can also look by using the `count()` funciton:
* `SELECT * FROM songs WHERE track <> 71;`
* `SELECT COUNT(*) FROM songs;`
* `SELECT count(*) FROM albums;`

4. restore database
`.restore music-backup2`

5. review what has been restored:
* `SELECT * FROM songs WHERE track <> 71;`
* `SELECT COUNT(*) FROM songs;`
* `SELECT count(*) FROM albums;`

**Challange:**
1. Select the titles of all the songs on the album "Forbidden".
2. Same as 1. above but display the songs in track order.
3. Display all songs for the band "Deep Purpal".
4. Rename the band "Mehitabel" to "One Kitten". ("SET artist.name" wont work - see note in video)
5. Check that the record was correctly renamed.
6. Display the titles of all the songs by Aerosmith in alphabetical order. Do not display any other column.
7. Display the count of the number of songs in the previous question.
8. Repeat 6. above so that none are listed more than once. Need to find this on the internet.
9. Diplay a count of the songs found in step 8. above. Need to find this on the internet.
10. Display the number of artists in step 9. above and b) the number of albums in step 9. 

**Challange -  not done yet!!! <------************

**Didn't finish watching the last 8 min. of the video.**

### 337 - JDBC and SQLite GUI Browser
The **JDBC** (Java Database Connectivity) allows you to work with databases as well as flat files and spreadsheets.

The JDVC driver is needed to work with an application.

The driver is a Java library containing classes that implement the JDBC API.
We need a SQLite JDBC driver in order to access a SQLite database.

Two packages in the driver - revisit this video at 2:35 minutes for more detail.

3:55 min. for this step:
Already installed the driver when I followed this course 1+ year(s) ago. Also found [here](https://github.com/JamieBort/LearningDirectory/tree/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/SuppliedFiles/Section19Databases/338CreatingDatabasesWithJDBCInJava).

Nothing else to make note here.

### 338 - Creating Databases With JDBC in Java
~~338CreatingDatabasesWithJDBCInJava~~
CreatingDatabasesWithJDBCInJava338

See also: https://github.com/JamieBort/LearningDirectory/tree/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/338CreatingDatabasesWithJDBCInJava

When following the video I was getting the following error:
```
Something went wrong: java.sql.SQLException: No suitable driver found for jdbc:sqlite:/Users/jamiebort/Documents/DevFiles/personal_projects/LearningDirectory/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/testjava.db
```

Using this https://stackoverflow.com/a/54535301/8210460 I did the following to use the JDBC library:
1. open up the `File Explorer` in Visual Studio Code.
2. Select `JAVA PROJECTS` towards the bottom of that window.
3. Scroll down to `Referenced Libraries`.
4. Select the `+` symbol.
5. Navigate to and select the JAR file that I need to add. In this case that file is located in the `/LearningDirectory/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/SuppliedFiles/Section19Databases/338CreatingDatabasesWithJDBCInJava` directory. And is called `sqlite-jdbc-3.30.1.jar`.

Now it seems to work just fine. 
Also, per the video, the `testjava.db` database in the `/LearningDirectory/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/SuppliedFiles/Section19Databases/338CreatingDatabasesWithJDBCInJava` directory.

**Come back to make more comprehensive notes.**

At around 12:45 minutes we start using the Database Browser again. (from video 337 I **believe**.)
Open Database in the Databse Browser.
1. Open or navigate to the Databse Browser app.
2. Select `Open Database` button at top.
3. Navigate to `/Users/jamiebort/Documents/DevFiles/personal_projects/LearningDirectory/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/CreatingDatabasesWithJDBCInJava338/testjava.db` and select it.
4. 

### 339 - 

.
.
.

### 359 - Handling Updates