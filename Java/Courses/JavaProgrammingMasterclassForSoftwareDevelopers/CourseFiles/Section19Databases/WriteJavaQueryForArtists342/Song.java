package Section19Databases.WriteJavaQueryForArtists342;

public class Song {
    
    private int id;
    private int track;
    private String name;
    private int albumId;

    /**
     * @return int return the id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return int return the track
     */
    public int getTrack() {
        return track;
    }

    /**
     * @param track the track to set
     */
    public void setTrack(int track) {
        this.track = track;
    }

    /**
     * @return String return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return int return the albumId
     */
    public int getAlbumId() {
        return albumId;
    }

    /**
     * @param albumId the albumId to set
     */
    public void setAlbumId(int albumId) {
        this.albumId = albumId;
    }

}