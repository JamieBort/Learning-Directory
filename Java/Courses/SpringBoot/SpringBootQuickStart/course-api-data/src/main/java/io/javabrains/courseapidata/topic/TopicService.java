package io.javabrains.courseapidata.topic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TopicService {
    private List<Topic> topics = new ArrayList<>(
            Arrays.asList(
                new Topic("spring", "Spring Framework", "Spring Framework Description"),
                new Topic("java", "Java Framework", "Java Framework Description"),
                new Topic("javascript", "JavaScript Framework", "JavaScript Framework Description")
            )
        );

    // private List<Topic> topics = Arrays.asList(new Topic("spring", "Spring
    // Framework", "Spring Framework Description"),
    // new Topic("java", "Java Framework", "Java Framework Description"),
    // new Topic("javascript", "JavaScript Framework", "JavaScript Framework
    // Description"));

    public List<Topic> getAllTopics() {
        return topics;
    }

    public Topic getTopic(String id) {
        return topics.stream().filter(t -> t.getId().equals(id)).findFirst().get();
    }

    public void addTopic(Topic topic) {
        topics.add(topic);
    }

}
