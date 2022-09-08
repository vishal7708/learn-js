// oops 
// in object variable => property and function => methods

//below mothod of creating object is called "object literal"
/*
let employee = {
    baseSalary:3000,
    overTime:50, 
    rate:20,

    netWage: function() {
        return this.baseSalary + (this.overTime * this.rate);
    }
}
console.log(employee.netWage());

const circle = {
    radius: 1, 
    location: {
        x: 1,
        y:2
    },
    draw: function() {
        console.log('This is Vishal')
    }
}

circle.draw();


// constructor function

// => naming of the constructor function is like "First latter should be capital"

// function Circle(radius) {
//     this.radius = radius;
//     this.draws = function() {
//         console.log("This is a constructor")
//     }
// }

// const another = new Circle(10);


// primitive are copied by its values
// objects are copied by its reference

let a = 1;
let b = a;
a = 2;
// output will be b = 1

let x = {value: 10};
let y = x;

x.value = 20;
// output will be y = 20

console.log(x)
console.log(y)


// hence primitives are copied by its number
let number = 10;

function increase(number) {
    return number++;
}

increase(number)
console.log(number);

// if
let obj = {key: 20};
function theIncrease(obj) {
    obj.key++
}
theIncrease(obj);
console.log(obj);

// // this is constructor
// function Points(p1) {
//     this.p1 = p1;
//     this.draw = function() {
//         console.log('This is constructor')
//     }
// }

// // this is declaration of object 
// const points = new Points(10);
// points.draw()
// */

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('The draw')
//     }
// }

// const circle = new Circle(10);
// console.log(circle.radius);
// console.log(circle.draw());

// console.log('Loop is below');

// for (let key in circle) {
//         console.log(key)

    
//}

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('This is draw')
    }
}

const circle = new Circle(10);
// dot notation to access the properties

circle.location = {x : 1}

// bracket notation 
// use bracket notation if you have any space and special character used in property name
circle['coordinate-value'] = 10;

// to delete any property in object
delete circle.location;
delete circle['coordinate-value'];

console.log(circle);

//this is to print properties
console.log("\" =>this is to print properties of objects\" ")
for (let key in circle) {
    console.log(key)
}

