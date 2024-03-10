package com.imladyartist;

import org.json.JSONException;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * Vk chat messages exporter
 *
 */
public class App 
{
    public static void main( String[] args ) throws InterruptedException, IOException, JSONException
    {
        System.out.println( "Starting" );
        Thread.sleep(2000);

        //getting access_token
        new TokenReq().request();
        Thread.sleep(5000);

        //retrieving parameters from URL
        System.out.println("Enter user_id whose message history you want to return");
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String user_id = reader.readLine();

        System.out.println("Enter access_token from given URL");
        String access_token = reader.readLine();

        new MessagesRecieving().getHistory(user_id, access_token);
        System.out.println(MessagesRecieving.msgCount);
        reader.close();
    }
}
