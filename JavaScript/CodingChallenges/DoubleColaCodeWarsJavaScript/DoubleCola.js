// from: https://www.codewars.com/kata/double-cola

// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

// For example, Penny drinks the third can of cola and the queue will look like this:
// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny

// Write a program that will return the name of the person who will drink the n-th cola.

// Note that in the very beginning the queue looks like that:

// Sheldon, Leonard, Penny, Rajesh, Howard
// ##Input

// The input data consist of an array which contains at least 1 name, and single integer n.

// (1 ≤ n ≤ 1000000000).
// ##Output / Examples Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1. Please note that you should spell the names like this: "Sheldon", "Leonard", "Penny", "Rajesh", "Howard" (without the quotes). In that order precisely the friends are in the queue initially.

//  string[] names = new string[] { "Sheldon", "Leonard", "Penny", "Rajesh", "Howard" };
//  int n = 1;
//  Line.WhoIsNext(names, n) --> "Sheldon"

//  int n = 6;
//  Line.WhoIsNext(names, n) --> "Sheldon"

//  int n = 52;
//  Line.WhoIsNext(names, n) --> "Penny"

//  int n = 7230702951;
//  Line.WhoIsNext(names, n) --> "Leonard"

No one drinks the  0 can: Sheldon, Leonard, Penny, Rajesh, Howard
Sheldon dinks the  1 can: Leonard, Penny, Rajesh, Howard, Sheldon, Sheldon
Leonard dinks the  2 can: Penny, Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard
Penny dinks the    3 can: Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
Rajesh dinks the   4 can: Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny, Rajesh, Rajesh
Howard dinks the   5 can: Sheldon, Sheldon, Leonard, Leonard, Penny, Penny, Rajesh, Rajesh, Howard, Howard
Sheldon dinks the  6 can: Sheldon, Leonard, Leonard, Penny, Penny, Rajesh, Rajesh, Howard, Howard, Sheldon, Sheldon
Sheldon dinks the  7 can: Leonard, Leonard, Penny, Penny, Rajesh, Rajesh, Howard, Howard, Sheldon, Sheldon, Sheldon, Sheldon
Leonard dinks the  8 can: Leonard, Penny, Penny, Rajesh, Rajesh, Howard, Howard, Sheldon, Sheldon, Sheldon, Sheldon, Leonard, Leonard
Leonard dinks the  9 can: Penny, Penny, Rajesh, Rajesh, Howard, Howard, Sheldon, Sheldon, Sheldon, Sheldon, Leonard, Leonard, Leonard, Leonard
Penny dinks the   10 can: Penny, Rajesh, Rajesh, Howard, Howard, Sheldon, Sheldon, Sheldon, Sheldon, Leonard, Leonard, Leonard, Leonard, Penny, Penny
Penny dinks the   11 can: Rajesh, Rajesh, Howard, Howard, Sheldon, Sheldon, Sheldon, Sheldon, Leonard, Leonard, Leonard, Leonard, Penny, Penny, Penny, Penny
Rajesh dinks the  12 can: Rajesh, Howard, Howard, Sheldon, Sheldon, Sheldon, Sheldon, Leonard, Leonard, Leonard, Leonard, Penny, Penny, Penny, Penny, Rajesh, Rajesh
Rajesh dinks the  13 can: Howard, Howard, Sheldon, Sheldon, Sheldon, Sheldon, Leonard, Leonard, Leonard, Leonard, Penny, Penny, Penny, Penny, Rajesh, Rajesh, Rajesh, Rajesh
Howard dinks the  14 can: Howard, Sheldon, Sheldon, Sheldon, Sheldon, Leonard, Leonard, Leonard, Leonard, Penny, Penny, Penny, Penny, Rajesh, Rajesh, Rajesh, Rajesh, Howard, Howard
Howard dinks the  15 can: Sheldon, Sheldon, Sheldon, Sheldon, Leonard, Leonard, Leonard, Leonard, Penny, Penny, Penny, Penny, Rajesh, Rajesh, Rajesh, Rajesh, Howard, Howard, Howard, Howard
Sheldon dinks the 16 can: Sheldon, Sheldon, Sheldon, Leonard, Leonard, Leonard, Leonard, Penny, Penny, Penny, Penny, Rajesh, Rajesh, Rajesh, Rajesh, Howard, Howard, Howard, Howard, Sheldon, Sheldon
Sheldon dinks the 17 can: Sheldon, Sheldon, Leonard, Leonard, Leonard, Leonard, Penny, Penny, Penny, Penny, Rajesh, Rajesh, Rajesh, Rajesh, Howard, Howard, Howard, Howard, Sheldon, Sheldon, Sheldon, Sheldon
Sheldon dinks the 18 can: Sheldon, Leonard, Leonard, Leonard, Leonard, Penny, Penny, Penny, Penny, Rajesh, Rajesh, Rajesh, Rajesh, Howard, Howard, Howard, Howard, Sheldon, Sheldon, Sheldon, Sheldon, Sheldon, Sheldon
Sheldon dinks the 19 can: Leonard, Leonard, Leonard, Leonard, Penny, Penny, Penny, Penny, Rajesh, Rajesh, Rajesh, Rajesh, Howard, Howard, Howard, Howard, Sheldon, Sheldon, Sheldon, Sheldon, Sheldon, Sheldon, Sheldon, Sheldon
Leonard dinks the 20 can: Leonard, Leonard, Leonard, Penny, Penny, Penny, Penny, Rajesh, Rajesh, Rajesh, Rajesh, Howard, Howard, Howard, Howard, Sheldon, Sheldon, Sheldon, Sheldon, Sheldon, Sheldon, Sheldon, Sheldon, Leonard, Leonard
Leonard dinks the 21 can: Leonard, Leonard, Penny, Penny, Penny, Penny, Rajesh, Rajesh, Rajesh, Rajesh, Howard, Howard, Howard, Howard, Sheldon, Sheldon, Sheldon, Sheldon, Sheldon, Sheldon, Sheldon, Sheldon, Leonard, Leonard, Leonard, Leonard

Sheldon 1, 6, 7,16,17,18,19
1, +5, +1, +9, +1, +1, +1,
Leonard 2, 8, 9,20, 21
Penny   3,10,11,
Rajesh  4,12,13
Howard  5,14,15