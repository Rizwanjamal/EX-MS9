function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Student.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};


var student1 = new Student('Rizwan', 'Jamal');
student1.fullName() // Rizwan Jamal

var student2 = new Student('Salman', 'Jamal');
student2.fullName() // Salman Jamal

var student3 = new Student('Ajay', 'Devgun');
student3.fullName() // Ajay Devgun