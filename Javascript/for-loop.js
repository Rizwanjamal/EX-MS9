
// Steps:
//1 variable initialization with starting value
//2 condition when to break the loop
//3 Increment or decrement criteria

// 2 x 1 = 2
var userInput = prompt("Enter Numnber ?", 5);
for(var i = 1; i <= 10; i++) {
  console.log(userInput + " x " + i + " = " + userInput*i );
}

// Looping in reverse direction
// 2 x 10 = 20
for(var i = 10; i >= 1; i--) {
    console.log(userInput + " x " + i + " = " + userInput*i )
}

var studentsNames = ["Rizwan", "Salman", "Danish"];

for(var i = 0; i < studentsNames.length; i++) {
  var studentIndex = i+1;
  console.log("Student "+ studentIndex + " Name is : " + studentsNames[i]);
}

// Looping in reverse direction
for(var i = studentsNames.length -1; i >= 0; i--) {
  var studentIndex = i+1;
  console.log("Student "+ studentIndex + " Name is : " + studentsNames[i]);
}
