package com.theironyard;

import java.util.Collections;
import java.util.HashSet;


public class HanoiTowerRod extends HashSet<Integer> {

    public HanoiTowerRod () {
        super();
    }

    @Override
    public boolean add (Integer e) {
        return super.add(e);
    }

    public Integer findLargestValue () {
        return Collections.max(this);
    }

    public Integer removeTop () {
        Integer smallest = findSmallestValue();

        if (this.size() == 0) {
            return null;
        }
        super.remove(findSmallestValue());
        return smallest;
    }

    public Integer findSmallestValue () {
        Integer response = Integer.MAX_VALUE;

        for (Integer i : this) {
            if (i < response) {
                response = i;
            }
        }
        return response;
    }
}
