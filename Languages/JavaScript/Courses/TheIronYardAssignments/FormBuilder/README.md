TODO:

A completed commit was pushed. However I need to revisit this to address the following:
- [X] 1. Come back to implement the ['Hard Mode'](#hard-mode) using font awesome.
- [X] 2. When that is done, address the CSS so that the finished product looks like the image given to us.
- [X] 3. Refactor the code so that it iterates over the formData array using loops to make it more concise. See Brandon's for an example of how it should ultimately look.
- [ ] 4. Optionally, figure out which value the 'value' attribute should in the form elements. So that it pulls from the data file and/or pushes to the data base.
- [X] 5. Lastly, update `gh-pages`.

from: https://newline.theironyard.com/cohorts/15/courses/9/projects/55

# Form Builder
This project will test your knowledge of parsing through an array of data and appending it to the DOM.

## Instructions

* Download the starter files below. Using the variable `formData` at the top of the `main.js` file, iterate through the data and dynamically add the form fields to the page.
* The basic HTML and starter files are included for you.

![Image of what it needs to look like. (Link is broken.)](./images/d9868595-full.png)

## Interpreting the formData Array

Each object in the array contains data about one of the input controls for the form. These objects have several properties that we will discuss briefly.

For instance, the following code snippet is the first object in the `formData` array:

```
{    
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
}
```

* The `type` property specifies the `type` attribute of input. In this case, the type is "text."
* The `label` property specifies the placeholder text for this input.
* The `id` property specifies the value of the `id` attribute of the input.
* The `icon` property specifies the character icon for Font Awesome. This property is used only to complete the hard mode of this project.
* The `options` property contains additional information for some of the inputs. The context and type of input should inform how to use this data.

The first form element has been included as a comment in the HTML file so that you can see this in action. Your job is to iterate over the array, parse the objects, and construct the inputs to recreate the form in the screenshot.

[Link to the starter files.](https://github.com/JamieBort/FormBuilder/tree/master/SourceFiles/starter_files)

## Hard Mode

* Use [Font Awesome](http://fontawesome.io/) to add the icons to the left of the inputs. You'll notice the `fa-` is in the data for each element.
