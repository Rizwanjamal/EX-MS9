// Palindrome Function -> Check either the word is palindrome or not ?

// function isPalindrome(word) {
//   //step-1 "madam" initialize empty var "reverseWord"
//   // for loop completely over word in reverse direction
//   //  reverseWord = "madam"
//   // after the looping execution we will compare both words 
//   // word === reverseWord // true
//   var reverseWord = '';
//   for(var i = word.length; i >= 0; i--) {
//     reverseWord += word.charAt(i)
//   }
//   console.log('reverseWord : ', reverseWord);
//   alert(reverseWord == word);
// }

function isPalindrome(word) {
  // Step-1 MADAM -> ['M', 'A', 'D', 'A', 'M']
  // Step-2
  // reverse that array ['M', 'A', 'D', 'A', 'M']
  // Step-3
  // Join that array element MADAM
  var reverseWord = word.split('').reverse().join('');
  alert(reverseWord == word);
}

function checkCountryExistance() {
  var countries = [
    'Pakistan',
    'India',
    'China',
    'Bangladesh'
  ];
  userInput = prompt('Enter country name ?', 'Pakistan');
  alert(countries.includes(userInput));
}

function getMonthName() {
  var months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  userInput = prompt('Enter Month Number ?', 1);
  (userInput - 1 < 0 || userInput >= 13) ? 
    alert("Invalid Number") : 
    alert(months[userInput - 1]);
}