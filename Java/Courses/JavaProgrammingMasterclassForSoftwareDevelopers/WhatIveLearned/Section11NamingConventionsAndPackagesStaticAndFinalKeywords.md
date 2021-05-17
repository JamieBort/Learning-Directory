# WhatIveLearned/Section11NamingConventionsAndPackagesStaticAndFinalKeywords.md

<!-- used this to populate the video titles https://docs.google.com/spreadsheets/d/1T5__se_ChZxoXZvkZaOl9QkjPdeYXxXMbDBR9tFP__k/edit#gid=656806513 -->

## Section 11 - Naming Conventions and Packages. static and final keywords
Section11NamingConventionsAndPackagesStaticAndFinalKeywords

### 141 - Naming Conventions
* Packages
    * always lowercase
    * be unique
    * internet domain name, refersed, as a prefix for the package name
        * hyphens are not allowd. change those to underscores.
        * cannot start with a digit. preface those with an underscore.
        * Java keywords are not allowed eiter. preface those with an underscore.
        * examples:
            * Switch.com -> com.supplier._switch
            * 1world.com -> com._1world
            * Experts-exchange.com -> com.experts_exchange
    * https://docs.oracle.com/javase/specs/jls/se6/html/packages.html#7
* Classes
    * use camelcase
        * start with a capital letter
        * Each word should start with a capital letter
        * example
            * LinkedList
    * should use nouns - they represent things (nouns)
    * examples
        * ArrayList
        * LinkedList
        * String
        * Topsong
        * GearBox
        * Main
* Interfaces
    * use camelcase
    * consider what objects implementing the interface will become or what they will be able to do
    * examples
        * List
        * Comparable
        * Serializable
* Methods
    * mixed case
    * verbs - they do things
    * reflect function performed or result returned
    * examples
        * size()
        * getName()
        * addPlayer()
* Constants
    * all uppercase
    * seperate words with underscore
    * declared using the `final` keyword
    * examples
        * Static final int MAX_INT
        * Static final short SEVERITY_ERROR
        * Static final double P1 = 3.14
* Variables/Fields
    * mixed case
    * meaningfull and idicative
    * start with lowercase letter
    * do not use underscores
    * examples
        * i
        * league
        * sydneySwans
        * boxLength
* Type Parameters
    * single character, captial letter
    * examples
        * E (for Element used exensively by the Java Collections Framework)
        * K (for Key)
        * T (for Type)
        * V (for Value)
        * S, U, V, etc. (for 2nd, 3rd, 4th types)

### 141 - Packages

.
.
.



### 152 - 