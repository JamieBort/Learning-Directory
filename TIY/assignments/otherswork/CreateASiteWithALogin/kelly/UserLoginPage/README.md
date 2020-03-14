# UserLoginPage

Create a site with a login

Use express-session to create a site with a login. Create an app with a login page.

PACKAGES THAT YOU NEED TO INSTALL IN YOUR PROJECT FOLDER:

express
express-handlebars
express-session
body-parser
express-validator

 When a user goes to /, and they are not logged in, redirect them to /login/. Upon entering a valid username and password, they should be authenticated and sent back to /. The root page should show that they are logged in and what username they are logged in as.

The valid usernames and passwords should be kept as a data structure in your application.

Hard Mode  

Add a button to the root page that shows how many times you have clicked it.
Add a logout link or button to the root page that logs the user out.
Add a signup page, linked to from the login page, that allows users to create a new account.


SETUP PROJECT FILES
  1. Project Folder (SiteLogin)
    2. Public Folder
        CSS (folder)
          style.css (file)
        Images Folder
          image (file)
    3. Views Folder (two endpoints)
          home.handlebars (a root page)
          login.handlebars (a login page)
    4. .gitignore (file)
    5. index.js (file)
    6. package.json (file)
    7. node_modules
    8. .git
