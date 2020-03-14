import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class Creator {
    public void createWorkOrders() throws IOException {
        // read input, create work orders and write as json files

        Scanner input = new Scanner(System.in);
        ObjectMapper map = new ObjectMapper();
        WorkOrder assignment = new WorkOrder();
        int id = getID();

        assignment.setId(id);
        System.out.print("Enter your name: ");
        assignment.setSenderName(input.nextLine());
        System.out.print("Enter the job description: ");
        assignment.setDescription(input.nextLine());
        assignment.setStatus(Status.INITIAL);

        map.writeValue(new File(id + ".json"), assignment);
        String json = map.writeValueAsString(assignment);
        System.out.println(json);

    }

    public static int getID() {
        File file = new File(".");
        int idCount = 0;
        for (File f : file.listFiles()) {
            if (f.getName().endsWith(".json")) {
                idCount++;
            }
        }
        return idCount;
    }

    public static void main(String args[]) throws IOException {

        Creator creator = new Creator();
        creator.createWorkOrders();
    }
}