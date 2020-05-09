# Gabble

The Iron Yard Weekly Project: Gabble

Use Express and Sequelize to build a social network for students. This network, called "Gabble," has users, public messages, and likes.

Users should:

* have a username and password for logging in

* have a display name

Messages should:

* be associated with a user who wrote them

* have up to 140 characters of text

Likes should:

* be associated with a user who made the like and a message that was liked

The application should have ways to do the following:

* Sign up as a new user

* Log in

* Log out

* View all messages with the newest first

* Create a new message

* Delete one of your own messages

* Like a message

* See who liked a message

This will require your knowledge of forms, validation, sessions, middleware, and Sequelize. You will likely have to look up some features of these.

You may want to consider running `sequelize seed:create` and create a new seed file that will create several users and gabs.

### Mockups you can optionally use

![Homepage](https://github.com/rickmurdock/gabble/blob/master/mockups/homePage.png)
![Sign Up](https://github.com/rickmurdock/gabble/blob/master/mockups/signUp.png)
![Log in](https://github.com/rickmurdock/gabble/blob/master/mockups/logIn.png)
![Create a new gab](https://github.com/rickmurdock/gabble/blob/master/mockups/createNew.png)
![See list of likes](https://github.com/rickmurdock/gabble/blob/master/mockups/likesList.png)

### Links to documentation

* [Express](https://expressjs.com/)
* [body-parser](https://github.com/expressjs/body-parser)
* [express-validator](https://github.com/ctavan/express-validator) and its underlying library, [node-validator](https://github.com/chriso/validator.js)
* [express-session](https://github.com/expressjs/session)
* [Sequelize](http://docs.sequelizejs.com/)
