package com.company;

public class EmailNotification extends Notification {

    private String recipient;
    private String smtpProvider;

//    Food for thought: The compiler will complain about the fact that there is no default constructor in Notification. Can you answer why this is happening? What constructor is there in the EmailNotification class? Think about this for a few minutes, write down any explaination you come up with on a piece of paper or electronically and move on.

// The constructor in Notification cannot/doesn't know how to handle the two variables recipient and smtpProvider.


    public EmailNotification(String subject, String body, String recipient, String smtpProvider) {
        super(subject, body);
        this.recipient = recipient;
        this.smtpProvider = smtpProvider;
    }

    public String getRecipient() {
        return recipient;
    }

    public String getSmtpProvider() {
        return smtpProvider;
    }


    @Override
    public void transport() throws NoTransportException {
        System.out.printf("CreatedAt %s\n" +
                        "Subject %s\n" +
                        "Body %s\n" +
                        "Recipient %s\n" +
                        "Provider %s\n",
                getCreatedAt(), getSubject(), getBody(), getRecipient(), getSmtpProvider());

    }



//In EmailNotification override the method AND make it public (again you can have IntelliJ generate it for you). When you override a method you can keep the visibility the same or make it more visible. The compiler will give an error if you make it less visible.

    @Override
    public void toPrint() {
        super.toPrint();
        System.out.println("some more text.");
    }


//    Have IntelliJ generate equals() and hashCode() for you in EmailNotification (take all the defaults in the generation wizard).

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof EmailNotification)) return false;

        EmailNotification that = (EmailNotification) o;

        if (getRecipient() != null ? !getRecipient().equals(that.getRecipient()) : that.getRecipient() != null)
            return false;
        return getSmtpProvider() != null ? getSmtpProvider().equals(that.getSmtpProvider()) : that.getSmtpProvider() == null;
    }

    @Override
    public int hashCode() {
        int result = getRecipient() != null ? getRecipient().hashCode() : 0;
        result = 31 * result + (getSmtpProvider() != null ? getSmtpProvider().hashCode() : 0);
        return result;
    }



//IntelliJ will generate clone() for you but it does not really clone your object. Go ahead and have IntelliJ generate the clone() method in EmailNotification. Remove the call to super.clone() and replace it with code that actually makes a copy. Also remove the throws CloneNotSupportedException from the method signature.

// why does 'return this' make a copy?
    @Override
    protected Object clone() {
        return this;
    }
}
