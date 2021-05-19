package Section19Databases.CreatingDatabasesWithJDBCInJava338;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class TestDB {

    public void sudoMainMethod() {
        System.out.println("inside the sudoMainMethod()");
        try {
            Connection conn = DriverManager.getConnection(
                    "jdbc:sqlite:/Users/jamiebort/Documents/DevFiles/personal_projects/LearningDirectory/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/CreatingDatabasesWithJDBCInJava338/testjava.db");

            // /Users/jamiebort/Documents/DevFiles/personal_projects/LearningDirectory/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases
            // ("jdbc:sqlite:/Users/jamiebort/Documents/DevFiles/LearningDirectory/Java/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/testjava.db");
            // // To this.

            // Statement statement = conn.createStatement();

        } catch (SQLException e) {
            // TODO: handle exception
            System.out.println("Something went wrong: " + e);
        }

        // TestDB testDB = new TestDB();
        // testDB.Floating_Point_Precision_and_a_Challenge_30();

    }

}