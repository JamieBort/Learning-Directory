package com.herbie;

import com.herbie.common.Event;
import com.herbie.common.EventLog;

public class Main {
    public static void main(String[] args) {
        Event event = new Event();
        EventLog eventLog = new EventLog();

        event.setName("Hugo");
        event.setAction("Spoopy");

        eventLog.addEvent(event);
    }
}
