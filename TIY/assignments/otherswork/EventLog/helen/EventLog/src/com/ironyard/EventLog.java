package com.ironyard;

import java.util.ArrayList;
import java.util.List;

public class EventLog {

    private List<Event> eventList = new ArrayList<>();

    public boolean addEvent(Event event) throws IllegalArgumentException {

        if(event == null){
            throw new IllegalArgumentException();
        }

        if (event.name == null || event.action == (null) ) {
           throw new IllegalArgumentException ("Name field can not be null");
        }
        else if (!event.action.equals("Face2Face") && !event.getAction().equals("PhoneCall") &&
                !event.getAction().equals("TextMessaging") && !event.getAction().equals("Unknown")) {
            throw new IllegalArgumentException("Must be correct feild");
        }
        else {
            eventList.add(event);
            return true;
        }

    }

    public int getNumEvents (){
        return eventList.size();
    }

    public EventLog () {
        eventList = new ArrayList<>();
    }

}
