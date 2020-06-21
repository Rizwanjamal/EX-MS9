var initialUserId = 10000;

function onSubmit(e) {
  e.preventDefault();
  var userName = document.getElementById('exampleInputUsername').value;
  var userAge = document.getElementById('exampleInputAge').value;
  var userEmail = document.getElementById('exampleInputEmail1').value;
  var userPassword = document.getElementById('exampleInputPassword1').value;

  var user = {
    userName: userName,
    userAge: userAge,
    userEmail: userEmail,
    userPassword: userPassword,
    createdAt: new Date(),
    userId: ++initialUserId
  };
  
  var parsedArray = [];
  var users = localStorage.getItem('users');
  if (users) {
    parsedArray = JSON.parse(users);
  }
  parsedArray.push(user);
  var updatedArray = JSON.stringify(parsedArray);
  localStorage.setItem('users', updatedArray);
  document.getElementById('signup').reset();
};