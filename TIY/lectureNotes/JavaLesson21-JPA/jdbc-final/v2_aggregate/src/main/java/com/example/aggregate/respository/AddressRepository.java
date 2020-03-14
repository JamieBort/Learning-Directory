package com.example.aggregate.respository;


import com.example.aggregate.domain.Address;

public interface AddressRepository {
    void add(Address address);
    Address findByPersonId(int id);
    void update(Address address);
    void delete(int id);
    void deleteByPersonId(int id);
}
