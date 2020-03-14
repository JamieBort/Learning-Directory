package com.ironyard;

public class WorkOrder {
//variables====================================================
    private int id;
    private String description;
    private String senderName;
    private Status status;

//constructors=================================================
    public WorkOrder() {

    }

//Getters and setters==========================================
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
}
