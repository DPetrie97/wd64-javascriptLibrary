// Booleans
// - a boolean has two possible values of either true or false;
// - false != 'false';

let on = true;
console.log(on);

let off = false;
console.log(off);

// Null
// - null is an empty value. Think of it like an empty container: nothing is in it, but it still exists as a space to fill.

let empty = null;
console.log(empty);

// Undefined
// - no value is assigned and does not act like empty container 

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

// Null VS Undefined
/*
    - null is a container with nothing in it
    -Null you can trust as zero - Undefined not so much.
    - undefined is when a variable has never been set or hasn't been created yet.
*/

// Numbers
// - numbers literally

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let notQuite = 0.2 + 0.1;
console.log(notQuite);
// JS rounds out a certain number, so if math is needed

let javaScriptMath = (0.2 * 10 + 0.1 * 10) / 10;
console.log(javaScriptMath);

let convert= Number('123');
console.log(convert);

console.log(typeof convert);

// Strings
// - strings are used to represent text and they are wrapped in either single or double quotes

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let inception = "I've";
let singleQ = 'I\'ve';
console.log(inception,singleQ)

// numbers vs strings
let first = 1050 + 100;

let second = '1050' + '100';
// Analogy... writing 1050 on one sticky note and writing 100 on another sticky note and placing them next to each other.
console.log(first);
console.log(second);
// we can use an operator called 'typeof' that returns a string that tells us exactly what our variable "type" is

let stringToNumber = Number('1150')
console.log(stringToNumber);
console.log(typeof stringToNumber);

const log = console.log; // We can reduce our typing by setting console log to a variable that doesnt change.
// log('test');

// Objects
// - Objects are used to store many values instead of a singular value
// - consider these as a collection of various properties
// - denoted by a curly brackets: {}

let frodo = {
    race: 'hobbit', // string
//   (1)   (2)
    rings: 1, // number
    cloak: true // boolean
};
console.log(frodo);
console.log(typeof frodo);
//1: Key
//2: Value


// Arrays
// - Arrays are containers that hold lists of items
// denoted by square brackets: []
// all items are within the square bracket.
// regardless of datatype, each item is separeted by a comma

let arrayList = ['pos 1', 'pos 2', 'pos 3'];
console.log(arrayList);
let anotherExample = [1, 2, 'three', true]
console.log(anotherExample);

let burritos = [ 'large', 4, true]
console.log(burritos);
console.log(typeof burritos)

// ADDITION VS CONCATENATION

/**
    - JS sees the "+" symbol in two different ways.
    - When combined with numbers, uses built-in math functionality.
    - When combined with strings, it ignores the math and concats the two strings
 */

 let strings = 'one' + ' ' + 'is a number';
 let concatDiff = 1050 + '100';
 console.log(strings);
 console.log(concatDiff);
 console.log(typeof concatDiff);


 /*
 CHALLENGE
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/
let firstName = 'David';
let lastName = 'Petrie';
let houseNumber = 5818;
let aptNumber = 'H';
let street = 'cross creek circle';
let city = 'Indianapolis';
let state = 'Indiana';
let zipcode = 46254;
console.log(houseNumber, street, city, state, zipcode)

//