package com.theironyard.java.telematicsproject;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;


public class TelematicsService {
    //this is mostly provided by the assignment
    public static void report(VehicleInfo car) throws IOException {
        ObjectMapper map = new ObjectMapper();
        long vin = car.getVIN();
        map.writeValue(new File(vin + ".json"), car);
        String json = map.writeValueAsString(car);
        System.out.println(json);
    }

    //this is mostly provided by the assignment
    public static ArrayList<VehicleInfo> convertJSONToObj() throws IOException {
        File file = new File(".");
        ArrayList<VehicleInfo> array = new ArrayList<>();
        for (File f : file.listFiles()) {
            if (f.getName().endsWith(".json")) {
                ObjectMapper map = new ObjectMapper();

                VehicleInfo car = map.readValue(f, VehicleInfo.class);

                array.add(car);
            }
        }
        return array;
    }

    //the html is mostly provided by the assignment
    public static void updateDashboard(ArrayList<VehicleInfo> vehicles) throws IOException {

        double avgOdometer = 0;
        double avgConsumption = 0;
        double avgLastOilChng = 0;
        double avgMPG = 0;
        double avgEngineSize = 0;
        String vehicleHtml = "";

        String fileName = "dashboard.html";
        File file = new File(fileName);

        for (VehicleInfo car : vehicles) {
            avgOdometer += car.getOdometer();
            avgConsumption += car.getConsumption();
            avgLastOilChng += car.getLastOilChng();
            avgMPG += car.getMilesPerGallon();
            avgEngineSize += car.getEngineSize();
            vehicleHtml += "    <tr>\n" +
                    "        <th>VIN</th><th>Odometer (miles)</th><th>Consumption (gallons)</th><th>Last Oil Change</th><th>MPG</th><th>Engine Size (liters)</th>\n" +
                    "    </tr>\n" +
                    "    <tr>\n" +
                    "        <td align=\"center\">" + car.getVIN() + "</td><td align=\"center\">" + car.getOdometer() + "</td><td align=\"center\">" + car.getConsumption() + "</td><td align=\"center\">" + car.getLastOilChng() + "</td><td align=\"center\">" + String.format("%.2f", car.getMilesPerGallon()) + "</td><td align=\"center\">" + String.format("%.2f", car.getEngineSize()) + "</td>\n" +
                    "    </tr>\n";
        }

        avgOdometer /= vehicles.size();
        avgConsumption /= vehicles.size();
        avgLastOilChng /= vehicles.size();
        avgMPG /= vehicles.size();
        avgEngineSize /= vehicles.size();

        String mainHtml = "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Vehicle Telematics Dashboard</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "<h1 align=\"center\">Averages for " + vehicles.size() + " vehicles</h1>\n" +
                "<table align=\"center\">\n" +
                "    <tr>\n" +
                "        <th>Odometer (miles) |</th>" +
                "        <th>Consumption (gallons) |</th>" +
                "        <th>Last Oil Change |</th>" +
                "        <th>Miles Per Gallon |</th>" +
                "        <th>Engine Size (liters)</th>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "        <td align=\"center\">" + String.format("%.2f", avgOdometer) + "</td>" +
                "        <td align=\"center\">" + String.format("%.2f", avgConsumption) + "</td>" +
                "        <td align=\"center\">" + String.format("%.2f", avgLastOilChng) + "</td>" +
                "        <td align=\"center\">" + String.format("%.2f", avgMPG) + "</td>" +
                "        <td align=\"center\">" + String.format("%.2f", avgEngineSize) + "</td>\n" +
                "    </tr>\n" +
                "</table>\n" +
                "<br>" +
                "<h1 align=\"center\">History</h1>\n";

        mainHtml +=
                "<table align=\"center\" border=\"1\">\n" + vehicleHtml +
                        "</table>\n" + "</body>\n" + "</html>";

        try {
            FileOutputStream stream = new FileOutputStream(file, false);
            byte[] myBytes = mainHtml.getBytes();
            stream.write(myBytes);
            stream.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}