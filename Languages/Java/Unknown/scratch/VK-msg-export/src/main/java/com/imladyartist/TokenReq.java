package com.imladyartist;

import java.io.IOException;

/**
 * Request a token
 *
 */
public final class TokenReq {

     static final String API_VERSION = "5.74";

    private static final String AUTH_URL = "https://oauth.vk.com/authorize"
            + "?client_id={APP_ID}"
            + "&scope={PERMISSIONS}"
            + "&redirect_uri={REDIRECT_URI}"
            + "&response_type=token"
            + "&v={API_VERSION}";

        String reqUrl = AUTH_URL
                .replace("{APP_ID}", "6457262") //vkchat app id
                .replace("{PERMISSIONS}", "messages")
                .replace("{REDIRECT_URI}", "https://oauth.vk.com/blank.html")
                .replace("{API_VERSION}", API_VERSION);




    void request() throws IOException{
        Runtime.getRuntime().exec("open "
            + reqUrl);
    }
}
