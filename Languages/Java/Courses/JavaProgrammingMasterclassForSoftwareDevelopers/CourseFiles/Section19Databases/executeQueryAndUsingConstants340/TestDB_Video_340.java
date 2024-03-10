package Section19Databases.executeQueryAndUsingConstants340;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class TestDB_Video_340 {

    public static final String DB_NAME = "testjava.db";
    
    public static final String CONNECTION_STRING = "jdbc:sqlite:/Users/jamiebort/Documents/DevFiles/personal_projects/LearningDirectory/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/executeQueryAndUsingConstants340/"
            + DB_NAME;

    public static final String TABLE_CONTACTS = "contacts";
    public static final String COLUMN_NAME = "name";
    public static final String COLUMN_PHONE = "phone";
    public static final String COLUMN_EMAIL = "email";

    public void sudoMainMethod() {
        System.out.println("inside the sudoMainMethod()");

        try {
            Connection conn = DriverManager.getConnection(CONNECTION_STRING);

            // Created statement object my calling connection method.
            Statement statement = conn.createStatement();
            statement.execute("DROP TABLE IF EXISTS " + TABLE_CONTACTS);

            statement.execute("CREATE TABLE IF NOT EXISTS " + TABLE_CONTACTS + " (" + COLUMN_NAME + " TEXT, "
                    + COLUMN_PHONE + " INTEGER, " + COLUMN_EMAIL + " TEXT)");

            insertContact(statement, "tim", 12345, "tim@email.com");
            insertContact(statement,"jim", 54334, "jimemail.com");
            insertContact(statement,"jan", 8743, "jan@email.com");
            
            // statement.execute("INSERT INTO " + TABLE_CONTACTS + "(" + COLUMN_NAME + "," + COLUMN_PHONE + ","
            //         + COLUMN_EMAIL + ")" + "VALUES('tim', 12345, 'tim@email.com')");

            // statement.execute("INSERT INTO " + TABLE_CONTACTS + "(" + COLUMN_NAME + "," + COLUMN_PHONE + ","
            //         + COLUMN_EMAIL + ")" + "VALUES('jim', 54334, 'jim@email.com')");

            // statement.execute("INSERT INTO " + TABLE_CONTACTS + "(" + COLUMN_NAME + "," + COLUMN_PHONE + ","
            //         + COLUMN_EMAIL + ")" + "VALUES('jan', 8743, 'jan@email.com')");

            // *** Omiting the UPDATE method at 11:45 min. And DELETE execute at 12:45 min.
            // ***

            ResultSet results = statement.executeQuery("SELECT * FROM " + TABLE_CONTACTS);
            while (results.next()) {
                System.out.println(results.getString(COLUMN_NAME) + " " + results.getInt(COLUMN_PHONE) + " "
                        + results.getString(COLUMN_EMAIL));
            }

            results.close();

            statement.close();
            conn.close();

        } catch (SQLException e) {
            System.out.println("Something went wrong: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private static void insertContact(Statement statement, String theName, int phone, String email) throws SQLException {
        statement.execute("INSERT INTO "+TABLE_CONTACTS+" ("+COLUMN_NAME+", "+COLUMN_PHONE+", "+COLUMN_EMAIL+") VALUES('"+theName+"', "+phone+", '"+email+"')");
    }

}