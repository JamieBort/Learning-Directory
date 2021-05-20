# ~~332 Querying Data With SQL~~ QueryingDataWithSQL332

The second supplied "file" for this video was actually this link: https://www.sqlite.org/autoinc.html

It covers incrementing.

~~Commands I am running for [this section](https://www.udemy.com/course/java-the-complete-java-developer-course/learn/lecture/6060828#overview) of the course.~~

1. I first obtained the zipped music file from the supplied files [here](https://github.com/JamieBort/LearningDirectory/blob/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/SuppliedFiles/Section19Databases/332QueryingDataWithSQL/music.zip).

2. Then in Terminal I navigated to the location of the music file:
`cd Documents/DevFiles/personal_projects/LearningDirectory/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/332QueryingDataWithSQL/`

3. I then ran this
`sqlite3 music.db`

Result:
```
jamiebort@My-MacBook-Pro-3:~/Documents/DevFiles/personal_projects/LearningDirectory/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/332QueryingDataWithSQL$ sqlite3 music.db
SQLite version 3.13.0 2016-05-18 10:57:30
Enter ".help" for usage hints.
sqlite> 
```
So it worked.

Revieing the structure: `.schema`
Resulted in:
```
CREATE TABLE songs (_id INTEGER PRIMARY KEY, track INTEGER, title TEXT NOT NULL, album INTEGER);
CREATE TABLE albums (_id INTEGER PRIMARY KEY, name TEXT NOT NULL, artist INTEGER);
CREATE TABLE artists (_id INTEGER PRIMARY KEY, name TEXT NOT NULL);
```

`.backup music-backup1`
No output. However `.backup music-backup1` is now in the same directory:
```
jamiebort@My-MBP-3:~/Documents/DevFiles/personal_projects/LearningDirectory/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/332QueryingDataWithSQL$ ls
README.md      music-backup1  music.db       music.zip
```
`INSERT INTO artists(name) VALUES("Beyonce");`

`SELECT * FROM artists WHERE name = "Beyonce";`

Result:
```
sqlite> SELECT * FROM artists WHERE name = "Beyonce";
202|Beyonce
sqlite> 
```