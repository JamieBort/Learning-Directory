package com.herbie.common;

public class Event {
    private String name;
    private String action;

    public Event() {}

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAction() {
        return this.action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    @Override
    public String toString() {
        return "Event{" +
                "name='" + name + '\'' +
                ", action='" + action + '\'' +
                '}';
    }
}
