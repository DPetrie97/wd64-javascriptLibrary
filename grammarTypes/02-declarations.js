/*
* *******
! Variables
* *******
*/

console.log('hello');
// Debugging tool

let a = 2;

/**
 - let : is our KEYWORD
 - a : is our NAME of our variable
 - = : ASSIGNMENT operator
 - 2 : variable VALUE
 */

 let b = 1;

 console.log(a + b);

 //! RESTRICTIONS
 /**
    - A variable name must begin with a letter, underscore, or a dollar sign.
    - numbers may follow the above characters, BUT cannot come first.
    - javascript IS case sensitive - 'hello' and 'Hello', these would be different variables.
    - no spaces are allowed in variable naming.
    - camelCase is the best practice for naming
    - ex:
        let myName = 'David';
        is easier to read than
        let myname = 'David';
  */

  let startingWithLetter = "Works";
  let _startWithUnderscore = "Works";
  let $startWithDollarSign = "Works";
  // let 4startsWithNumber = "Breaks";
  console.log(startingWithLetter,_startWithUnderscore,$startWithDollarSign);

  let PascalCase;
  let camelCase;
  let snake_case;

  /**
   KEYWORDS

   var, let, and const

   - var: 'old' keyword for variable. ** We won't be using it as often but is still a viable one to use

   - let: 'new' keyword for variable. (introduced with ES6 *newest version of ECMAScript, which is a standarization of JS)

   - const: also 'new' keyword that declares an UNCHANGEABLE, or constant, or variable
   */

   var variable = 'var variable';
   let letVariable = 'let variable';

   // let function = 1;

   /**
    ******
    ! Declarations & Initializations
    ******
    */

    //declarations are the LEFT SIDE of the assignment operator
    //let x; 

    // Initialization are the RIGHT SIDE of the assignment operator
    // let x = 10

    // 10 is our initialization

    let y;
    console.log('declaration: ', y);

    y = 10;
    console.log('initialization: ', + y);

    y = 33;
    console.log('initialization 2: ', y);
    // var y

    let z = "light";
    console.log(z);

    // We've set our variable with our let keyword. With each iteration, we have redeclared what it is.