# AlphabetWar-WoLoLooooooPriestsJoinTheWar

### Status

Not done yet.

## Problem

### Problem URl

https://www.codewars.com/kata/59473c0a952ac9b463000064/train/javascript

### Problem Statement

Write a function that accepts `fight` string consists of only small letters and return who wins the fight. When the left side wins return `Left side wins!`, when the right side wins return `Right side wins!`, in other case return `Let's fight again!`.

The left side letters and their power:

```
 w - 4
 p - 3
 b - 2
 s - 1
 t - 0 (but it's priest with Wo lo loooooooo power)
```

The right side letters and their power:

```
 m - 4
 q - 3
 d - 2
 z - 1
 j - 0 (but it's priest with Wo lo loooooooo power)
```

The other letters don't have power and are only victims.
The priest units `t` and `j` change the adjacent letters from hostile letters to friendly letters with the same power.

```
mtq => wtp
wjs => mjz
```

A letter with adjacent letters `j` and `t` is not converted i.e.:

```
tmj => tmj
jzt => jzt
```

The priests (`j` and `t`) do not convert the other priests ( `jt => jt`).

### Example

```
alphabetWar("z")         //=>  "z"  => "Right side wins!"
alphabetWar("tz")        //=>  "ts" => "Left side wins!"
alphabetWar("jz")        //=>  "jz" => "Right side wins!"
alphabetWar("zt")        //=>  "st" => "Left side wins!"
alphabetWar("azt")       //=> "ast" => "Left side wins!"
alphabetWar("tzj")       //=> "tzj" => "Right side wins!"
```

## Directories and Files

### Directories

### Files

- attempt01.js - I am not sure. Formerly AlphabetWar.js.js

- attempt02.js -

- README.md - this file.
