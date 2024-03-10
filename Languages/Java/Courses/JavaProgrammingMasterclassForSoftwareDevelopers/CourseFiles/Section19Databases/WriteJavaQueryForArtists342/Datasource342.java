package Section19Databases.WriteJavaQueryForArtists342;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import Section19Databases.WriteJavaQueryForArtists342.Artist;

public class Datasource342 {

    public static final String DB_NAME = "music.db";
    // public static final String DB_NAME = "dummyDataBase.db";
    // *** This directory (below) is where the database (above) will be located. ***
    public static final String CONNECTION_STRING = "jdbc:sqlite:/Users/jamiebort/Documents/DevFiles/personal_projects/LearningDirectory/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section19Databases/TheMusicSQLiteDatabase341/"
            + DB_NAME;

    public static final String TABLE_ALBUMS = "albums";
    public static final String COLUMN_ALBUM_ID = "_id";
    public static final String COLUMN_ALBUM_NAME = "name";
    public static final String COLUMN_ALBUM_ARTIST = "artist";

    public static final String TABLE_ARTISTS = "artists";
    public static final String COLUMN_ARTIST_ID = "_id";
    public static final String COLUMN_ARTIST_NAME = "name";

    public static final String TABLE_SONGS = "songs";
    public static final String COLUMN_SONG_TRACK = "track";
    public static final String COLUMN_SONG_TITLE = "title";
    public static final String COLUMN_SONG_ALBUM = "album";

    private Connection conn;

    public boolean open() {
        try {
            conn = DriverManager.getConnection(CONNECTION_STRING);
            return true;
        } catch (SQLException e) {
            // TODO: handle exception
            System.out.println("Couldn't connect to the database: " + e.getMessage());
            return false;
        }
    }

    public void close() {
        try {
            if (conn != null) {
                conn.close();
            }
        } catch (SQLException e) {
            // TODO: handle exception
            System.out.println("Couldn't close connection to the database: " + e.getMessage());
        }
    }

    public List<Artist> queryArtist() {
        Statement statement = null;
        ResultSet results = null;
        try {
            statement = conn.createStatement();
            results = statement.executeQuery("SELECT * FROM " + TABLE_ARTISTS);

            List<Artist> artists = new ArrayList<>(); // This is discussed at 4:00 minutes.
            while (results.next()) {
                Artist artist = new Artist();
                artist.setId(results.getInt(COLUMN_ARTIST_ID));
                artist.setName(results.getString(COLUMN_ARTIST_NAME));
                artists.add(artist);
            }
            return artists;
        } catch (SQLException e) {
            // TODO: handle exception
            System.out.println("Query failed: " + e.getMessage());
            return null;
        } finally {
            try {
                if (results != null) {
                    results.close();
                }
            } catch (SQLException e) {
                System.out.println("Error closing ResultSet: " + e.getMessage());
            }
            try {
                if (statement != null) {
                    statement.close();
                }
            } catch (SQLException e) {
                // TODO: handle exception
                System.out.println("Error closing statement: " + e.getMessage());
            }
        }
    }

}