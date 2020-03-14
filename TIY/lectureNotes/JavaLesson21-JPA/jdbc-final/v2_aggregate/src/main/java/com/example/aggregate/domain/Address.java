package com.example.aggregate.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "address")
public class Address {

    private int id;
    private String street;
    private String city;
    private String zip;
    private String state;
    //    Remove the personId variable, getter and setter.
//    private int personId;

    //    Added a Person person variable
    Person person;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    //    Generate getters and setters
    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }


    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    //    Remove the personId variable, getter and setter.
//    public int getPersonId() {
//        return personId;
//    }

//    public void setPersonId(int personId) {
//        this.personId = personId;
//    }


//    Remove all getters, setters, equals(), hashCode() and toString()
//    [did the instructions mean 'remove all @overrides equals(), hashCode() and toString()'?

//    @Override
//    public boolean equals(Object o) {
//        if (this == o)
//            return true;
//        if (o == null || getClass() != o.getClass())
//            return false;
//
//        Address address = (Address) o;
//
//        if (personId != address.personId)
//            return false;
//        if (street != null ? !street.equals(address.street) : address.street != null)
//            return false;
//        if (city != null ? !city.equals(address.city) : address.city != null)
//            return false;
//        if (zip != null ? !zip.equals(address.zip) : address.zip != null)
//            return false;
//        return state != null ? state.equals(address.state) : address.state == null;
//
//    }
//
//    @Override
//    public int hashCode() {
//        int result = street != null ? street.hashCode() : 0;
//        result = 31 * result + (city != null ? city.hashCode() : 0);
//        result = 31 * result + (zip != null ? zip.hashCode() : 0);
//        result = 31 * result + (state != null ? state.hashCode() : 0);
//        result = 31 * result + personId;
//        return result;
//    }
//
//    @Override
//    public String toString() {
//        return "Address{" +
//          "id=" + id +
//          ", street='" + street + '\'' +
//          ", city='" + city + '\'' +
//          ", zip='" + zip + '\'' +
//          ", state='" + state + '\'' +
//          ", personId=" + personId +
//          '}';
//    }

//    Generate equals() and hashCode() that only use the id variable

    @Override
    public int equals(int id) {
        return id;
    }

    @Override
    public int hashCode(int id) {
        return id;
    }

    //    Generate toString()
    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", street='" + street + '\'' +
                ", city='" + city + '\'' +
                ", zip='" + zip + '\'' +
                ", state='" + state + '\'' +
                ", personId=" + personId +
                ", person=" + (person == null ? "" : person.getId()) +
                '}';
    }
}
