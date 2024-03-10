package com.imladyartist;


import org.apache.http.HttpResponse;
import org.apache.http.client.*;
import org.apache.http.client.methods.HttpGet;

import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.HttpClientBuilder;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.*;

/**
 * user_id ID of the user whose message history you want to return.
 */
public class MessagesRecieving {
    public static int msgCount = 0;

    public void getHistory(String user_id, String access_token) throws IOException,
            JSONException {

        //messages.get method

        String url = "https://api.vk.com/method/messages.getHistory?"
                + "&user_id=" + user_id
                + "&count=" + String.valueOf(100)
                + "&rev=" + String.valueOf(1)
                + "&access_token=" + access_token
                + "&v=" + TokenReq.API_VERSION;
        HttpClient client = HttpClientBuilder.create().build();
        HttpGet get = new HttpGet(url);
        HttpResponse response = client.execute(get);

        String result = new BasicResponseHandler().handleResponse(response);
        System.out.println(result);

        //putting result to JSON Object and parse message body
        JSONObject JSONmessages = new JSONObject(result);
        JSONObject JSONresponse = JSONmessages.getJSONObject("response");
        JSONArray items = JSONresponse.getJSONArray("items");

        File file = new File("/Users/imladyartist/", "VKmessages" + user_id + ".txt");
        FileWriter writer = new FileWriter(file, false);

        //write lines to txt file
        for (int i = 0; i < items.length(); i++) {
            JSONObject item = (JSONObject) items.get(i);
            String line = item.getString("body");
            writer.write(line + "\n");
            msgCount++;
        }
        writer.close();

    }
}
