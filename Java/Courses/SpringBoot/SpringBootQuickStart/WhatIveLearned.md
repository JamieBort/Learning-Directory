# What I've Learned

## Unit One - Introducing Spring Boot
### Spring Boot Quick Start 1 - Introduction

### Spring Boot Quick Start 2 - About The Course

### Spring Boot Quick Start 3 - What is Spring Boot
What is Spring Boot?
Spring is a framework lets you write enterprise java application. It's huge. Does a lot of stuff not going to go int the details. Boot is bootstrap.
Spring Boot lets you bootstrap a Spring based applications.

### Spring Boot Quick Start 4 - Spring and some of its problems
What is Spring?
"It does dependency injection" is the perfecta answer as of 2006.
It's a whole application framework that lets you build enterprise java appliations.

Problems with Spring:
Also, it's a large/huge framework.
Multiple setup and configuration steps.
Multiple build and deploy steps.

Spring Boot addresses these issues by abstracting these steps.

### Spring Boot Quick Start 5 - What Spring Boot gives us
Spring Boot is opionionated.
Convention over configuration.
Stand alone application.
Production ready.

### Spring Boot Quick Start 6 - Setting Up Development Environment
Setup the environment with Java 8 SDK.
`java -version` in Terminal to check that the version is 1.8. For me it's version 13.0.2.
`echo $JAVA_HOME` in Terminal to check that the home is set. ~~For me it doesn't appear to be.~~
NOTE: when I ran `echo $JAVA_HOME` in Terminal nothing was returned.
Following the instructions here: http://www.sajeconsultants.com/how-to-set-java_home-on-mac-os-x/
I ran `export JAVA_HOME=/Library/Java/Home`.
Now when I run `echo $JAVA_HOME` I get `/Library/Java/Home`.
However when I run `java -version` I get 
```
java version "13.0.2" 2020-01-14
Java(TM) SE Runtime Environment (build 13.0.2+8)
Java HotSpot(TM) 64-Bit Server VM (build 13.0.2+8, mixed mode, sharing)
```
And when I run `/usr/libexec/java_home -V`
I get
```
Matching Java Virtual Machines (2):
    13.0.2, x86_64:	"Java SE 13.0.2"	/Library/Java/JavaVirtualMachines/jdk-13.0.2.jdk/Contents/Home
    1.8.0_144, x86_64:	"Java SE 8"	/Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home

/Library/Java/JavaVirtualMachines/jdk-13.0.2.jdk/Contents/Home
```

### Spring Boot Quick Start 7 - Maven
Manage dependencies and import jars.
In the pom.xml is a list of all the dependencies. 
Maven lets you declare all your dependencies and lists them in the pom.xml file.
Maven is a build and dependency management tool.

### Spring Boot Quick Start 8 - Creating a Spring Boot project
Instructor created a Spring Boot app using the Spring STS IDE. 
I generated one using Visual Studio Code and this [How to create a Spring Boot Project in Visual Studio Code](https://www.youtube.com/watch?v=5mpHejytgFE) YouTube video.

As a result, I didn't add the dependencies that the instructor did. Or at least not the way he did. But it's still valuable info.

### Spring Boot Quick Start 9 - Starting a Spring Boot application

### Spring Boot Quick Start 10 - [name to be added later]

### Spring Boot Quick Start 11 - [name to be added later]

### Spring Boot Quick Start 12 - [name to be added later]

### Spring Boot Quick Start 13 - [name to be added later]

### Spring Boot Quick Start 14 - [name to be added later]

## Unit Two - Spring MVC: The View Tier
### Spring Boot Quick Start 15 - [name to be added later]

### Spring Boot Quick Start 16 - [name to be added later]

### Spring Boot Quick Start 17 - Creating a business service
In Spring, business serves are typically singletons.
Created TopicService.java file.
Discusses @Autowired and @Service annotations.

### Spring Boot Quick Start 18 - Getting a single resource

### Spring Boot Quick Start 19 - Creating a new resource using POST
Introduction of/to PostMan.
What did I miss at about 9 minutes? there was an error trying to make a post.
I was able to post. However I needed to have certain header information that wasn't explicitely mentioned in the video.

The below table worked for GET and POST.

|   | Key | Value |
|---|---|---|
| [X] | Cache-Contole | no-cache |
| [X] | Postmane-Token | `<calculated when request is sent>` |
| [ ] | Conent-Type | text/plain |
| [X] | Content-Length | `<calculated when request is sent>` |
| [X] | Host | `<calculated when request is sent>` |
| [X] | User-Agent | PostmanRuntime/7.26.1 |
| [X] | Accept | `*/*` |
| [X] | Accept-Encoding | gzip, deflate, br |
| [X] | Connection | keep-alive |
| [X] | Conent-Type  | application/json |

### Spring Boot Quick Start 20 - Implementing Update and Delete

## Unit Three - Booting Spring Boot
### Spring Boot Quick Start 21 - Unit Overview
Skipped this video.

### Spring Boot Quick Start 22 - Using Spring Initializr
Skipped this video.

### Spring Boot Quick Start 23 - Using Spring Boot CLI
`Learn how to run quick Groovy scripts as complete Spring applications, directly from the command line.`
Skipped this video.

### Spring Boot Quick Start 24 - Using the STS IDE
Skipped this video.

### Spring Boot Quick Start 25 - Using application properties
Skipped this video.

## Unit Four - Spring Data JPA: The Data Tier
### Spring Boot Quick Start 26 - What is JPA
Java Persistence API
Object Relational Mapping
Typically SQL, which is a relational database.


### Spring Boot Quick Start 27 - Adding Spring Data JPA
~~Created a new project. Contrary to the instructions I used the website https://start.spring.io/ and the following options:
Packaging Jar
Java 11
Spring Web, Spring Data JPA, and Apache Database dependencies.
Group: io.javabrains
Artifact: course-api-data
Name: course-api-data
Description: Course API with data for Spring Boot QuickStart Java Brains course.
Package name: io.javabrains~~

### Spring Boot Quick Start 28 - Creating a Spring Data JPA Repository
We're going to update the TopicService.java file.
We're going to remove the hardcoded list.
By making it connect to the data layer - the database.
Created the TopicRepository.java file.
Discussion of `CrudRepository`.

### Spring Boot Quick Start 29 - Making Crud Operations with Repository
Connected to an embedded database.

### Spring Boot Quick Start 30 - Adding Course APIs
`Now let's apply our learning to create a set of Course REST APIs.`
Connect to an external database.

### Spring Boot Quick Start 31 - Adding Entity Relationship and Extending Repository

## Unit Five - Deployment and Monitoring
### Spring Boot Quick Start 32 - Packaging and running a Spring Boot app
`Learn how to package and run your Spring Boot application as a JAR file, and also if necessary, as a WAR file.`

### Spring Boot Quick Start 33 - [name to be added later]

### Spring Boot Quick Start 34 - [name to be added later]