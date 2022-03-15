// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Set a variable called name and set it to Dane.
// Verify if name is equal to Mary (true). name is equal to Mary, so
// we console.log 'Hi, Mary!'.
// If name is not Mary (false), then console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Set a variable called secret. Set a variable called code equal to 123.
// if variable code is equal to 123, then variable secret is equal to super.
// variable code is equal to 123, so variable secret equals 'super', therefore variable code is multiplied by 2.
// if variable code is greater than 250, then variable secret equals 'duper'. variable code is equal to 246 (false), so
// we console.log 'secret'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// set the variable isStudent equal to true. set the variable age equal to 34. set the variable zip to 55407.
// if the variable isStudent is equal to true and the variable zip is greater than 80000, then console.log 'You're a student on the West Coast!', but
// if the variable isStudent is equal to false and the variable age is less than 30, then console.log 'What are your hobbies?', but
// if the variable isStudent is equal to true, then console.log 'Welcome to Prime!'. If the variable equals otherwise, then console.log 'How about the weather?'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne = 'red' is set to the incorrect value. Instructions ask for the variable, colorOne, to be set to 'blue'.
// Should be colorOne = 'blue'.
let colorOne = 'red';
// FIX - colorTwo = 'blue' is set to the incorrect value. Instructions ask for the variable, colorTwo, to be set to 'red'.
// Should be colorTwo = 'red'.
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// FIX - colorTwo = 'purple', is missing. Instructions state that if mix has a true value, then both the variables, colorOne and colorTwo, both change their value to purple.
// Should be colorTwo = 'purple'.
  
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX - const time = 4 is the wrong type of variable. With Time being a variable that may change and not constant, let should be used instead of const.
// Should be let time = 4.
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - if(minAge <= age) does not check if age is greater than or equal to the minAge. Replace lesser than sign with greater than sign. Swap places of the variables minAge and age.
// Should be if(age >= minAge).
if(minAge <= age) {
// FIX - console.log('no entry') should have a value of entry. Instructions state that if(age >= minAge) is true, then console.log('enter').
// Should be console.log(entry).
  console.log('no entry');
// FIX - else { console.log('enter') is not listed in instructions. Delete else {console.log('no entry')}.
// Should be deletd to match instructions.
} else {
  console.log('enter');
}
*/

