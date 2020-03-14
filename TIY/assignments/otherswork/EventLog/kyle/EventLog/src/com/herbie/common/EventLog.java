package com.herbie.common;

import java.util.List;
import java.util.ArrayList;

public class EventLog {
    private List<Event> eventList = new ArrayList<>();

    public EventLog() {}

    public boolean addEvent(Event event) throws IllegalArgumentException {
        String errors = "";


        if (event == null) {
            throw new IllegalArgumentException("ERROR: Event cannot be null.");
        }


        if (event.getAction() == null) {
            errors += "ERROR: Action cannot be null.\n";
        }

        if (event.getName() == null) {
            errors += "ERROR: Name cannot be null.\n";
        }

        if (!errors.isEmpty()) {
            throw new IllegalArgumentException("\n" + errors);
        }

        System.out.println(event.toString());
        eventList.add(event);
        return true;
    }

    public int getNumEvents() {
        return this.eventList.size();
    }
}
