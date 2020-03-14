package com.company.yourfirstspringapp;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BasicController {
//    Have it serve up home.html when the path is / (root path). When /splash is requested, serve up splash.html. Refer back to the lecture if you aren't sure how to get started.
    @GetMapping("/")
public String toHome(Model model) {
        return "home";
    }

    @GetMapping("/splash")
    public String toSplash(Model model) {
        return "splash";
    }

//    Add one more HTML file to templates: error.html. On this page, just explain that some kind of error occurred and apologize to the imaginary user. Restart your app, and navigate to any "bad" route (i.e. anything you haven't mapped like / and /splash) and you should see the error page you created.
    @GetMapping("/error")
    public String toError(Model model) {
        return "error";
    }
}
