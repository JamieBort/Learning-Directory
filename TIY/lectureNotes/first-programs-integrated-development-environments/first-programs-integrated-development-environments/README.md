---
# This section is used to configure this assignment on Newline.
# `token` can not be changed; however, the rest can be edited
# as needed. Changes you make here will overwrite the
# existing content on Newline when you push to the master
# branch of the path's GitHub repo.

# Begin the body of the assignment below the final `---`.

token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb250ZW50X2lkIjoxMzYzOCwiY29udGVudF90eXBlIjoiQXNzaWdubWVudCJ9.h4Q6CM43jc5nNklx6SU81_8bXES5EWr8tWPT4tLtCLg

# Everything below this line can be edited.
title: >-
  [Exercise] IntelliJ Introduction
description: >-
  [Exercise] IntelliJ Introduction
---
# [Exercise] IntelliJ Introduction

For this exercise we will do the following:

* Fork a Github repository
* Clone a Git repository into your Projects folder
* Open an existing project in IntelliJ
* Look at some code
* Run some tests
* Fix some code
* Rerun the tests

## Clone a Git repository into your Projects folder

For many of our in-class exercises we will be working with preexisting Git repositories.

1. Go to Github and create a [fork](https://help.github.com/articles/fork-a-repo/) of [this repository](https://github.com/tiy-raleigh-java/first-programs-integrated-development-environments). This will create a copy of this repository in your Github account named `first-programs-integrated-development-environments`.

	![fork a repo.gif](https://tiy-learn-content.s3.amazonaws.com/1626dafc-fork%20a%20repo.gif)

2. Open a new Terminal session.

3. Change into your Projects directory using the `cd` command: 

	`cd ~/Projects`

4. Clone your fork of the repository using the `git clone` command: 

	`git clone git@github.com:<your github username>/first-programs-integrated-development-environments.git`
	
	**Warning:** Be sure to replace `<your github username>` in the command above with your actual Github username.

	This should create a new directory at `~/Projects/first-programs-integrated-development-environments`.

5. Launch IntelliJ

6. Use the File > Open... menu item and select the _directory_ you created above, not a file in that directory. Click OK and the project will open. 

	![select folder not file.png](https://tiy-learn-content.s3.amazonaws.com/7b5a5ca6-select%20folder%20not%20file.png)

7. The project will open in a new window that looks like this:

	![Screen Shot 2016-10-14 at 8.31.31 AM.png](https://tiy-learn-content.s3.amazonaws.com/f4a0209d-Screen%20Shot%202016-10-14%20at%208.31.31%20AM.png)
	
8. On the lefthand side of the window you will see a list of files. Take note that there is file named `Example` shown. (Actually, it's named `Example.java`. The file extension is not being shown.) This file should already be opened for you.

9. You may see a progress bar appear in the lower right corner of the window. Wait for this to finish and disappear before you do anything else.

	![Screen Shot 2016-10-14 at 8.26.59 AM.png](https://tiy-learn-content.s3.amazonaws.com/e9614072-Screen%20Shot%202016-10-14%20at%208.26.59%20AM.png)

10. You should see in the Example file a set of instructions shown in Java block comments (`/* .... */`). Read those instructions and follow them.

11. When you're ready to run this code, select "Run All Tests (ExampleTest)" in the drop down menu at the top of the screen and click the green Run button to the right.

	![run all.png](https://tiy-learn-content.s3.amazonaws.com/81bad2a9-run%20all.png)

12. As you work through the instructions in the `Example` file, you will see a listing of errors. This is what you are fixing:

	![list of errors.png](https://tiy-learn-content.s3.amazonaws.com/6d4d7408-list%20of%20errors.png)

13. After you have fixed both problems in the project, running it should produce output that looks like this:

	![success.png](https://tiy-learn-content.s3.amazonaws.com/cdf938e0-success.png)

14. Commit your code and push it to Github.

15. Finally, submit the link to your repository using the 'Submit Assignment' form below.

