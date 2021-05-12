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
CodingExercise29SumCalculator.java

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

Good review. Nothing new. But need to put it into practice now.

Introduction to overriding methods.

`@Override` keyword indicating that the method is overriding one that is in the parent class.

### 82 - Inheritance Part 2
* Coninuation of previous video.
Good review. Nothing new. But need to put it into practice now.

### 83 - Reference vs Object vs Instance vs Class
* References
* Objects
* Instances
* Classes

Good review. Nothing new. 

### 84 - this vs super
* `this` - use to call the current class members (variables and methods)
* `super` - used to access or call the parent class members (variables and methods)
* can use either of these anywhere EXCEPT in `static` areas (static block or static methods) - this will lead to compile time errors.
* more on `static` later in course.
* `this()`
  * use to call a constructor from another overloaded constructor in the same class.
  * can only be used in a constructor.
  * must be the first statement in a constructor.
* `super()`
  * only way to call a parent constructor.
  * without it Java makes default call to no-arguments constructor in the parent class.
  * must be the first statement in each constructor.
* Abstract classes
  * is a super class.
  * Have constructors. Although you can never instantiate an abstract class using a `new` keyword.
  * more on abstract classes later in the course.
* a constructor cannot have both `this()` and `super()`.

This video gives example of constructor chaining.

### 85 - Method Overloading vs Overriding Recap
* overloading
  * > 1 methods in the same class with the same name but different paramters.
  * can overload static and instance methods. (more on differences between static and instance methods later in the course.)
  * usually happens inside single class.
  * however can also happen in subclass of that class.
  * Known as Compile Time Polymorphism.
* overriding
  * define method in child class as the parent class that has same name and same signature.
  * Known as Runtime polymorphism and Dynamic Method Dispatch (because the method that is going to be run is decided at runtime by the JVM.)
  * Put `@Overrrid` annotation immediately above the method definition.
  * can override instance methods
  * cannot override static methods
  * methods that are final cannot be overriden.

 Good explanation and examples in video.

### 86 - Static vs Instance Methods
Left off here.

* Static Methods
* Instance Methods

### 87 - Static vs Instance Variables
* Static Variables
* Instance Variables

### 88
* **Didn't do challenge yet.** 

### 89
* **Didn't do challenge yet.** 

### Coding Exercise 35:

### Coding Exercise 36:  