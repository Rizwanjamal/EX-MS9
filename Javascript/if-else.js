// var userName = prompt("Enter Your Name ?")
// var userGender = prompt("Enter Your Gender ?", "Male");
// console.log("userName :", userName);

// var text;
// if (userGender == 'Male') {
//   console.log('user gender is Male')
//   text = 'His' 
// } else {
//   console.log('user gender is Female')
//   text = 'Her' 
// }

// alert("Welcome new student to our class ! " + text + " name is " + userName)

/////////////////////////////////////////////////////////


// var politianName = prompt("Enter your favourite politician ?")
// if (politianName == "Nawaz Sharif") {
//   alert("Mujhe Kyun Nikala ?")
// }
// else if (politianName == "Zardari") {
//   alert("ek zardari sab pe bhaari")
// }
// else if (politianName == "Bilawal Bhutto") {
//   alert("Ziada Barish Hoti to Ziada Paani Ataa Hai :D ")
// }
// else {
//   alert("Billo Raani ")
// }

////////////////////////////////////////////////////////////

// var userInput = prompt("Enter Number ?")
// var a;
// if (userInput % 2 === 0) {
//   alert(userInput + " Is Even")
//   a= userInput+4
// } else {
//   alert(userInput + " Is Odd")
//   a= userInput*4
// }
// console.log(a)

/////////////////////////////////////////////////////////////

var userAge = prompt("Enter your age ?")
if (userAge >= 1 && userAge <= 40) {
  alert("You are still young now :D ")
} else if (userAge > 40 && userAge <= 100) {
  alert("You gonna become Old :D ")
} else {
  alert(" Please Enter Valid Age ")
}
