import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.*;

import java.io.*;


public class TelematicsService {


    public static void report(VehicleInfo vehicleInfo) {

//        String vin = String.valueOf(vehicleInfo.VIN);
//

        try {


            ObjectMapper mapper = new ObjectMapper();
            File carFile = new File(vehicleInfo.getVIN() + ".json");
            String json = mapper.writeValueAsString(vehicleInfo);
//            System.out.println (String.format ("Hey dude so your VIN is %s, that's great! NOW you gotta make a file that's a .json file and return an html template dummy.", vehicleInfo.VIN));
            //this is working

            //new code
            FileWriter fileWriter;
            fileWriter = new FileWriter(carFile);
            fileWriter.write(json);
            fileWriter.close();


            List<VehicleInfo> jsonVehicles = new ArrayList<>();

            File file = new File(".");

            for (File f : file.listFiles()) {

                if (f.getName().endsWith(".json")) {
                    // Now you have a File object named "f".
                    // You can use this to create a new instance of Scanner

                    VehicleInfo vi = mapper.readValue(json, VehicleInfo.class);
                    System.out.println("Json information is " + f.getName() + String.valueOf(vi));

                    jsonVehicles.add(vi);


                    for (VehicleInfo vinfo : jsonVehicles) {

                        List<Double> vehicleAverages = new ArrayList<> ();
                    Double odometerValue = 0.0;
                    Double consumptionValue = 0.0;
                    Double lastReadingValue = 0.0;
                    Double engineSizeValue = 0.0;



                        int total = jsonVehicles.size ();
                        Double avgOdometer = odometerValue / total;
                        Double avgConsumption = consumptionValue / total;
                        Double avgLastReading = lastReadingValue / total;
                        Double avgEngineSize = engineSizeValue / total;
                        vehicleAverages.add (avgOdometer);
                        vehicleAverages.add (avgConsumption);
                        vehicleAverages.add (avgLastReading);
                        vehicleAverages.add (avgEngineSize);
                        System.out.println (vehicleAverages);
                    }


                    int totalCars = jsonVehicles.size();
                    String html = "";
                    String topHtml = "<html>\n" +
                            "<title>Vehicle Telematics Dashboard</title>\n" +
                            "<body>\n" +
                            "<h1 align=\"center\">Averages for" +
                            " " +
                            totalCars + " " +
                            "vehicles</h1>\n" +
                            "<table align=\"center\">\n" +
                            "    <tr>\n" +
                            "        <th>Odometer (miles) |</th><th>Consumption (gallons) |</th><th>Last Oil Change |</th><th>Engine Size (liters)</th>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td align=\"center\">#</td><td align=\"center\">#</td><td align=\"center\">#</td><td align=\"center\">#</td>\n" +
                            "    </tr>\n" +
                            "</table>\n" +
                            "<h1 align=\"center\">History</h1>\n" +
                            "<table align=\"center\" border=\"1\">\n" +
                            "    <tr>\n" +
                            "        <th>VIN</th><th>Odometer (miles)</th><th>Consumption (gallons)</th><th>Last Oil Change</th><th>Engine Size (liters)</th>\n" +
                            "    </tr>";

                    html += topHtml;


                    for (VehicleInfo vehicle : jsonVehicles) {
                        String vin = String.format("%.5s", vehicle.getVIN());
                        String odometer = String.format("%.5s", vi.getOdometer());
                        String consumption = String.format("%.5s", vi.getConsumption());
                        String lastReading = String.format("%.5s", vehicle.getLastReading());
                        String liters = String.format("%.5s", vehicle.getEngineSize());

                        String vHTML = "<tr>\n" +
                                "        <td align=\"center\">" +
                                odometer +
                                "</td><td align=\"center\">" +
                                consumption +
                                "</td><td align=\"center\">" +
                                lastReading +
                                "</td><td align=\"center\">" +
                                liters +
                                "</td>\n" +
                                " </tr>\n";

                        Double odometerValue = vehicle.getOdometer();
                        Double consumptionValue = vehicle.getConsumption();
                        Double lastReadingValue = vehicle.getLastReading();
                        Double engineSizeValue = vehicle.getEngineSize();

                        html += vHTML;
                    }

                    String endHtml = "</table>\n" +
                            "</body>\n" +
                            "</html>";
                    html += endHtml;
                    try {

                        File htmlFile = new File("dashboard.html");
                        FileWriter fileWriterHTML = new FileWriter(htmlFile);
                        fileWriterHTML.write(html);
                        fileWriterHTML.flush();
                        fileWriterHTML.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }

                }
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        } catch (IOException g) {
            g.printStackTrace();
        }
    }
}

