Recipe Search

In this project, you'll build an app that allows your users to search for a keyword and return a list of recipes they can browse.
Use this API http://www.recipepuppy.com/about/api/

Setup  
Before writing your first fetch request, you'll need to first build your HTML/CSS files. Start by viewing the wireframe listed below. Take this as a suggestion and not a requirement.

The basic pieces of your app will be a search box (text input) and a container where you'll append rows of your search results.

Task  
Once your wireframe is set up, create a main.js file and use the fetch API to allow a user to search for any food related term and you can return a list of results to them.

The endpoint you'll be using is:
http://www.recipepuppy.com/api/?q=search-term

Note, that you'll need to dynamically replace search-term with the proper term the user inputted.

Take for example a search for omelet, the URL would look like this:
http://www.recipepuppy.com/api/?q=omelet

and the data response might look like this:

{
  title: "Recipe Puppy",
  version: 0.1,
  href: "http://www.recipepuppy.com/",
  results: [...]
}

Inside of the results property, is an array of recipe links that looks like this:

{
  "title": "Baked Omelet With Broccoli &amp; Tomato",
  "href": "http://www.recipezaar.com/Baked-Omelet-With-Broccoli-Tomato-325014",
  "ingredients": "milk, cottage cheese, broccoli, cheddar cheese, basil, onion powder, eggs, garlic powder, roma tomato, salt",
  "thumbnail": "http://img.recipepuppy.com/123889.jpg"
},

Your task is to display all the results that are returned. For each result, you'll need to specifically show the thumbnail, title and link them to the href. You can display more data if you'd like, but these three are required.

Also, you might have to do some checking to ensure these properties are filled out on each entry. It's even possible you'll need to have a default thumbnail ready for display. For that, feel free to use the free placeholder.com service.
# PuppyRecipeAPIsearch
