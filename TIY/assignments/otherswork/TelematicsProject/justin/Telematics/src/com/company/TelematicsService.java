package com.company;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class TelematicsService {

    List<VehicleInfo> vehicles = new ArrayList<>(); // putting this outside the methods to initialize it

    public static void report(VehicleInfo vehicleInfo) throws IOException { // need to understand why throwing IO exception here works

        ObjectMapper mapper = new ObjectMapper();

        // get the VIN from Vehicle Info
        int VIN = vehicleInfo.getVIN();

        // write new File based on VIN
        mapper.writeValue(new File(VIN + ".json"), vehicleInfo); // this line, I had to look up online

        // test to make sure json is formatted properly
        String json = mapper.writeValueAsString(vehicleInfo);
        System.out.println(json);
    }

    ;

    public static void convertToJava() throws IOException {
        List<VehicleInfo> vehicles = new ArrayList<>();
        File file = new File(".");
        for (File f : file.listFiles()) {
            if (f.getName().endsWith(".json")) {
                // Now you have a File object named "f".
                // You can use this to create a new instance of Scanner
                ObjectMapper mapper = new ObjectMapper();
                VehicleInfo vi = mapper.readValue(f, VehicleInfo.class);
                //System.out.println(vi);
                vehicles.add(vi);
            }
        }


        // FOR NOW, I MOVED THE UPDATEDASHBOARD() METHOD TO WITHIN THE CONVERTTOJAVA() METHOD

        double avgOdometer = 0;
        double avgConsumption = 0;
        double avgLastOilChange = 0;
        double avgEngineSize = 0;
        String individualHTML = "";
        String avgHTML = "";
        String finalHTML = "";

        for (VehicleInfo vehicle : vehicles) {
            avgOdometer += vehicle.getOdometer();
            avgConsumption += vehicle.getConsumption();
            avgLastOilChange += vehicle.getOdometerSinceLastOilChange();
            avgEngineSize += vehicle.getEngineSizeInLiters();
        }

        avgOdometer = avgOdometer / vehicles.size();
        avgConsumption = avgConsumption / vehicles.size();
        avgLastOilChange = avgLastOilChange / vehicles.size();
        avgEngineSize = avgEngineSize / vehicles.size();


        System.out.println(vehicles);

//        System.out.println("Averages:");
//        System.out.println(avgOdometer);
//        System.out.println(avgConsumption);
//        System.out.println(avgLastOilChange);
//        System.out.println(avgEngineSize);

        avgHTML +=
                "<html>" +
                        "<title>Vehicle Telematics Dashboard</title> " +
                        "<body> " +
                        "<h1 align=\"center\">Averages for # vehicles</h1> " +
                        "<table align=\"center\"> " +
                        "<tr> " +
                        "<th>Odometer (miles) |</th>" +
                        "<th>Consumption (gallons) |</th>" +
                        "<th>Last Oil Change |</th>" +
                        "<th>Engine Size (liters)</th>" +
                        "</tr> " +
                        "<tr> " +
                        // these are the actual values I need to change
                        "<td align=\"center\">AverageODOMETER</td>" +
                        "<td align=\"center\">AverageCONSUMPTION</td>" +
                        "<td align=\"center\">AverageLASTOILCHANGE</td align=\"center\">" +
                        "<td align=\"center\">AverageENGINESIZE</td> " +
                        "</tr> " +
                        "</table> ";


        avgHTML = avgHTML.replace("AverageODOMETER", String.valueOf(avgOdometer));
        avgHTML = avgHTML.replace("AverageCONSUMPTION", String.valueOf(avgConsumption));
        avgHTML = avgHTML.replace("AverageLASTOILCHANGE", String.valueOf(avgLastOilChange));
        avgHTML = avgHTML.replace("AverageENGINESIZE", String.valueOf(avgEngineSize));


        individualHTML +=
                "<h1 align=\"center\">History</h1> " +
                        "<table align=\"center\" border=\"1\"> " +
                        "<tr> " +
                        "<th>VIN</th>" +
                        "<th>Odometer (miles)</th>" +
                        "<th>Consumption (gallons)</th>" +
                        "<th>Last Oil Change</th>" +
                        "<th>Engine Size (liters)</th> " +
                        "</tr> ";


                        // actual values I need to change
        for (VehicleInfo vehicle: vehicles) {
            individualHTML +=
                        "<tr> " +
                            "<td align=\"center\">" + String.valueOf(vehicle.getVIN()) + "</td>" +
                            "<td align=\"center\">" + String.valueOf(vehicle.getOdometer()) + "</td>" +
                            "<td align=\"center\">" + String.valueOf(vehicle.getConsumption()) + "</td>" +
                            "<td align=\"center\">" + String.valueOf(vehicle.getOdometerSinceLastOilChange()) + "</td>" +
                            "<td align=\"center\">" + String.valueOf(vehicle.getEngineSizeInLiters()) + "</td>" +
                            "</tr>";

        }

        individualHTML += "</table> " +
                        "</body> " +
                        "</html>";

        for (VehicleInfo vehicle : vehicles) {
            individualHTML = individualHTML.replace("EachVIN", String.valueOf(vehicle.getVIN()));
            individualHTML = individualHTML.replace("EachODOMETER", String.valueOf(vehicle.getOdometer()));
            individualHTML = individualHTML.replace("EachCONSUMPTION", String.valueOf(vehicle.getConsumption()));
            individualHTML = individualHTML.replace("EachLASTOILCHANGE", String.valueOf(vehicle.getOdometerSinceLastOilChange()));
            individualHTML = individualHTML.replace("EachENGINESIZE", String.valueOf(vehicle.getEngineSizeInLiters()));
        }

        finalHTML = avgHTML + individualHTML;

        File finalFile = new File("dashboard.html");
        FileWriter filewriter = new FileWriter(finalFile);
        filewriter.write(finalHTML);
        filewriter.flush();
        filewriter.close();

    }


    // }


}
