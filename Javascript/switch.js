function getMonthName() {
  var number = prompt('Enter Number ?', 1);
  switch(+number) {
    case 1:
      console.log('January');
      break; // necessary
    case 2:
      console.log('February');
      break;
    default:
      console.log('Invalid Number');
  }
}