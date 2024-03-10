
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Entry {
    private Day day;
    private String note;

    public Entry(Day day, String note) {
        this.day = day;
        this.note = note;
    }

    public Day getDay() {
        return day;
    }

    public String getNote() {
        return note;
    }

    @Override
    public String toString() {
        return "Entry{" +
          "day=" + day +
          ", note='" + note + '\'' +
          '}';
    }

    public static List<Entry> populate(){
        List<Entry> entries = new ArrayList<>();
        Random random = new Random();

        Entry entry = new Entry(Day.MONDAY,"Today I went to play sports");
        entries.add(entry);

        entry = new Entry(Day.TUESDAY,"Lunch was a salad today... was still hungry");
        entries.add(entry);

        entry = new Entry(Day.WEDNESDAY,"Hump day! Looking forward to the weekend.");
        entries.add(entry);

        entry = new Entry(Day.WEDNESDAY,"Why isn't the day over yet?!");
        entries.add(entry);

        entry = new Entry(Day.THURSDAY,"Poker night");
        entries.add(entry);

        entry = new Entry(Day.FRIDAY,"Finally Friday!");
        entries.add(entry);

        entry = new Entry(Day.SATURDAY,"Saturdaze");
        entries.add(entry);

        entry = new Entry(Day.SUNDAY,"Sunday Bumday");
        entries.add(entry);

        entry = new Entry(Day.MONDAY,"I dont like writing in this journal");
        entries.add(entry);

        entry = new Entry(Day.SATURDAY,"Why am I writing on a Saturday?");
        entries.add(entry);

        entry = new Entry(Day.TUESDAY,"toooos day");
        entries.add(entry);

        return entries;

    }
}
