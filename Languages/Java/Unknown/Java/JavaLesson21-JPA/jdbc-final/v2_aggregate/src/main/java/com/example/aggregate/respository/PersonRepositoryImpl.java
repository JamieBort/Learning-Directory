package com.example.aggregate.respository;

import com.example.aggregate.domain.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class PersonRepositoryImpl implements PersonRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final String INSERT_SQL = "INSERT INTO person (firstName, lastName) VALUES (?,?)";
    @Override
    public void add(Person person) {
        jdbcTemplate.update(INSERT_SQL, person.getFirstName(), person.getLastName());
    }

    private final String SELECT_BY_ID_SQL = "select * from person where id = ?";
    @Override
    public Person getById(int id) {
        return jdbcTemplate.queryForObject(SELECT_BY_ID_SQL, new PersonMapper(), id);
    }

    private final String SELECT_SQL = "select * from person";
    @Override
    public List<Person> get() {
        return jdbcTemplate.query(SELECT_SQL, new PersonMapper());
    }

    private final String UPDATE_SQL = "update person set firstName=?, lastName=? where id=?";
    @Override
    public void update(Person person) {
        jdbcTemplate.update(UPDATE_SQL, person.getFirstName(), person.getLastName(), person.getId());
    }

    private final String DELETE_SQL = "delete from person where id=?";
    @Override
    public void delete(int id) {
        jdbcTemplate.update(DELETE_SQL, id);
    }


    // Map a row of the result set to a person object
    private static class PersonMapper implements RowMapper<Person> {
        @Override
        public Person mapRow(ResultSet rs, int rowNum) throws SQLException {
            Person person = new Person();
            person.setId(rs.getInt("id"));
            person.setFirstName(rs.getString("firstName"));
            person.setLastName(rs.getString("lastName"));
            return person;
        }

    }

}
