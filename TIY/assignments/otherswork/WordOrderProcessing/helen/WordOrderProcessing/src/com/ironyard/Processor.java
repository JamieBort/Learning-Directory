package com.ironyard;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.*;

public class Processor {

    //start by creating a new Hashmap called workOrderMap
    Map<Status, Set<WorkOrder>> workOrderMap = new HashMap<>();

    //creating a constructor for the map
    public Map<Status, Set<WorkOrder>> getWorkOrderMap() {
        return workOrderMap;
    }

    //setting default statuses for the ENUMS, creating a new hashSet because we want all of the work orders in initial to move to Assigned, and so and so forth
    public void setWorkOrderMapDefalt(){
        workOrderMap.put(Status.INITIAL, new HashSet<>());
        workOrderMap.put(Status.ASSIGNED, new HashSet<>());
        workOrderMap.put(Status.IN_PROGRESS, new HashSet<>());
        workOrderMap.put(Status.DONE, new HashSet<>());
    }


    //this is where we create the new instance of processor and call the method setWorkOrderMapDefault
    public static void main(String args[]) {
        Processor processor = new Processor();

        processor.setWorkOrderMapDefalt();

        processor.processWorkOrders();
    }

    //see if the methods run. Make sure to put read it in front of moveIt because there will be nothing to move if it hasn't been read yet
    public void processWorkOrders() {
        try {
            readIt();
            moveIt();
            Thread.sleep(10000L);
            processWorkOrders();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    private void moveIt() {
        // move work orders in map from one state to another
        File currentFile = new File(".");
        File files[] = currentFile.listFiles();

        //create new instances of WorkOrder using the ENUMS
        Set<WorkOrder> workOrderSetInitial = workOrderMap.get(Status.INITIAL);
        Set<WorkOrder> workOrderSetAssigned = workOrderMap.get(Status.ASSIGNED);
        Set<WorkOrder> workOrderSetInProgress = workOrderMap.get(Status.IN_PROGRESS);
        Set<WorkOrder> workOrderSetSetDone = workOrderMap.get(Status.DONE);

        //use the defaults
        setWorkOrderMapDefalt();

        //this is where we move the work orders from one status to another
        workOrderMap.put(Status.ASSIGNED, workOrderSetInitial);
        workOrderMap.put(Status.IN_PROGRESS, workOrderSetAssigned);
        workOrderMap.put(Status.DONE, workOrderSetInProgress);

        //print the map
        System.out.println(workOrderMap);
    }


    private void readIt() {
        // read the json files into WorkOrders and put in map
        File currentFile = new File(".");
        File files[] = currentFile.listFiles();

        for (File f : files) {
            if (f.getName().endsWith(".json")) {
                ObjectMapper mapper = new ObjectMapper();
                try {
                    WorkOrder order = mapper.readValue(new File(f.getName()), WorkOrder.class);
                    Status orderStatus = order.getStatus();

                    putWorkOrderInMap(orderStatus, order);

                    f.delete();
                    System.out.println(workOrderMap);

                } catch (IOException e) {
                    e.printStackTrace();
                }

            }
        }

    }

    //this method is actually taking the order and putting it in the map
    private void putWorkOrderInMap(Status status, WorkOrder workOrder) {
        Set<WorkOrder> workOrderSet = workOrderMap.get(status);
        workOrderSet.add(workOrder);
        workOrderMap.put(status, workOrderSet);
    }

}




