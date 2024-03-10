package com.example.aggregate.respository;

import com.example.aggregate.domain.Address;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class AddressRepositoryImpl implements AddressRepository {

    private static final Logger log = LoggerFactory.getLogger(com.example.aggregate.respository.AddressRepositoryImpl.class);

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public void add(Address address) {
        log.info("adding " + address);
        jdbcTemplate.update("INSERT INTO address(street, city, state, zip, person_id) VALUES (?,?,?,?,?)",
                address.getStreet(), 
                address.getCity(),
                address.getState(),
                address.getZip(),
                address.getPersonId());
    }

    @Override
    public Address findByPersonId(int id) {
        log.info("findByPersonId " + id);
        List<Address> addresses = jdbcTemplate.query("select * from address WHERE person_id = ?", new AddressMapper(),
                id);
        if (addresses.size() > 0) {
            return addresses.get(0);
        } else {
            return null;
        }
    }

    @Override
    public void update(Address address) {
        log.info("updating " + address);
        jdbcTemplate.update("update address set street=?, city=?, state=?, zip=? where id = ?",
                address.getStreet(), 
                address.getCity(),
                address.getState(),
                address.getZip(),
                address.getId());
    }

    @Override
    public void delete(int id) {
        log.info("delete " + id);
        jdbcTemplate.update("delete from address where id = ?", id);
    }

    @Override
    public void deleteByPersonId(int id) {
        log.info("delete " + id);
        jdbcTemplate.update("delete from address where person_id = ?", id);
    }

    private static class AddressMapper implements RowMapper<Address> {
        @Override
        public Address mapRow(ResultSet rs, int rowNum) throws SQLException {
            Address address = new Address();
            address.setId(rs.getInt("id"));
            address.setStreet(rs.getString("street"));
            address.setCity(rs.getString("city"));
            address.setState(rs.getString("state"));
            address.setZip(rs.getString("zip"));
            address.setPersonId(rs.getInt("person_id"));
            return address;
        }
    }
}
