// error handling
// error = object with a description of something went wrong
           // can't open file
           // lose conection
           // user type incorrect input
           // type error
// throw = execute a user-define error
// finally = will always execute

try {
  // Block of code to try
  // May throw an error
} catch (error) {
  // Block of code to handle errors
  // Executed when an error occurs in the try block
} finally {
  // Block of code to be executed regardless of the try and catch result
}

/*
Example 1: typing error
===
try{ 
  console.lag() // typo
}
catch(error){
  console.log(error) // print error 
                     // TypeError: console.lag is not a function
}
*/

/*
//Example 2: Undetected error / logical error

try{
  let x = window.prompt("Enter a number:"); // will prompt window
  x = Number(x);

  if(isNaN(x)) throw "That is not a number!"; // if (x) is not a number
  if(x == "") throw "Insert a number!";       // if (x) is empty

  console.log(`${x} is a number`)
}
catch(error){
  console.log(error) // print the error
}
finally{ // finally key word will always execute the code regardless of error
  console.log("This will always execute.")
}
*/


