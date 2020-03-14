import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class Processor {
    private ArrayList<WorkOrder> array = new ArrayList<>();

    public void processWorkOrders() throws IOException {
        moveIt();
        readIt();
    }

    private void moveIt() throws IOException {
        if (array != null) {
            for (WorkOrder assignment : array) {
                if (!assignment.getStatus().equals(Status.DONE)) {
                    if (assignment.getStatus().equals(Status.INITIAL)){
                        assignment.setStatus(Status.ASSIGNED);
                    } else if (assignment.getStatus().equals(Status.ASSIGNED)){
                        assignment.setStatus(Status.IN_PROGRESS);
                    } else if (assignment.getStatus().equals(Status.IN_PROGRESS)){
                        assignment.setStatus(Status.DONE);
                    }
                }

                FileWriter assignmentFile = new FileWriter(assignment.getId() + ".json",false );
                assignmentFile.write(assignment.toString()+"\n");
                assignmentFile.close();
            }
        }

        array.clear();
    }

    private void readIt() throws IOException {
        File file = new File(".");
        for (File f : file.listFiles()) {
            if (f.getName().endsWith(".json")) {
                ObjectMapper map = new ObjectMapper();

                WorkOrder assignment = map.readValue(f, WorkOrder.class);

                if (!assignment.isIgnored()) {
                    array.add(assignment);
                    if (assignment.getStatus().equals(Status.DONE)) {
                        assignment.setIgnored(true);
                    }
                }
            }
        }

        System.out.println(array);
    }

    public static void main(String args[]) throws IOException {
        Processor processor = new Processor();

        while (processor != null) {
            processor.processWorkOrders();
            try {
                Thread.sleep(5000l);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}