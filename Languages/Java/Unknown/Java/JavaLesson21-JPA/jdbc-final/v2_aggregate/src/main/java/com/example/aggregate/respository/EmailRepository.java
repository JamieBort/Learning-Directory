package com.example.aggregate.respository;

import com.example.aggregate.domain.Email;

import java.util.List;

public interface EmailRepository {
    void add(Email email);
    List<Email> findByPersonId(int id);
    void delete(int id);
    void deleteByPersonId(int id);
}
