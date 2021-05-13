# WhatIveLearned/Section09InnerAndAbstractClassesAndInterfaces.md

<!-- used this to populate the video titles https://docs.google.com/spreadsheets/d/1T5__se_ChZxoXZvkZaOl9QkjPdeYXxXMbDBR9tFP__k/edit#gid=656806513 -->

## Section 9 - Inner and Abstract Classes & Interfaces
Section09InnerAndAbstractClassesAndInterfaces

### 123 - Interfaces
* Interfaces specifiy methods that a particular class that implements the interface must implement.
* In other words, if a class implements an interface, then the methods in that interface must be implemented by that class.
* it's abstract - no code (logic?) is writen. only the methods
* forces common behavior among all the classes that implement the interface.
* on other words standardize way a set of classes is used
* in the body of the interface function signatures are writen, but not the logic - that is left up to each class the implements the interface.
* access modifiers are not needed in the function signatures of interfaces.
* **use** `implements` keyword, **not** `extends` keyword.
