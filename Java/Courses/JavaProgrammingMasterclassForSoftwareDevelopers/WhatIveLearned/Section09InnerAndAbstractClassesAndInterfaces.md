# WhatIveLearned/Section09InnerAndAbstractClassesAndInterfaces.md

<!-- used this to populate the video titles https://docs.google.com/spreadsheets/d/1T5__se_ChZxoXZvkZaOl9QkjPdeYXxXMbDBR9tFP__k/edit#gid=656806513 -->

## Section 9 - Inner and Abstract Classes & Interfaces
Section09InnerAndAbstractClassesAndInterfaces

### 123 - Interfaces
Interfaces123
* Interfaces specifiy methods that a particular class that implements the interface must implement.
* In other words, if a class implements an interface, then the methods in that interface must be implemented by that class.
* it's abstract - no code (logic?) is writen. only the methods
* forces common behavior among all the classes that implement the interface.
* on other words standardize way a set of classes is used
* in the body of the interface function signatures are writen, but not the logic - that is left up to each class the implements the interface.
* access modifiers are not needed in the function signatures of interfaces.
* **use** `implements` keyword, **not** `extends` keyword.

**Need to look this up!!!!**

Notice the `Random_Class` and `An_Interface` methods in the [Section09Methods.java](https://github.com/JamieBort/LearningDirectory/blob/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/CourseFiles/Section09InnerAndAbstractClassesAndInterfaces/Section09Methods.java) file.

On line 10 is `RandomClass randomClass = new RandomClass();`.

On line 20 is `AnInterface anInterface = new RandomClass();`. 

But the result seems to be the same. What's the difference? Does it matter?

**NOTE:** - this is discussed a bit at 10:45 min. in this video.
**NOTE:** - this is discussed again at 4:15 min. in the next video.

### 124 - Interfaces Part 2
InterfacesPart2_124

**Stopped watching** at **6:00 minutes** to go back over the [`### Coding Exercise 46: Playlist`](https://github.com/JamieBort/LearningDirectory/blob/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/WhatIveLearned/Section08ArraysJavaInbuiltListsAutoboxingAndUnboxing.md#coding-exercise-46-playlist) prerequisit material.
Which means I need to first watch, study, and  work on the chapters/videos leading up to it; starting with [`### 116 - LinkedList Part 1`](https://github.com/JamieBort/LearningDirectory/blob/master/Java/Courses/JavaProgrammingMasterclassForSoftwareDevelopers/WhatIveLearned/Section08ArraysJavaInbuiltListsAutoboxingAndUnboxing.md#116-linked-lists-part-1).


### 125 - Interfaces Challenge Part 1
Not started yet.

### 126 - 

### 127 - Inner classes Part 1
InnerClassesPart1_127
**Need to study these files and/or this video again.** But first the files.

* Static nested classes
 * 
* Non-static nested classes
* Local class
* Annonymous class nested class without a class name


// Gearbox class is the top level class.
// Gear class is the inner class.

// NOTE: the use of `this` refers to the scope of the Gear Class.
// `this.gearNumber` (and `gearNumber`) in the Gear class 
// will NOT refer to `gearNumber` in the Gearbox class.
// NOTE: while in Gear class, if you want to refer to the gearNumber outside of it,
// you need to use `Gearbox.this.gearNumber`.


// NOTE: When an inner class has the same variable name as the outer class, 
// it is shaddowing the declaration of the/in the outer class.
// So we've renamed `gearNumber` to `currentGear`.

When an inner class has the same variable name as the outer class, it is shaddowing the declaration of the/in the outer class.

Gear class is a member of Gearbox class. So it must be created with an instance of Gearbox.

### 128 - 

.
.
.

### 135 - 

### Coding Exercise