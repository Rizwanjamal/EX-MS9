var studentsNames = ["Rizwan","Salman","Danish"];
alert(studentsNames)

studentsNames[0] //Rizwan
studentsNames[1] //Salman
studentsNames[2] //Danish
studentsNames[3] //Undefined

alert(studentsNames[2]) //Danish

//To Get The Total Length Of Array
studentsNames.length //3

var arrayLength = studentsNames.length
studentsNames[arrayLength-1] // Accessing the last index value

/////////////////Table Printing Using For Loop////////////////////////////

var userInput = prompt("Enter Number ? ", 5)
// 2 x 1 = 2


// Steps:
//1 variable initialization with starting value
//2 condition when to break the loop
//3 Increment or decrement criteria
for(var i = 1; i <= 10; i++) {
    console.log(userInput + " x " + i + " = " + userInput*i )
}

/////////////////////////////////////

studentsNames.push("Faizan") //updated Length = 4
studentsNames.push("Hammad") //updated Length = 5

studentsNames.pop() // Hammad

studentsNames.unshift("Kamran") //Adding Kamran at 0 index
studentsNames.shift() // Removing 0 index value i.e; Kamran


studentsNames.splice(1, 0, "Faizan", "Khursid")
studentsNames.splice(1, 1)


//////////////////////////////////////////////////

// Removing value as per user provided data
var index = prompt("Enter Index Number To Remove From ", 0)
var itemsNoToRemove = prompt("Enter Items length To Remove", 0)

studentsNames.splice(index, itemsNoToRemove)


//////////////////////////////////////////////////

// Find
var names = ['salman', 'rizwan', 'ahmed']

function findCriteria (name) {
    console.log('name : ', name);
    return name == 'salman' // true/false    
}

names.find(findCriteria)

////////////////////////////////////////////////

// Filter
var names = ['salman', 'rizwan', 'SaLmAn'];

function findCriteria (name) {
    console.log('name : ', name);
    return name.toLowerCase() == 'salman'; // true/false
}
// 1st method of using callback
var findValue = names.filter(findCriteria);

// 2nd method of using callback
var findValue = names.filter(function (name) {
    return name.toLowerCase() == 'salman';
});

/////////////////////////////////////////////////////

// findIndex
names = ['Rizwan', 'salman', 'salman'];

userInput = prompt('Enter name to remove');

var findValue = names.findIndex(function (name) {
    return name.toLowerCase() == userInput.toLowerCase();
});

names.splice(findValue, 1);

////////////////////////////////////////////////////

// concat
a = [1,2,3];
b = [4,5,6];
c = a.concat(b);

var nums = [];

/////////////////////////////////////////////////////

// isArray
Array.isArray(true) //false
Array.isArray([]) //true
Array.isArray(null) //false

////////////////////////////////////////////////////

// Array.from
Array.from('salman'); // ["s", "a", "l", "m", "a", "n"]0: "s"1: "a"2: "l"3: "m"4: "a"5: "n"length: 6__proto__: Array(0)
Array.from('salman', function (char) {
    return char + 'am';
});
// ["sam", "aam", "lam", "mam", "aam", "nam"]0: "sam"1: "aam"2: "lam"3: "mam"4: "aam"5: "nam"length: 6__proto__: Array(0)

Array.from(['s'], function (char) {
    return char + 'am';
});

// ["sam"]

///////////////////////////////////////////

// Reverse
var a = [1,2,3]
a.reverse() // [3,2,1]

////////////////////////////////////////////

// includes
[1,2,3].includes(4) //false
[1,2,3].includes(3) //true

/////////////////////////////////////////////

// join
var a = ['s','a','m'];
a.join(' ') // "s a m"
a.join('')  // "sam"
a.join('-') // "s-a-m"

/////////////////////////////////////////////

// map
a = [1,2,3];
a.map(function (num) {
    return num*2;
})


// remove Duplication Using IndexOf
function removeDuplicates(numbers) {
    numbers.forEach(function (number){
        if (nums.indexOf(number) < 0) { // -1
            nums.push(number);
        }
    })
}

var numbers = [1,2,3,4,4,3,2,1,5];
removeDuplicates(numbers);




