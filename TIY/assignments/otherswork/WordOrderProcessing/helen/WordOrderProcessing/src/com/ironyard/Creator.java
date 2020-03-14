package com.ironyard;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Scanner;
import java.io.File;
import java.io.IOException;

public class Creator {

    public static void main(String args[]) {
        Creator creator = new Creator();
        creator.loopOverWorkOrders();
    }

    public void createWorkOrders() {

        //create a new instance of work order and scanner
        WorkOrder workOrder = new WorkOrder();
        Scanner scanner = new Scanner(System.in);

        //status is set to initial so it can move forward in processor
        workOrder.setStatus(Status.INITIAL);

        //asl user to enter id, name, and description
        System.out.println("Please enter an ID: ");
        workOrder.setId(scanner.nextInt());

        System.out.println("Please enter your name: ");
        workOrder.setSenderName(scanner.next());

        System.out.println("Please enter the description: ");
        workOrder.setDescription(scanner.next());

        //creating new instance of object mapper and creating a file with the id + json in the title
        ObjectMapper mapper = new ObjectMapper();

        File file = new File(workOrder.getId() + ".json");

        try {
            mapper.writeValue(file, workOrder);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    //Create a loop to continue to loop over the work orders
    public void loopOverWorkOrders() {
        try {
            while (true) {
                createWorkOrders();
                Thread.sleep(5003L);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
