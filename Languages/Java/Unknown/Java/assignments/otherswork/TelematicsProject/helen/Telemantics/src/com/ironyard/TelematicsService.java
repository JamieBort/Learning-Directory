package com.ironyard;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;

import com.fasterxml.jackson.databind.ObjectMapper;

public class TelematicsService {
    //Write the VehicleInfo to a file as json using the VIN as the name of the file and a "json" extension
    public static void report(VehicleInfo newVehicle) throws IOException {

        ObjectMapper mapper = new ObjectMapper();
        String vinNum = newVehicle.getVIN();
        mapper.writeValue(new File(vinNum + ".json"), newVehicle);
        String jsonString = mapper.writeValueAsString(newVehicle);
        System.out.println("Here is your vehicle info: " + jsonString);
    }

    //Find all the files that end with ".json" and convert back to a VehicleInfo object.
    public static ArrayList<VehicleInfo> convertJSONToObj() throws IOException {
        File file = new File(".");
        ArrayList<VehicleInfo> a = new ArrayList<>();
        for (File f : file.listFiles()) {
            if (f.getName().endsWith(".json")) {
                ObjectMapper mapper = new ObjectMapper();

                VehicleInfo viFromRepToObj = mapper.readValue(f, VehicleInfo.class);

                a.add(viFromRepToObj);
            }
        }
        return a;
    }

    //Update a dashboard.html
    public static void updateDashboard(ArrayList<VehicleInfo> vehicles) throws IOException {

        double avgOdometer = 0;
        double avgConsumption = 0;
        double avgOdReadingLastOilChange = 0;
        double avgEngineSize = 0;
        String vehicleHtml = "";

        String fileName = "dashboard.html";
        File file = new File(fileName);

        for (VehicleInfo v : vehicles) {
            avgOdometer += v.getOdometer();
            avgConsumption += v.getConsumption();
            avgOdReadingLastOilChange += v.getOdReadingLastOilChange();
            avgEngineSize += v.getEngineSize();
            vehicleHtml += "    <tr>\n" +
                    "        <th>VIN</th><th>Odometer (miles)</th><th>Consumption (gallons)</th><th>Last Oil Change</th><th>Engine Size (liters)</th>\n" +
                    "    </tr>\n" +
                    "    <tr>\n" +
                    "        <td align=\"center\">" + v.getVIN() + "</td><td align=\"center\">" + v.getOdometer() + "</td><td align=\"center\">" + v.getConsumption() + "</td><td align=\"center\">" + v.getOdReadingLastOilChange() + "</td><td align=\"center\">" + v.getEngineSize() + "</td>\n" +
                    "    </tr>\n";
        }

        avgOdometer /= vehicles.size();
        avgConsumption /= vehicles.size();
        avgOdReadingLastOilChange /= vehicles.size();
        avgEngineSize /= vehicles.size();

        String mainHtml = "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Vehicle Telematics Dashboard</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "<h1 align=\"center\">Averages for # vehicles</h1>\n" +
                "<table align=\"center\">\n" +
                "    <tr>\n" +
                "        <th>Odometer (miles) |</th>" +
                "        <th>Consumption (gallons) |</th>" +
                "        <th>Last Oil Change |</th>" +
                "        <th>Engine Size (liters)</th>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "        <td align=\"center\">"+avgOdometer+"</td>" +
                "        <td align=\"center\">"+avgConsumption+"</td>" +
                "        <td align=\"center\">"+avgOdReadingLastOilChange+"</td>" +
                "        <td align=\"center\">"+avgEngineSize+"</td>\n" +
                "    </tr>\n" +
                "</table>\n" +
                "<br>" +
                "<h1 align=\"center\">History</h1>\n";

        mainHtml +=
                "<table align=\"center\" border=\"1\">\n" + vehicleHtml  +
                "</table>\n" + "</body>\n" + "</html>";

        try {
            FileOutputStream stream = new FileOutputStream(file, false);
            byte[] myBytes = mainHtml.getBytes();
            stream.write(myBytes);
            stream.close();
        }
        catch(FileNotFoundException e) {
            e.printStackTrace();
        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }
}
