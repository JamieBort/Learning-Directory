package com.company;

        import java.util.ArrayList;
        import java.util.List;
        import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // write your code here
        List<SeaLocation> locations = new ArrayList<>();
        //Not at all scientific/accurate
        locations.add(new SeaLocation("Marianas Trench", false, 15, 2000));
        locations.add(new SeaLocation("Atlantis", true, 3000, 500));
        locations.add(new SeaLocation("Ariel's Trove", true, 2, 300));
        locations.add(new SeaLocation("Sea Witch Lair", false, 1, 1000));
        locations.add(new SeaLocation("Great Barrier Reef", true, 5000, 300));
        locations.add(new SeaLocation("Port Royal Jamaica", false, 50, 10));
        locations.add(new SeaLocation("Cleopatra's Palace", true, 20, 50));

        // System.out.println(locations);





        List<SeaLocation> deepLocations = locations.stream()
                .filter(seaLocation -> seaLocation.depth > 300)
                .collect(Collectors.toList());

//        List<String> shortNames = names.stream()
//                .filter(s -> s.length() == 4)
//                .collect(Collectors.toList());

        System.out.println("Locations where depth is greater than 300:");
        System.out.println(deepLocations);

        //Take it further
        //SELECT name FROM locations WHERE numFish >= 30 AND hasShipWreck = true

        List<String> locationNames = locations.stream()
                .filter(seaLocation -> seaLocation.numFish >= 30 && seaLocation.hasShipwreck == true )
                .map(Object::toString)
                .collect(Collectors.toList());

        System.out.println("Names of locations where numFish >= 30 and is shipwrecked");
        System.out.println(locationNames);

        //Stretcher!
        //SELECT depth FROM locations WHERE hasShipwreck = true
        //Then find the average depth of locations with a shipwreck

        double average = locations.stream()
                .filter(seaLocation -> seaLocation.hasShipwreck == true)
                .mapToDouble(seaLocation -> seaLocation.depth)
                .average()
                .getAsDouble();


        System.out.println("Average depth of locations where there is a shipwreck:");
        System.out.println(average);


    }
}