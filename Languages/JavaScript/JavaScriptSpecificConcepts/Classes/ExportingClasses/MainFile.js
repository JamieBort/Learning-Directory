// Import the class 
// no need for .js extension in path cos gets inferred automatically
import Customer from './Customer';

// or

// const Customer = require('./path/to/Customer') 
// var Customer = require('./Customer');
// const Customer = require('./Customer');


// Use the class
// var customer1 = new Customer();
// var name = customer1.greet("Jim", 3);

var customer2 = new Customer("Sam", 35);
// customer2.greet("Sam", 35);
customer2.greet();
customer2.reasignName();
customer2.greet();