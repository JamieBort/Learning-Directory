package com.example.aggregate.respository;

import com.example.aggregate.domain.Email;
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
public class EmailRepositoryImpl implements EmailRepository {

    private static final Logger log = LoggerFactory.getLogger(com.example.aggregate.respository.EmailRepositoryImpl.class);

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public void add(Email email) {
        log.info("adding " + email);
        jdbcTemplate.update("INSERT INTO email(email, person_id) VALUES (?,?)", 
                email.getEmail(), 
                email.getPersonId());
    }

    @Override
    public List<Email> findByPersonId(int id) {
        log.info("findByPersonId " + id);
        return jdbcTemplate.query("select * from email WHERE person_id = ?", new EmailMapper(),id);
     }

    @Override
    public void delete(int id) {
        log.info("delete " + id);
        jdbcTemplate.update("delete from email where id = ?", id);
    }

    @Override
    public void deleteByPersonId(int id) {
        log.info("delete " + id);
        jdbcTemplate.update("delete from email where person_id = ?", id);
    }

    private static class EmailMapper implements RowMapper<Email> {
        @Override
        public Email mapRow(ResultSet rs, int rowNum) throws SQLException {
            Email email = new Email();
            email.setId(rs.getInt("id"));
            email.setEmail(rs.getString("email"));
            email.setPersonId(rs.getInt("person_id"));
            return email;
        }
    }
}
