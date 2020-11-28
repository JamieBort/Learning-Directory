# MongoDBin30Minutes

from: https://www.youtube.com/watch?v=pWbMrx5rVBE
~~and: https://docs.google.com/document/d/1dkC_UBJzc47PyZqVy0GsY8qhL5C7rH-NQoJ2WkABQyg/edit~~

---
Notes from this link: and: https://docs.google.com/document/d/1dkC_UBJzc47PyZqVy0GsY8qhL5C7rH-NQoJ2WkABQyg/edit

files are kept here: /Users/jamiebort/Documents/MongodbPractice/MongoDBIn30Minutes

mongodb help/info: https://docs.mongodb.com/manual/mongo/

VERY informative: https://www.youtube.com/watch?v=0j9w_GZXLhs
http://bsonspec.org/

more info: https://www.youtube.com/watch?v=rJAiyjJ_tZU


Folders are created to store data. I didn’t follow this step.
https://youtu.be/pWbMrx5rVBE?t=4m16s

“running in the background as a service” ? mongod


commands: https://youtu.be/pWbMrx5rVBE?t=6m32s
show dbs
use [database name]
db
db.createUser(<user information>)
db.createCollection(<name of collection>');
show collections
db.customers.insert({first_name: "John", last_name: "Doe"})
db.customers.find()
db.customers.find().pretty()
db.customers.insert([{first_name: "Steven", last_name: "Smith"},{first_name: "Joan", last_name: "Johnson", gender: "female"}]);


syntax for a document
{
	field1: value1,
	first_name: “John”,
	last_name: “Doe”
	memberships: [“mem1”, “mem2”],
	address: {
		street: “4 main st.”
		city: “Boston:
	},
	contacts: [
		{name: “Brad”, relationship: “friend”},
		{name: “Pam”, relationship: “mom”}
	]
}


create user for the database: https://youtu.be/pWbMrx5rVBE?t=9m23s
db.createUser({
	  user: "brad",
	  pwd: "1234",
	  roles: [ “readWrite”, “dbAdmin” ]
})






