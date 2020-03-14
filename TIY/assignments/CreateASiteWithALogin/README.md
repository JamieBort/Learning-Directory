from: https://newline.theironyard.com/cohorts/15/courses/10/projects/77

# Create a site with a login
Using Express, Mustache, and express-session, create an app with a login page. When a user goes to /, and they are not logged in, redirect them to `/login/`. Upon entering a valid username and password, they should be authenticated and sent back to `/`. The root page should show that they are logged in and what username they are logged in as.

The valid usernames and passwords should be kept as a data structure in your application.

## Hard Mode
* Add a button to the root page that shows how many times you have clicked it.
* Add a logout link or button to the root page that logs the user out.
* Add a signup page, linked to from the login page, that allows users to create a new account.

ToDo:
1. set up files

    a. Create two endpoints (handlebars templates)

        i. root (/)
    
        ii login (/login)
        
    b. Create one css file (optional)
    
    c. javascript
    
    d.Create the .gitiginore file
    
        i. node-modles/
    
        ii. .DS_Store