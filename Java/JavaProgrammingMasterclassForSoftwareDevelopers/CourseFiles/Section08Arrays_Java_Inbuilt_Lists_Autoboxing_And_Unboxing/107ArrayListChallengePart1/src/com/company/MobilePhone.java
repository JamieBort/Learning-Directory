package com.company;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class MobilePhone {

    ArrayList<Contacts> arrayList;

    public MobilePhone(ArrayList<Contacts> arrayList) {
        this.arrayList = arrayList;
        arrayList.add(new Contacts("Jim", "Elm Street", "jim@jimbob.com", "1234567890"));
        arrayList.add(new Contacts("Pam", "Oak Street", "pam@pamsplace.com", "0987654321"));
        arrayList.add(new Contacts("Erin", "Peach Street", "Erin@erin.com", "543212345"));

    }

    public void randomMethod(){
        for (int i = 0; i < arrayList.size(); i++) {
            arrayList.get(i).printContact();
        }
    }

}
