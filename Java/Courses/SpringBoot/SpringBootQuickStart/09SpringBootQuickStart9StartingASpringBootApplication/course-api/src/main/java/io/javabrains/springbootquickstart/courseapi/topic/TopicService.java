package io.javabrains.springbootquickstart.courseapi.topic;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TopicService {
    private List<Topic> topics= Arrays.asList(
            new Topic("spring", "spring framework", "spring framework"),
            new Topic("java", "core java", "core java description"),
            new Topic("javascript", "JavaScript", "javascript description")
        );

        public List<Topic> getAllTopics(){
            return topics;
        }
    
}
