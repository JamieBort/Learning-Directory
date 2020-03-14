package com.example.restapis;

import org.springframework.boot.SpringApplication;
        import org.springframework.boot.autoconfigure.SpringBootApplication;
        import org.springframework.context.annotation.Bean;
        import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class Application {

    static final String API_URL = "http://gturnquist-quoters.cfapps.io/api/random";

    public static void main(String args[]) {
        SpringApplication.run(Application.class);
    }

    @Bean
    public String run () {
        RestTemplate restTemplate = new RestTemplate();
        RandomQuoteResponse quote =
                restTemplate.getForObject(API_URL, RandomQuoteResponse.class);
        System.out.println("\n******\n");
        System.out.println(quote);
        System.out.println("\n******\n");
        return "done";
    }
}
