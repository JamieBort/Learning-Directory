package Section19Databases.CreatingDatabasesWithJDBCInJava338;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class TestDB_Video_338 {

    public void sudoMainMethod() {
        System.out.println("inside the sudoMainMethod()");

        // The below commented out code doesn't require the statement.close() and conn.close() methods.
        // try (Connection conn = DriverManager.getConnection(
        // "jdbc:sqlite:/Users/jamiebort/Documents/DevFiles/personal_projects/LearningDirectory/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/CreatingDatabasesWithJDBCInJava338/testjava.db");
        // Statement statement = conn.createStatement()) {
        // statement.execute("CREATE TABLE contacts (name TEXT, phone INTEGER, email
        // TEXT)");

        try {
            Connection conn = DriverManager.getConnection(
                    "jdbc:sqlite:/Users/jamiebort/Documents/DevFiles/personal_projects/LearningDirectory/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/CreatingDatabasesWithJDBCInJava338/testjava.db");

            // Created statement object my calling connection method.
            Statement statement = conn.createStatement();
            // Notice: the semicolen is not added to the end of the sql statement. The
            // driver is set up so that we don't need to do that.
            statement.execute("CREATE TABLE contacts (name TEXT, phone INTEGER, email TEXT)");

            statement.close();
            conn.close();

        } catch (SQLException e) {
            // TODO: handle exception
            System.out.println("Something went wrong: " + e);
        }
    }

}