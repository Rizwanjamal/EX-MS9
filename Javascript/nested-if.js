var userInput1 = prompt("Enter your favourite dish ?")
var userInput2 = prompt("Enter your favourite desert ?")
if (userInput1.toLowerCase() == 'Biryani'.toLowerCase()) {
  if (userInput2 == 'Kheer') {
    alert('Wow ! Yummy .. both are my favourite too')
  } else {
   alert('I love Kheer in desert') 
  }
} else {
  alert('You dont like Biryani ?')
}