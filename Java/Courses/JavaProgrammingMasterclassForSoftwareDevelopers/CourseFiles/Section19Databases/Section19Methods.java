package Section19Databases;

import java.util.List;

import Section19Databases.CreatingDatabasesWithJDBCInJava338.TestDB_Video_338;
import Section19Databases.JDBCInsertUpdateDelete339.*;
import Section19Databases.executeQueryAndUsingConstants340.*;
import Section19Databases.TheMusicSQLiteDatabase341.*;
import Section19Databases.WriteJavaQueryForArtists342.*;

public class Section19Methods {

    // This is throwing errors (as expected.)
    public void TestDB_Video_338() {
        System.out.println("I am in my TestDB_Video_338 method of the Section19Methods file/class.");
        TestDB_Video_338 testDB_Video_338 = new TestDB_Video_338();
        testDB_Video_338.sudoMainMethod();
    }

    public void TestDB_Video_339() {
        System.out.println("I am in my TestDB_Video_339 method of the Section19Methods file/class.");
        TestDB_Video_339 testDB_Video_339 = new TestDB_Video_339();
        testDB_Video_339.sudoMainMethod();
    }

    public void TestDB_Video_340() {
        System.out.println("I am in my TestDB_Video_340 method of the Section19Methods file/class.");
        TestDB_Video_340 testDB_Video_340 = new TestDB_Video_340();
        testDB_Video_340.sudoMainMethod();
    }

    public void The_Music_SQLite_Database_341() {
        System.out.println("I am in my The_Music_SQLite_Database_341() method of the Section19Methods file/class.");
        // The_Music_SQLite_Database_341 the_Music_SQLite_Database_341 = new
        // The_Music_SQLite_Database_341();
        Datasource341 datasource341 = new Datasource341();
        if (!datasource341.open()) {
            System.out.println("closed");
            return;
        } else {
            System.out.println("Was open.");
        }

        datasource341.close();
        System.out.println("Closed.");
    }

    public void Write_Java_Query_For_Artists_342() {
        System.out.println("I am in my Write_Java_Query_For_Artists_342() method of the Section19Methods file/class.");
        Datasource342 datasource342 = new Datasource342();
        if (!datasource342.open()) {
            System.out.println("closed");
            return;
        }
        List<Artist> artists = datasource342.queryArtist();
        if (artists == null) {
            System.out.println("There are no artists.");
            return;
        }
        for (Artist artist : artists) {
            System.out.println("ID = " + artist.getId() + ", Name = " + artist.getName());
        }

        datasource342.close();
        System.out.println("Closed.");
    }

}