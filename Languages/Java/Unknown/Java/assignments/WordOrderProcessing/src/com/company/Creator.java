package com.company;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class Creator {

    public void createWorkOrders() {

        //create a new instance of work order and scanner
        WorkOrder workOrder = new WorkOrder();
        Scanner scanner = new Scanner(System.in);

        //status is set to initial so it can move forward in processor
        workOrder.setStatus(Status.INITIAL);

        //Ask the user to enter id.
        System.out.println("Please enter an ID: ");
        workOrder.setId(scanner.nextInt());

//Ask the user to enter name.
        System.out.println("Please enter your name: ");
        workOrder.setSenderName(scanner.next());

        //Ask the user to enter description.
        System.out.println("Please enter the description: ");
        workOrder.setDescription(scanner.next());

        //Creat a new instance of object mapper.
        ObjectMapper mapper = new ObjectMapper();

//         Create a file with the id + json in the title.
        File file = new File(workOrder.getId() + ".json");

        try {
            mapper.writeValue(file, workOrder);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    //While loop to loop over the work orders.
    public void loopOverWorkOrders() {
        try {
            while (true) {
                createWorkOrders();
                Thread.sleep(5003l);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
