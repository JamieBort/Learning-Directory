package com.company;

import java.util.ArrayList;
import java.util.List;

public class EventLog {

//Write the EventLog class with the following method variables and methods:

//    private List<Event> eventList DONE
//    public boolean addEvent(Event event) DONE
//    public int getNumEvents () which returns the size of the list DONE
//    public EventLog () which initializes the list DONE

    private List<Event> eventList = new ArrayList<Event>();

    public boolean addEvent(Event event) throws IllegalArgumentException {

// The addEvent method should
// 1. Throw an IllegalArgumentException if the event parameter is null or if either if the two variables of event are null. DONE
// 2. If both parameters are set then print the event to the console and add it to the list. (** NOTE: how is it being printed to the console? **)
// 3. The return value from the addEvent method should be true. DONE

        if (event == null) {
            throw new IllegalArgumentException("What should this phrase say?");
        }
        if (event.name == null || event.action == null) {
            throw new IllegalArgumentException("What should THIS phrase say?");
        }
        if (( event.action != "Face2Face" ) && (event.action != "PhoneCall" ) && (event.action != "TextMessaging" ) && (event.action != "Unknown" )) {
            //    The requirements have changed. action can only be one of the following values:
//        "Face2Face"
//        "PhoneCall"
//        "TextMessaging"
//        "Unknown"
            //    If not valid throw an IllegalArgumentException.
            throw new IllegalArgumentException("And what should this phrase say?");

        }

        //    Then, add a check in the addEvent method to validate the String value.
        if ( ( event.name.getClass().equals(String.class) ) && ( event.action.getClass().equals(String.class) ) ) {
            System.out.println("The info entered is a string.");

        } else {
            throw new IllegalArgumentException("The info entered is NOT a string.");
        }

        eventList.add(event);


        return true;
    }

    ;

    public int getNumEvents() {
        return eventList.size();
    }

    ;

    public EventLog() {
        List myEvent = new ArrayList();
    }

    ;
}
