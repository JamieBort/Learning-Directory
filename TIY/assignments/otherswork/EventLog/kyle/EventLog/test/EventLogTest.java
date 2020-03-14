import com.herbie.common.*;
import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
import static org.junit.Assert.*;
import static org.hamcrest.core.IsEqual.*;

public class EventLogTest {

    @Test
    public void whenEventCanBeAddedThenReturnTrue() throws Exception {
        // Arrange
        Event event = new Event();
        EventLog eventLog = new EventLog();

        // Act
        event.setAction("Blargh");
        event.setName("Nemo");

        boolean eventCanBeAdded = eventLog.addEvent(event);


        // Assert
        assertThat(eventCanBeAdded, equalTo(true));
    }

    @Test (expected = IllegalArgumentException.class)
    public void whenNameIsNullThenThrowIllegalArgumentException() throws Exception {
        // Arrange
        Event event = new Event();
        EventLog eventLog = new EventLog();

        // Act
        event.setAction("Blargh");

        // Assert-ish?
        eventLog.addEvent(event);
        System.out.println("If this message is printed, the test failed.");
    }

    @Test (expected = IllegalArgumentException.class)
    public void whenActionIsNullThenThrowIllegalArgumentException() throws Exception {
        // Arrange
        Event event = new Event();
        EventLog eventLog = new EventLog();

        // Act
        event.setName("Nemo");

        // Assert-ish?
        eventLog.addEvent(event);
        System.out.println("If this message is printed, the test failed.");
    }

    @Test (expected = IllegalArgumentException.class)
    public void whenArgumentIsNullThenThrowIllegalArgumentException() throws Exception {
        // Arrange
        EventLog eventLog = new EventLog();

        // Act
        eventLog.addEvent(null);

        // Assert-ish?
        System.out.println("If this message is printed, the test failed.");
    }
}
