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
Coding_Exercise_29_Sum_Calculator.java
Completed.

### Coding Exercise 30: Person
Coding_Exercise_30_Person.java
Completed.

### 79 - Constructors - Part 1 (+Challenge Exercise)
79_Constructors_Part_1_Challenge_Exercise.java
79ConstructorsPart1ChallengeExercise
* ~~**Didn't do challenge yet.** It is at the very beginning of the video. First 11 minutes.~~ Completed. 
* Constructors
  * can be overloaded
  * call one constructor from another constructor. See 17:00 min. in on the video.
  * default values can be defined in one constructor by calling the non-empty constructor. See 17:00 min. in on the video.
 
### 80 - Constructors - Part 2 (+Challenge Exercise)
Constructors_Part_2_Challenge_Exercise_80.java
80ConstructorsPart2ChallengeExercise

* Coninuation of previous video.
* **Didn't do challenge yet.** ~~Starts at 5:30 minutes into the video.~~ I copied the instructions into the file.

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

(from video `91 - Composition` of `Section 7- OOP Part 2 - Composition, Encapsulation, and Polymorphism`:

* Car is a vehicle ( because it extends from vehicle ) inheritance relationship)

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

* Static Methods
  * delcared using `static` modifier.
  * `static` methods cannot access instance methods nor instance variables directly.
  * usually used for operations that don't require data from an instance of a class (from 'this').
    * `this` keyword refers to the current instance of a class.
  * methods that don't use instance variables should (proably) be delcared as `static`.
  * don't require an instance to be created - simply type <the class name>.<the static method name>.
* Instance Methods
  * belong to a specific instance of a class.
  * to use need to instantiate the class first (usually by uing the `new` keyword).
  * instance methods can access instance methods directly. +++
  * instance methods can access instance variables directly. +++
  * instance methods can access static methods directly. +++
  * instance methods can access static variables directly. +++
  
Nothing more to watch here/take notes on except:
  these four lines (above) don't seem right to me. +++

### 87 - Static vs Instance Variables
* Static Variables
  * also known as static member variables.
  * every instance of that class shares that variable.
  * if that variable changes, all instances of that class will see that change.
* Instance Variables
  * don't use `static` keyword.
  * also know as `fields` or `member variables`.
  * belong to each instance - each instance has it's own "copy" of this/these variables.
  * every instance can have a different value or state.
  * instance variables represent the state of a specific instance of a class.

Nothing more to take notes on.

### 88 - Inheritance Challenge Part 1 (+Challenge Exercise)
Inheritance_Challenge_Part_1_Challenge_Exercise_88.java
88InheritanceChallengePart1ChallengeExercise
* **Started.** 
~~Didn't do challenge yet.~~

### 89
* **Didn't do challenge yet.** 

### Coding Exercise 35:

### Coding Exercise 36:  