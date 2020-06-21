function login(e) {
  e.preventDefault();
  var email = document.getElementById('exampleInputEmail1').value;
  var password = document.getElementById('exampleInputPassword1').value;

  console.log('email :', email);
  console.log('password :', password);

  if (!email || !password) {
    console.log('sowing error : ', email);
    swal({
      title: "Missing Details !",
      text: "Something is missing",
      icon: "error",
      button: "OK !",
    });
  } else {
    var users = localStorage.getItem('users');
    var parsedUsers = JSON.parse(users);
    console.log('parsedUsers :', parsedUsers);
  
    var user = parsedUsers.find(function(user) {
      return user.userEmail == email;
    });
  
    if (!user) {
      swal({
        title: "Not Found!",
        text: "No user found with this email",
        icon: "error",
        button: "OK !",
      });
    } else {
      if (user.userPassword == password) {
        swal({
          title: "Login Successfully !",
          text: "Redirecting to dashboard",
          icon: "success",
          button: "OK !",
        }).then(function () {
          window.location = './screens/dashboard/dashboard.html';
        });
      } else {
        swal({
          title: "Wrong Credentials !",
          text: "Please check your password",
          icon: "error",
          button: "OK !",
        });
      }
    }
  }
}