# Introduction To AJAX With jQuery

This is my directory following the PDF version of 'Introduction To AJAX With jQuery'.
I am using this book to learn how to use AJAX.
This books consists of several lessons/tasks leading up to creating a to-do list that is saved to a .json file and displayed in an html file.

[The book was originally found here](http://archive.oreilly.com/oreillyschool/courses/javascript2/Javascript%20JSON%20and%20Ajax%20v2.pdf).

[And here](https://github.com/JamieBort/LearningDirectory/blob/master/IntroductionToAJAXWithjQuery/Javascript%20JSON%20and%20Ajax%20v2.pdf).

NOTE: Chrome gave me the this error:
"Access to XMLHttpRequest at 'file:///Users/jamiebort/Documents/LearningDirectory/IntroductionToAJAXWithjQuery/YourFirstAjaxApplication/javascript2/pets.json' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https."

To address this I am using this:
https://www.npmjs.com/package/http-server
(this was discovered here from this article:
https://stackoverflow.com/questions/10752055/cross-origin-requests-are-only-supported-for-http-error-when-loading-a-local)

by typing this:
http-server -c-1 

into bash at this point:
~/Documents/LearningDirectory/IntroductionToAJAXWithjQuery/

## Table of Contents

[First Lesson, "Your First Ajax Application"](https://github.com/JamieBort/LearningDirectory/tree/master/IntroductionToAJAXWithjQuery/YourFirstAjaxApplication)

[Second Lesson, "The To-Do List Application"](https://github.com/JamieBort/LearningDirectory/tree/master/IntroductionToAJAXWithjQuery/TheTo-DoListApplication)

[Third Lesson, "Saving Data with Ajax"](https://github.com/JamieBort/LearningDirectory/tree/master/IntroductionToAJAXWithjQuery/SavingDataWithAjax)