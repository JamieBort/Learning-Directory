package io.javabrains.courseapidata.topic;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TopicController {

    @Autowired
    private TopicService topicService;

    @RequestMapping("/topics") // The default request is GET.
    public List<Topic> getAllTopics(){
        return topicService.getAllTopics();
    }

}