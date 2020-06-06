////////////////////////////

function program1 () {
  var index = prompt("Enter Index Number To Remove From ", 0);
  var itemsNoToRemove = prompt("Enter Items length To Remove", 0);
  studentsNames.splice(index, itemsNoToRemove);
}

program1();

////////////////////////////

var a;
function abc () {
    console.log(a); // undefined
    console.log(b); // Reference Error
    a = 2;
    console.log(a); // 2
}

console.log(a); //undefined
abc(); // func calling


///////////////////////////////////
// Sum Function
function sum (num1,num2) { // parameters
  var result = num1 + num2;
  return result;
}

// Another Example
var result;
function sum (num1,num2) { // parameters
    result = num1 + num2;
    return result;
}

var output = sum(2,5) //arguments

sum(2,5) //arguments


// Even Odd Number

function checkEven (num) {
  if (num % 2 === 0) {
      return "It's an even number";
  } else {
      return "It's an odd number";
  }
}

// Code Optimization
function checkEven (num) {
  if (num % 2 === 0) 
      return "It's an even number";
  else 
      return "It's an odd number";
}

// Code Optimization
function checkEven (num) {
  if (num % 2 === 0) return "It's an even number";
  return "It's an odd number";
}

function changeCase (text, textCase) {
  if (textCase == "lowercase")
      return text.toLowerCase();
  else if (textCase == "uppercase")
      return text.toUpperCase();
  else
      return "Enter Correct Case";
}

///////////////////////////////////////////////////
// No. of occurances of The or the
var a = "The quick brown fox jumps over the lazy dog";
a = a.replace('The', 'the');
var count = a.split('the').length - 1;

// method 2
b = a.split(' ');
var count = 0;
b.forEach(function (word) {
    if (word.toLowerCase() == 'the') {
        count++;
    }
})
