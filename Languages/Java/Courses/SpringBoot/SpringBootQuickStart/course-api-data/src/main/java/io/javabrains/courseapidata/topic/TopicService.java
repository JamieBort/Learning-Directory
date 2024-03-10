package io.javabrains.courseapidata.topic;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;

    // modified in video 29
    public List<Topic> getAllTopics() { // GET request
        List<Topic> topics = new ArrayList<>();
        topicRepository.findAll().forEach(topics::add); // look into method references. free resource mentioned in video
                                                        // 29 Java 8 Lambda Basics on Java Brains at javabrains.io
        return topics;
        // return topics;
    }

    // modified in video 29
    public Topic getTopic(String id) {
        // in the tutorial it was `return topicRepository.findOne(id);`. 
        // findOne() is no longer available. It is replaced by findById().
        // findById() requires the return type to be `Optional<Topic>` rather than `Topic`.
        return topicRepository.findById(id).get();
        // return topics.stream().filter(t -> t.getId().equals(id)).findFirst().get();
    }

    // modified in video 29
    public void addTopic(Topic topic) {
        topicRepository.save(topic);
        // topics.add(topic);
    }

    // modified in video 29
    public void updateTopic(String id, Topic topic) {
        topicRepository.save(topic);
        // for(int i=0; i<topics.size(); i++){
        //     Topic t = topics.get(i);
        //     if(t.getId().equals(id)){
        //         topics.set(i, topic);
        //         return;
        //     }
        // }
    }

    // modified in video 29
    public void deleteTopic(String id) {
        topicRepository.deleteById(id);
        // topics.removeIf(t -> t.getId().equals(id));
    }

}
