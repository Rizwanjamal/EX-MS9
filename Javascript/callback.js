// Creating Custom Callback functions

function greetings (name) {
  alert('Welcome '+ name);
}

function welcomeGreetings (calback) {
  var userName = prompt('Enter Your Name :');
  callback(userName);
}

welcomeGreetings(greetings)


//////////////////////////////

function generateReport (name, marks, callback) {
  var message;
  if (marks > 50) {
    message = name + ' has been passed with marks '+ marks;
  }
  else {
    message = name + ' has been failed with marks '+ marks;
  }
  callback(message)
}

function displayReport(message) {
  alert(message);
}

generateReport('Rizwan', 55, displayReport);
