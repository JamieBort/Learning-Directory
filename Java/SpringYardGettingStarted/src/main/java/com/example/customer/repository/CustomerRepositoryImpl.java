package com.example.customer.repository;

import com.example.customer.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class CustomerRepositoryImpl implements CustomerRepository {


    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public CustomerRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public List<Customer> listAllCustomers() {
        return jdbcTemplate.query(
                "SELECT firstname, lastname, phone, email FROM customer",
                (resultSet, i) -> new Customer(resultSet.getString("firstname"), resultSet.getString("lastname"), resultSet.getString("phone"), resultSet.getString("email")));
    }


    @Override
    public void createCustomer(Customer customer) {
        jdbcTemplate.update("INSERT INTO customer (firstname, lastname, phone, email) VALUES (?, ?, ?, ?)", customer.getFirstName(), customer.getLastName(), customer.getPhone(), customer.getEmail());
    }


    private final String SELECT_BY_ID_SQL = "SELECT * FROM customer WHERE id = ?";

    @Override
    public Customer findCustomer(int id) {
        return jdbcTemplate.queryForObject(SELECT_BY_ID_SQL, new CustomerMapper(), id);
    }

//    @Override
//    public List<Customer> findCustomer(String find) {
//        return jdbcTemplate.query("SELECT firstname, lastname, phone, email FROM customer WHERE (firstname = ? OR lastname = ? OR phone = ? OR email = ?) OR ? = ''  LIMIT 50",
//                (resultSet, i) -> new Customer(resultSet.getString("firstname"), resultSet.getString("lastname"), resultSet.getString("phone"), resultSet.getString("email")),
//                find, find, find, find, find);
//    }

    private final String UPDATE_SQL = "UPDATE customer SET firstName=?, lastName=? where id=?";

    @Override
    public void updateCustomer(Customer customer) {
        jdbcTemplate.update(UPDATE_SQL, customer.getFirstName(), customer.getLastName(), customer.getPhone(), customer.getEmail());
    }


    private final String DELETE_SQL = "DELETE FROM customer WHERE id=?";

    @Override
    public void deleteCustomer(int id) {
        jdbcTemplate.update(DELETE_SQL, id);
    }


//    @Override
//    public void deleteCustomer(Customer customer) {
//        jdbcTemplate.update("DELETE FROM customer WHERE (firstname = ? OR lastname = ? OR phone = ? OR email = ?)", customer.getFirstName(), customer.getLastName(), customer.getPhone(), customer.getEmail());
//    }


    private static class CustomerMapper implements RowMapper<Customer> {
        @Override
        public Customer mapRow(ResultSet rs, int rowNum) throws SQLException {
            Customer customer = new Customer();
            customer.setId(rs.getInt(rs.getInt("id")));
            customer.setFirstName(rs.getString("firstname")); // what is rs.getString?
//                    .setFirstname(rs.getString("firstname"));
            customer.setLastName(rs.getString("lastname")); // what is rs.getString?
//                    .setLastname(rs.getString("lastname"));
            customer.setEmail(rs.getString("email"));
            customer.setPhone(rs.getString("phone"));
            return customer;
        }
    }
}
