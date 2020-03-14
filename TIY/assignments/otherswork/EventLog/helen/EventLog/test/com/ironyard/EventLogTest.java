package com.ironyard;

import org.junit.*;
import org.junit.Test;


import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.nullValue;
import static org.hamcrest.core.IsEqual.equalTo;
import static org.junit.Assert.*;

public class EventLogTest {

    @Test(expected = IllegalArgumentException.class)
    public void ifEventIsNull() {
        //arrange
        EventLog nullEvent = new EventLog();
        //act
        nullEvent.addEvent(null);
    }

    @Test(expected = IllegalArgumentException.class)
    public void ifEventNameIsNull() {
        //arrange
        EventLog nullEvent = new EventLog();
        Event newEvent = new Event (null, "text");
        //act
        nullEvent.addEvent(newEvent);
    }

    @Test(expected = IllegalArgumentException.class)
    public void ifEventActionIsNull() {
        //arrange
        EventLog nullEvent = new EventLog();
        Event newEvent = new Event ("text", null);
        //act
        nullEvent.addEvent(newEvent);
    }

    @Test(expected = IllegalArgumentException.class)
    public void ifEventBothAresNull() {
        //arrange
        EventLog nullEvent = new EventLog();
        Event newEvent = new Event (null, null);
        //act
        nullEvent.addEvent(newEvent);
    }

    @Test
    public void ifEventAddedToList() {
        //arrange
        EventLog nullEvent = new EventLog();
        Event newEvent = new Event ("text", "text");
        //act
        nullEvent.addEvent(newEvent);
        //assert
        assertThat(nullEvent.getNumEvents(), equalTo(1));
    }

    @Test
    public void ifTwoEventsAddedToList() {
        //arrange
        EventLog nullEvent = new EventLog();
        Event newEvent = new Event ("text", "text");
        Event newEvent2 = new Event ("text", "text");
        //act
        nullEvent.addEvent(newEvent);
        nullEvent.addEvent(newEvent2);
        //assert
        assertThat(nullEvent.getNumEvents(), equalTo(2));
    }

    @Test(expected = IllegalArgumentException.class)
    public void vaildActionTest() {
       //arrange
        EventLog nullEvent = new EventLog();
        Event newEvent = new Event ("text", "text");
        //act
        nullEvent.addEvent(newEvent);
    }

}