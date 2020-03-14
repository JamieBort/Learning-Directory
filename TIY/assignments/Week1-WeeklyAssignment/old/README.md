from: https://newline.theironyard.com/cohorts/15/courses/9/projects/41

# Week 1 - Weekly Assignment
Small Business Website - Build a Website to Specifications

## Bent Creek Ceramics  
Your objective is to develop a website according to the following specifications.

Step 1: Use bash in your terminal to do the following:

* Create a new project folder titled week-one-project.
* Inside week-one-project, create 3 new files:
  1. index.html
  2. styles.css
  3. README.md
* Inside week-one-project, create 1 new folder:

  1. images
* Add the following content to README.md:

```
Week One Project
- HTML
- CSS
```

The above text is using a format called Markdown. It is an easy way write plain text with a few special characters and have it render as HTML with a Markdown viewer. GitHub will render Markdown, which makes it particularly handy as a tool for writing documentation. See Daring Fireball for an explanation of Markdown and a description of its syntax.

The source files can be found [here](https://github.com/JamieBort/Week1-WeeklyAssignment/tree/master/SourceFiles)

Step 2: Download assets and setup project

* Download the attached project-images folder.
* Use bash in your terminal to move the downloaded images into the images folder in your project (week-one-project/images).
* Download the attached project-layout folder.
* Download the attached project-text-content folder.
* Import the following fonts (Follow the instructions in the "2 Families Selected" tab at bottom of the Google Fonts page):
  * Google Fonts - Lara | Roboto

* Use the following colors for your layout:
  * Background: #F2F1E8
  * Text: #131511
  * Inline Link: #968772
  * Inline Link (Hover): #967343
  * Navigation Background: #FFFFFF
  * Navigation Text: #2B2F26
  * Navigation Text (Hover): #CD5D67
  * Navigation Text (Active) #968772
  * Button Background: #968772
  * Button Background (Hover): #967343
  * Button Text: #F2F1E8
  * Button Text (Hover): #FFFFFF
  * Input Border Bottom: #968772
  * Input Border Bottom (Focus): #967343

Step 3: Architecting your web site

* Using semantic markup, write the HTML for all three pages.

  * Home: The home page layout belongs in index.html.
  * The title for the home page is "Bent Creek Ceramics".
  * About: The about page layout belongs in about.html.
  * The title for the about page is "Bent Creek Ceramics - About".
  * Newsletter: The newsletter page layout belongs in newsletter.html.
  * The title for the newsletter page is "Bent Creek Ceramics - Newsletter".

* Text content is provided in the attached project-text-content folder.

Step 4: Styling your website

Use CSS to style the website according to the provided layouts in the project-layout folder.

Step 5: Considerations

* The header/navigation component is always fixed to the top. Contents should scroll behind this component.
* Navigation links at the top should link to the corresponding pages in your project directory (paths may vary for each .html document).
* The currently visited page's navigation link should have an "active" state.
* Use flexbox for grid level layout.
* The text "dedicated environment" in the first paragraph of the about page is an inline link. It should link a user to the "Facilities" section below when clicked.
* The newsletter signup page has a minimum height of the viewport's height.
* The newsletter signup module is centered horizontally and vertically on the page.
* The "Name" input field on the newsletter page should have the type text.
* The "Email" input field on the newsletter page should have the type email.

Step 6: Submitting this Project

You will need to turn this project in via Github. Track the files of this project with git and submit a Github link to the remote repository.

Bonus

* Create and apply a favicon.
* Use CSS only to make navigation links all caps.
* Apply a subtle drop shadow to the bottom of the header.
* Apply a subtle transition duration to hover and focus states
* Apply parallax scrolling to the background image in the "Room to Grow" section on the about page. When scrolled the image appears to stay stationary while the sections above and below scroll over. This can be done with with the css background and background-size properties.
* Add the id nameInput to the name input field in the newsletter page.
* Add the id emailInput to the email input field in the newsletter page.
* Add the id signupButton to the "Submit" button in the newsletter page.
* Include the following code snippet just before the closing body tag (</body>) in newsletter/index.html:

```
<script type="text/javascript">
  var nameInput = document.getElementById('nameInput');
  var emailInput = document.getElementById('emailInput');
  var signupButton = document.getElementById('signupButton');
  signupButton.addEventListener('click', function(e) {
    var nameVal = nameInput.value;
    var emailVal = emailInput.value;
    if (nameVal && emailVal) {
      alert('Thanks for signing up, ' + nameVal + '. Newsletters will be sent to ' + emailVal);
      nameInput.value = "";
      emailInput.value = "";
    } else {
      alert('We would love for you to sign up, please provide both your name and email address.');
    }
  });
</script>
```

In your browser, load the site, navigate to "NEWSLETTER", add a name and an email address to the sign up form, and submit.
