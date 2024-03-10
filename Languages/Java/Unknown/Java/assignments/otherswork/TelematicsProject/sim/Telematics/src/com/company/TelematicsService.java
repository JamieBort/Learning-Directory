package com.company;

//import com.fasterxml.jackson.databind.ObjectMapper;
import  com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class TelematicsService {

    void report(Vehicle vehicleInfo) {

        ObjectMapper mapper = new ObjectMapper();
        try {
            String json = mapper.writeValueAsString(vehicleInfo);
            File file = new File((vehicleInfo.getVin()) + ".json");
            FileWriter fileWriter = new FileWriter(file);
            fileWriter.write(json);
            fileWriter.close();

        }

        catch (IOException ex) {
            ex.printStackTrace();
        }

        File file = new File(".");
        List<Vehicle> vehicleList = new ArrayList<>();
        for (File f: file.listFiles()) {
            if(f.getName().endsWith(".json")) {
                ObjectMapper newMapper = new ObjectMapper();
                try {
                    Scanner scanner = new Scanner(f);
                    String fileType = "";
                    while(scanner.hasNextLine()) {
                        fileType += scanner.nextLine();
                    }

                    Vehicle info = newMapper.readValue(fileType, Vehicle.class);
                    vehicleList.add(info);
                    scanner.close();
                }
                catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }


        List<Double> vehicleAverages = new ArrayList<>();
        Double sumOdometer = 0.0;
        Double avgOdometer;
        for (Vehicle vehicle: vehicleList) {
            sumOdometer += vehicle.getOdometer();
        }
        avgOdometer = sumOdometer / vehicleList.size();
        vehicleAverages.add(avgOdometer);


        Double sumGallonsOfGas = 0.0;
        Double avgGallonsOfGas;
        for (Vehicle vehicle: vehicleList) {
            sumGallonsOfGas += vehicle.getGalGasConsumed();
        }
        avgGallonsOfGas = sumGallonsOfGas / vehicleList.size();
        vehicleAverages.add(avgGallonsOfGas);


        Double sumOilOdometer = 0.0;
        Double avgOilOdometer;
        for (Vehicle vehicle: vehicleList) {
            sumOilOdometer += vehicle.getLastOilOdometer();
        }
        avgOilOdometer = sumOilOdometer / vehicleList.size();
        vehicleAverages.add(avgOilOdometer);


        Double sumEngineSize = 0.0;
        Double avgEngineSize;
        for (Vehicle vehicle: vehicleList) {
            sumEngineSize += vehicle.getEngineSize();
        }
        avgEngineSize = sumEngineSize / vehicleList.size();
        vehicleAverages.add(avgEngineSize);

        System.out.println("Averages: " + vehicleAverages);


        String output = "";

        class HTMLTemplate {
            public static final String header =
                    "<html>\n" +
                            "<head lang=\"en\">" +
                            "    <meta charset=\"utf-8\">" +
                            "    <title>Vehicle Telematics Dashboard</title>"+
                            "</head>" +
                            "<body>" +
                            "<table align=\"center\">" +
                            "    <tr>" +
                            "        <th>VIN</th>" +
                            "        <th>Odometer (miles)</th>" +
                            "        <th>Consumption (gallons)</th>" +
                            "        <th>Last Oil Change</th>" +
                            "        <th>Engine Size</th>" +
                            "    </tr>";

            public static final String average =
                    "<tr>" +
                            "        <td><b>Averages</b></td>" +
                            "        <td>avgOdometer</td>" +
                            "        <td>avgGas</td>" +
                            "        <td>avgOil</td>" +
                            "        <td>avgEngine</td>" +
                            "    </tr>";

            public static final String lastInput =
                    "<tr>" +
                            "        <td>vin</td>" +
                            "        <td>odometer</td>" +
                            "        <td>gas</td>" +
                            "        <td>oil</td>" +
                            "        <td>engine</td>" +
                            "    </tr>";

            public static final String footer =
                    "</table>" +
                            "\n" +
                            "</body>\n" +
                            "</html>";
        }

        output += HTMLTemplate.header;



        String averages = HTMLTemplate.average;

        averages = averages.replace("avgOdometer", vehicleAverages.get(0).toString());
        averages = averages.replace("avgGas", vehicleAverages.get(1).toString());
        averages = averages.replace("avgOil", vehicleAverages.get(2).toString());
        averages = averages.replace("avgEngine", vehicleAverages.get(3).toString());
        output += averages;

        for (Vehicle vehicle: vehicleList) {
            String lastRow = HTMLTemplate.lastInput;
            lastRow = lastRow.replace("vin", vehicle.getVin());
            lastRow = lastRow.replace("odometer", vehicle.getOdometer().toString());
            lastRow = lastRow.replace("gas", vehicle.getGalGasConsumed().toString());
            lastRow = lastRow.replace("oil", vehicle.getLastOilOdometer().toString());
            lastRow = lastRow.replace("engine", vehicle.getEngineSize().toString());
            output += lastRow;
        }
        output += HTMLTemplate.footer;

        try {
            File outPutFile = new File("dashboard.html");
            FileWriter fileWriter = null;
            fileWriter = new FileWriter(outPutFile);
            fileWriter.write(output);
            fileWriter.flush();
            fileWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}