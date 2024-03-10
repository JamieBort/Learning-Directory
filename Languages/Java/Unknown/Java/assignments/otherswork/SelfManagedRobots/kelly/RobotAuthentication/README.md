Practice with User Authentication, MongoDB, and Mongoose, Passport, bcryptjs

Be able to create a new robot through a sign up form, add that new robot to the existing database of robots, and have that robot populate to the robot page. Use password hashing and authentication. THEN, be able to edit the robot that you created.

TLDR: Don’t worry about the already existing robots that are in the database because it seems pointless to either manually give them passwords (the defeats the purpose of password hashing) or recreate the database just for fun-sies. For the images, just use any images or repeat the robot urls in the data.JS file.

Use the data.js file as your directory information

Your project should allow for each existing robot -- or human user -- to log into the directory and edit their entry. I

In addition, new users should be able to sign up for the directory and add their own entry.

Use MongoDB that has all the data.js file
  Database: robotsDB
  Collection: robotCollection

PASSPORT DOES NOT
handle user registration, "forgot my password?" systems, login forms

PASSPORT DOES:
logs in users given credentials
# RobotAuthentication
