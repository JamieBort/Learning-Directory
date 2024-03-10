public class WorkOrder {
    private int id;
    private String description;
    private String senderName;
    private Status status;
    private boolean ignored = false;

    public boolean isIgnored() {
        return ignored;
    }

    public void setIgnored(boolean ignored) {
        this.ignored = ignored;
    }

    public WorkOrder() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {

        this.id = id;
    }

    public String getDescription() {

        return description;
    }

    public void setDescription(String description) {

        this.description = description;
    }

    public String getSenderName() {

        return senderName;
    }

    public void setSenderName(String senderName) {

        this.senderName = senderName;
    }

    public Status getStatus() {

        return status;
    }

    public void setStatus(Status status) {

        this.status = status;
    }

    @Override
    public String toString() {
        if (this.isIgnored()){
            return "{\"id\":\""+ this.id + "\", \"senderName\":\"" + this.senderName + "\", \"description\":\"" + this.description + "\", \"status\":\"" + this.status +"\", \"ignored\":\"" + this.ignored + "\"}";
        }else {
            return "{\"id\":\""+ this.id + "\", \"senderName\":\"" + this.senderName + "\", \"description\":\"" + this.description + "\", \"status\":\"" + this.status + "\"}";
        }

    }
}
