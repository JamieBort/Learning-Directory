# WhatIveLearned/Section06OOPPart1ClassesConstructorsAndInheritance.md

<!-- used this to populate the video titles https://docs.google.com/spreadsheets/d/1T5__se_ChZxoXZvkZaOl9QkjPdeYXxXMbDBR9tFP__k/edit#gid=656806513 -->

## Section 6 - OOP Part 1 - Classes, Constructors and Inheritance
Section06OOPPart1ClassesConstructorsAndInheritance

### 76 - Introduction
Nothing to make note of.
### 77 - Classes Part 1
* State
 * Stored in Fields (variables)
* Behavior - action items (verbs)
 * methods

* Class is a template for creating objects

* access modifyer
 * public - unrestricted access to the class
 * private - no other class can access this class
 * protected - only classes in this package can access this class
 * no access modifyer
 * discussed more in future videos

* encapsulation
 * hide fields and methods from other classes

### 78 - Classes Part 2
Continuation of the previous video.
`Set` and `get` methods
`this` to refer to a field in a class.
`null pointer exception` - defined a type but hasn't been initialized.
Encapsulation involves `private access modifiers`, `getters`, and `setters`.

### Coding Exercise 29: Sum Calculator
### Coding Exercise 30: Person
### 79 - Constructors - Part 1 (+Challenge Exercise)
* **Didn't do challenge yet.** It is at the very beginning of the video. First 11 minutes.
* Constructors
 * can be overloaded
 * call one constructor from another constructor. See 17:00 min. in on the video.
 * default values can be defined in one constructor by calling the non-empty constructor. See 17:00 min. in on the video.
 
### 80 - Constructors - Part 2 (+Challenge Exercise)
* Coninuation of previous video.
* **Didn't do challenge yet.** Starts at 5:30 minutes into the video.

### Coding Exercise 31: 

### Coding Exercise 32: 
Not Started.

### Coding Exercise 33: 
Not Started.

### Coding Exercise 34: 
Not Started.

### 81 - Inheritance Part 1
Child classes inherate fields and methods from parent classes
Example Animal class is a partent class to Dog class and Cat class
```public class <child class> extends <parent class>{
  public <child class>(<parameters for this constructor>){
    super(<the parameters found in the parent class>)
  }
  
}
```

Inheritance synonomous with `super`, `child class`, and ` parent class`.

`super` calls constructor from parent class

Good review. Nothing new. Need to put it into practice now.

Introduction to overriding methods.

`@Override` keyword indicating that the method is overriding one that is in the parent class.

### 82 - Inheritance Part 2
* Coninuation of previous video.

### 83 - Reference vs Object vs Instance vs Class

### 84 - this vs super

### 85 - Method Overloading vs Overriding Recap

### 86 - Static vs Instance Methods

### 87 - Static vs Instance Variables

### 88
Not Started.

### 89
Not Started.

### Coding Exercise 35:

### Coding Exercise 36:  