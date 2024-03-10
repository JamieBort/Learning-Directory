package Section19Databases.WriteJavaQueryForArtists342;

public class Album {

    private int id;
    private String name;
    private int artistId;

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
     * @return int return the artistId
     */
    public int getArtistId() {
        return artistId;
    }

    /**
     * @param artistId the artistId to set
     */
    public void setArtistId(int artistId) {
        this.artistId = artistId;
    }

}