package io.javabrains.courseapidata.topic;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TopicService {
    private List<Topic> topics = Arrays.asList(new Topic("spring", "Spring Framework", "Spring Framework Description"),
            new Topic("java", "Java Framework", "Java Framework Description"),
            new Topic("javascript", "JavaScript Framework", "JavaScript Framework Description"));

    public List<Topic> getAllTopics() {
        return topics;
    }

}
