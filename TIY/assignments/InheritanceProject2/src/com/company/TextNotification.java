package com.company;

public class TextNotification extends Notification {

    private  String recipient;
    private  String smsProvider;

//    The same instructions for the construct and overriding transport() for EmailNotification apply to TextNotification.

    public TextNotification(String subject, String body, String recipient, String smsProvider) {
        super(subject, body);
        this.recipient = recipient;
        this.smsProvider = smsProvider;

//        A subclass can call the method in its constructor or in any instance method. Go ahead and give it a try in the constructor of TextNotification.
        transport();
        toPrint();
        showStatus();

    }

    public String getRecipient() {
        return recipient;
    }

    public String getSmsProvider() {
        return smsProvider;
    }


    @Override
    public void transport() throws NoTransportException {
        System.out.printf("CreatedAt %s\n" +
                        "Subject %s\n" +
                        "Body %s\n" +
                        "Recipient %s\n" +
                        "Provider %s\n",
                getCreatedAt(), getSubject(), getBody(), getRecipient(), getSmsProvider());

    }


//    @Override
//    public static void transport() throws NoTransportException {
//        System.out.println("the values of all the instance variable " + recipient + "and the values of all the instance variable " + smsProvider);
//    }


}
