package com.company;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Processor {

    //Create a new Hashmap called workOrderMap
    Map<Status, Set<WorkOrder>> workOrderMap = new HashMap<>();


    public Map<Status, Set<WorkOrder>> getWorkOrderMap() {
        return workOrderMap;
    }


    public void setWorkOrderMapDefalt() {
        workOrderMap.put(Status.INITIAL, new HashSet<>());
        workOrderMap.put(Status.ASSIGNED, new HashSet<>());
        workOrderMap.put(Status.IN_PROGRESS, new HashSet<>());
        workOrderMap.put(Status.DONE, new HashSet<>());
    }


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
        // Move work orders in map from one state to another
        File currentFile = new File(".");
        File files[] = currentFile.listFiles();

        //Create new instances of WorkOrder using the ENUMS
        Set<WorkOrder> workOrderSetInitial = workOrderMap.get(Status.INITIAL);
        Set<WorkOrder> workOrderSetAssigned = workOrderMap.get(Status.ASSIGNED);
        Set<WorkOrder> workOrderSetInProgress = workOrderMap.get(Status.IN_PROGRESS);
        Set<WorkOrder> workOrderSetSetDone = workOrderMap.get(Status.DONE);


        setWorkOrderMapDefalt();


        workOrderMap.put(Status.ASSIGNED, workOrderSetInitial);
        workOrderMap.put(Status.IN_PROGRESS, workOrderSetAssigned);
        workOrderMap.put(Status.DONE, workOrderSetInProgress);

        //print the map
        System.out.println(workOrderMap);
    }


    private void readIt() {
        // Read the json files into WorkOrders and put in map
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

    //This method takes the order and puts it in the map
    private void putWorkOrderInMap(Status status, WorkOrder workOrder) {
        Set<WorkOrder> workOrderSet = workOrderMap.get(status);
        workOrderSet.add(workOrder);
        workOrderMap.put(status, workOrderSet);
    }

}




