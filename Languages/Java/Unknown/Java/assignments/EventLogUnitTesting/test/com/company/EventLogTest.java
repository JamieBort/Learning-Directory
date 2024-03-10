package com.company;

import org.junit.Test;

import static junit.framework.TestCase.assertNull;
import static junit.framework.TestCase.assertTrue;

public class EventLogTest {
//    The requirements have changed. action can only be one of the following values:
//        "Face2Face"
//        "PhoneCall"
//        "TextMessaging"
//        "Unknown"
//    The action variable in Event has to stay a String for backwards compatibility. DONE
//    Add a new test method for this requirement. DONE
//    Again, you will need to test that an exception is thrown properly and that a "good" event can still be added. DONE
//    Then, add a check in the addEvent method to validate the String value.
//    If not valid throw an IllegalArgumentException.

    @Test
    public void canCreateNewEvent() {
//        arrange
        Event event = new Event();

//        act

//        assert

    }

    @Test
    public void canCreateRandomTest() {
//        arrange
        Event event = new Event();

//        act
        event.setAction("First string");
        event.setName("Second string");
//        System.out.println(event.name);

//        assert

    }

//    this one is obsolete now.
//    @Test
//    public void canCreatFace2FaceAction() {
////        arrange
//        Event event = new Event();
//        EventLog eventLog = new EventLog();
//
//
////        act
//        event.setAction("notFace2Face");
//        event.setName("Random String");
//        System.out.println(event.action); // this is not necessary
//        eventLog.addEvent(event);
//        System.out.println(event.action); // this is not necessary
//
////        assert
//        assertTrue("That the action will result in 'Face2Face'", event.action == "Face2Face");
//    }

    @Test
    public void canCreatePhoneCallAction() {
//        arrange
        Event event = new Event();
        EventLog eventLog = new EventLog();


//        act
        event.setAction("PhoneCall");
        event.setName("Random String");
//        System.out.println(event.action); // this is not necessary
        eventLog.addEvent(event);
//        System.out.println(event.action); // this is not necessary

//        assert
        assertTrue("That the action will result in 'Face2Face'", event.action == "PhoneCall");

    }

    @Test
    public void canCreateFace2FaceAction() {
//        arrange
        Event event = new Event();
        EventLog eventLog = new EventLog();


//        act
        event.setAction("Face2Face");
        event.setName("Random String");
//        System.out.println(event.action); // this is not necessary
        eventLog.addEvent(event);
//        System.out.println(event.action); // this is not necessary

//        assert
        assertTrue("That the action will result in 'Face2Face'", event.action == "Face2Face");

    }

    @Test
    public void canCreateTextMessagingAction() {
//        arrange
        Event event = new Event();
        EventLog eventLog = new EventLog();


//        act
        event.setAction("TextMessaging");
        event.setName("Random String");
//        System.out.println(event.action); // this is not necessary
        eventLog.addEvent(event);
//        System.out.println(event.action); // this is not necessary

//        assert
        assertTrue("That the action will result in 'Face2Face'", event.action == "TextMessaging");

    }

    @Test
    public void canCreateUnknownAction() {
//        arrange
        Event event = new Event();
        EventLog eventLog = new EventLog();


//        act
        event.setAction("Unknown");
        event.setName("Random String");
//        System.out.println(event.action); // this is not necessary
        eventLog.addEvent(event);
//        System.out.println(event.action); // this is not necessary

//        assert
        assertTrue("That the action will result in 'Face2Face'", event.action == "Unknown");

    }

    @Test(expected = IllegalArgumentException.class)
    public void canThrowExceptionWhenActionIsNull() {
//        arrange
        Event event = new Event();
        EventLog eventLog = new EventLog();


//        act
        event.setAction("");
        event.setName("");
//        System.out.println(event.action); // this is not necessary
        eventLog.addEvent(event);
//        System.out.println(event.action); // this is not necessary

//        assert


    }

    @Test(expected = IllegalArgumentException.class)
    public void canThrowExceptionWhenNameIsNull() {
//        arrange
        Event event = new Event();
        EventLog eventLog = new EventLog();


//        act
        event.setAction("a");
        event.setName("");
//        System.out.println(event.action); // this is not necessary
        eventLog.addEvent(event);
//        System.out.println(event.action); // this is not necessary

//        assert


    }

    @Test(expected = IllegalArgumentException.class)
    public void canThrowExceptionWhenActionAndNameAreNull() {
//        arrange
        Event event = new Event();
        EventLog eventLog = new EventLog();


//        act
        event.setAction("");
        event.setName("b");
//        System.out.println(event.action); // this is not necessary
        eventLog.addEvent(event);
//        System.out.println(event.action); // this is not necessary

//        assert


    }

//    not sure how to test for this.
//    @Test(expected = IllegalArgumentException.class)
//    public void canThrowExceptionWhenActionOrNameAreNotStrings() {
//        arrange
//        Event event = new Event();
//        EventLog eventLog = new EventLog();


//        act
//        event.setAction("Unknown");
//        event.setName("Random String");
//        System.out.println(event.action); // this is not necessary
//        eventLog.addEvent(event);
//        System.out.println(event.action); // this is not necessary

//        assert
//    }


//    @Test(expected = IllegalArgumentException.class)
//    public void canThrowExceptionWhenActionAndNameAreStrings() {
////        arrange
//        Event event = new Event();
//        EventLog eventLog = new EventLog();
//
////        act
//        event.setAction("Unknown");
//        event.setName("Random String");
////        System.out.println(event.action); // this is not necessary
//        eventLog.addEvent(event);
////        System.out.println(event.action); // this is not necessary
//
////        assert
//
//
//    }
}