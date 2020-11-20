package io.javabrains.springbootquickstart.courseapi.topic;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TopicController {

    @RequestMapping("/topics")
    public String getAllTopics(){
        return "All Topics";
    }
    
}
