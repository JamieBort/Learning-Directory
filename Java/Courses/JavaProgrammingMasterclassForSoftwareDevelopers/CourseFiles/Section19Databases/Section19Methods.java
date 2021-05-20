package Section19Databases;

import Section19Databases.CreatingDatabasesWithJDBCInJava338.TestDB_Video_338;
import Section19Databases.JDBCInsertUpdateDelete339.*;
import Section19Databases.executeQueryAndUsingConstants340.*;
import Section19Databases.TheMusicSQLiteDatabase341.*;

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

    // This class is called Datasource in the video.
    public void Datasource() {
        System.out.println("I am in my Datasource() method of the Section19Methods file/class.");
        The_Music_SQLite_Database_341 the_Music_SQLite_Database_341 = new The_Music_SQLite_Database_341();
        if(!the_Music_SQLite_Database_341.open()){
            System.out.println("closed");
            return;
        } else {System.out.println("Was open.");}

        the_Music_SQLite_Database_341.close();
        System.out.println("Closed.");
    }

}