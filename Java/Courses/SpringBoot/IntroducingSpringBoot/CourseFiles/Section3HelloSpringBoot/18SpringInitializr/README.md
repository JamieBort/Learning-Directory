# Notes

Three different ways to start a Spring Boot App.

1. Using Spring Initializr.
2. Using the CLI in terminal.
3. Using curl.
4. And using IDE (not covered in this video).

## Spring Initializr 
(found here: https://start.spring.io/)
For this course choose Maven instead of Gradle.
Java instead of Kotlin or Groovy.
2.2.7 version of Spring Boot.
Group is the package name. Left as default: `com.company`.
Artifact is the app name which is equivelant to the directory name. Left as default: `demo`.
Leaving the packaging as Jar.
Leaving the Java version as 8.
Then selected `Generate` and saved the zip file to the [GeneratedBySpringInitializr](https://github.com/JamieBort/LearningDirectory/tree/master/Java/Courses/SpringBoot/IntroducingSpringBoot/CourseFiles/Section3HelloSpringBoot/18SpringInitializr/GeneratedBySpringInitializr) directory.
See the README.md file in that directory.

## Spring Boot CLI
At 5:02 seconds of this video we cover how to start a Spring Boot app using the CLI.

`spring init -list` in Terminal gives a list of options needed to create the project.
For example parameters such as metadata. Project Types such as Gradle or Maven build. The asterisks denote what is set as default.

`spring init -d=web my-app` generates a Spring Boot app with the name `my-app` and a web dependancty.

This seemed to work as expected.

## Using curl

In Terminal run `curl https://start.spring.io/`.
NOTE - this didn't work: `curl start.spring.io`!!!

In my case the zipped file downloaded in the directory that I ran the curl command.

Unzip the zipped file.

Running into problems getting it to run. See [this README file](https://github.com/JamieBort/LearningDirectory/tree/master/Java/Courses/SpringBoot/IntroducingSpringBoot/CourseFiles/Section3HelloSpringBoot/18SpringInitializr/GeneratedByCurl).


## Using IDE