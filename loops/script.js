// loops

// while loop 
// -- when you don't have condition use while loop

// let y = 1;

// while(y <= 5) {
//     console.log('Hello ' + y);
//     y++;
// }


// for loop 


// for (let i = 1; i <= 5; i++) {
//     console.log(' for Hello ' + i);
// }

// // switch statement

// switch (day) {
//     case "mon":
//         console.log('Morning')
//         break;
//     // default is like else
//     default:
//         console.log('Keep dreaming...')
// }


// function
/*
function add(num1, num2, num3) {
    console.log(num1 + num2);
}

add(2, 4);  
*/

// ---------- objects -------------

/*
const myCar = new Object();
myCar.brand = 'BMW';
myCar.model = '3 series';
myCar.engeen = '2.1 L';
myCar.color = 'blue';

console.log(myCar)

const student = {
    "name": 'Vishal',
    "age": 20,
    "class": '1st-year',
    "subject": {
        "c-language": 9,
        "javascript": 10 
    }, 
    "year-of-graduation": 2024
}

console.log(student)

*/

//---- functions



let add = function(n1, n2) {
    return n1 + n2;
}

// add(10, 30);

/*
let result = add(10, 20);
console.log(result)

let resu = add // that is assigning a function
let resul = add() //calling a function
*/

// let sub = (a1, a2) => {
//     return a1 + a2;
// }

// console.log(sub(20, 10));

// let students = new Object();
// students.name = "Vishal";
// students.age = 20;
// students.batch = 2024;
// students.add = 'Surat';

// console.log(students)


// --------------------------------------------------
// the consturctor 
//what if you have to write hundreds of student detail as objects
// you can use constructor
// "this" keyword refere to the object


function Students(name, age, clas, batch) {
    this.name=name;
    this.age=age;
    this.clas=clas;
    this.batch=batch;
}

let student1 = new Students('Vishal', 20, 'btech', 2024);
let student2 = new Students('Rahul', 21, 'btech', 2025);

console.log(student1)
console.log(student2)
