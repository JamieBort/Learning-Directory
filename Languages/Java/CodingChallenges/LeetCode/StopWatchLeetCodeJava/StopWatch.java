// Design Object Oriented class structure for a stop watch similar to the one that appears on a phone.
// It should include features for the stopwatch, pause, cancel, reset and laps.

// Create a class has function for 'pause', 'cancle', 'reset', and 'laps'.
// We need to store two values for each lap, the time taken for that lap and the number of lap.
// Create class for lap number, lap time, and finish time.
// In our stopwatch class we can store a list of these objects.

public class StopWatch(){
    List Laps = new LinkedList(); // LinkedList uses a lot of pointers, called 'next'.
    // List Laps = new ArrayList(); // List is an interface. Laps is the object name. ArrayList() is the concrete class name.
    


}

To considder for this challenge:
https://docs.oracle.com/javase/8/docs/api/java/time/Instant.html
https://docs.oracle.com/javase/8/docs/api/java/time/temporal/Temporal.html
https://docs.oracle.com/javase/8/docs/api/java/time/Duration.html
https://docs.oracle.com/javase/8/docs/api/java/time/Duration.html#between-java.time.temporal.Temporal-java.time.temporal.Temporal-
https://docs.oracle.com/javase/8/docs/api/java/time/Clock.html
https://docs.oracle.com/javase/8/docs/api/java/time/package-summary.html
