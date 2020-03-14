package com.company;

public class BaseClass implements AudioPlayer {

    int volume;

    public BaseClass() {
        int volume = 0;
    }

    ;

    public void PlaySound() {
//        System.out.println("ajkdl;fla");
//        volume++;
//        System.out.println(volume);


        System.out.println(++volume);
    }
    ;
    public void RecordSound(){
        System.out.println("noise");
    };

    public void EditSound(){
        System.out.println("bla bla");
    };

}
