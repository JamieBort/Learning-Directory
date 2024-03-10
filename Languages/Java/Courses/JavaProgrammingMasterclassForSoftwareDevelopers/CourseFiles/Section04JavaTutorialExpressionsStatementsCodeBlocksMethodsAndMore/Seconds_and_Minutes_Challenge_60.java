// Create a method called getDurationString with two parameters, first parameter minutes and 2nd parameter seconds. **DONE.**

// You should validate that the first parameter minutes is >= 0.

// You should validate that the 2nd parameter seconds is >= 0 and <= 59.

// The method should return �gInvalid value�h in the method if either of the above are not true.

// If the parameters are valid then calculate how many hours minutes and seconds equal the minutes and seconds passed to this method and return that value as string in format �gXXh YYm ZZs�h where XX represents a number of hours, YY the minutes and ZZ the seconds.

// Create a 2nd method of the same name but with only one parameter seconds.

// Validate that it is >= 0, and return �gInvalid value�h if it is not true.

// If it is valid, then calculate how many minutes are in the seconds value and then call the other overloaded method passing the correct minutes and seconds calculated so that it can calculate correctly.

// Call both methods to print values to the console.

// Tips: 
// 	Use int or long for your number data types is probably a good idea.
// 	1 minute = 60 seconds and 1 hour = 60 minutes or 3600 seconds.
// 	Methods should be static as we have used previously.

// Bonus: 
// 	For the input 61 minutes output should be 01h 01m 00s, but it is ok if it is 1h 1m 0s (Tip: use if-else)
// 	Create a new console project and call it SecondsAndMinutesChallenge

// ----------------------------------------

package Section04JavaTutorialExpressionsStatementsCodeBlocksMethodsAndMore;

public class Seconds_and_Minutes_Challenge_60 {
    public String getDurationString(int seconds) {
        // answer this one first. Then refactor the one below so it uses this and is cleaner.
        return "a";
    }

    public String getDurationString(int minutes, int seconds) {
        String hms = "";
        if (minutes < 0 || seconds < 0 || seconds > 60) {
            hms = "The arguments are not valid.Minutes or seconds are a negative value. Or the seconds are greater than 60.";
            System.out.println("The arguments are not valid.");
            System.out.println("Minutes or seconds are a negative value. Or the seconds are greater than 60.");
        } else {
            // If the parameters are valid then calculate how many hours minutes and seconds
            // equal the minutes and seconds passed to this method and return that value as
            // string in format �gXXh YYm ZZs�h where XX represents a number of hours, YY
            // the minutes and ZZ the seconds.

            System.out.println("original minutes: " + minutes);
            System.out.println("original seconds: " + seconds);

            int totalSeconds = minutes * 60 + seconds;
            System.out.println("The total number of seconds: " + totalSeconds);
            int totalMinuets = totalSeconds / 60;
            System.out.println("The total number of minutes: " + totalMinuets);

            int secondsPerHour = 60 * 60;
            // System.out.println("Seconds per hour: " + secondsPerHour); // we don't need
            // to see this every time.

            int totalHoursInSeconds = (totalSeconds - totalSeconds % secondsPerHour);
            // int totalHoursInMinutes = totalHoursInSeconds/60;
            int totalHours = totalHoursInSeconds / secondsPerHour;
            System.out.println("Total number of hours: " + totalHours);

            totalMinuets = totalMinuets - (totalHours * 60);
            System.out.println("Remainder of minutes: " + totalMinuets);

            totalSeconds = totalSeconds - (totalMinuets * 60) - (totalHours * 60 * 60);
            System.out.println("Remainder of seconds: " + totalSeconds);
            hms = totalHours + " hours " + totalMinuets + " minutes and " + totalSeconds +" seconds.";
        }
        System.out.println(hms);
        return hms;
    }

}
