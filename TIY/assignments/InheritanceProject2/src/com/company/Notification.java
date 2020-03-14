package com.company;

import java.time.LocalDateTime;

public class Notification {
    private LocalDateTime createdAt;
    private String subject;
    private String body;
    protected String status;

    public Notification(String subject, String body) {
        this.subject = subject;
        this.body = body;
        this.createdAt = LocalDateTime.now();
        this.status = "default";
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public String getSubject() {
        return subject;
    }

    public String getBody() {
        return body;
    }

    public void setStatus(String status) {
        this.status = status;
//        Set the protected variable in one of the subclasses but do not set it in the other. This shows that a subclass has direct access to the protected variable.
    }

    public void transport() throws NoTransportException {
//In the Notification class, add a public transport method that has a void return type, has no parameters and throws a NoTransportException.
// The purpose of this method is to be overridden by a subclass that has a transport mechanism.
    }

    public void showStatus() {
        System.out.println(this.status);
//    Add a public method that prints out (System.out.println) the protected variable (e.g. showStatus())

    }

    protected void toPrint() {
//    Add a protected method to Notification that prints out some text.
        System.out.println("some text");
    }
}