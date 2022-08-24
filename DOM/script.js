
// LEARNING DOM MANIPULATION


const container = document.querySelector('.container');
// creates new div
const div = document.createElement('div');


// append child as the last element of parentnode
container.appendChild(div);

// adds color to div
// you have write backgroundColor instead of background-color in js
// div.style.color = 'blue'; /

// adds several style rules 
// here 
div.style.cssText = 'background-color: green; height: 100px; width: 100px;';

// div.setAttribute('style', 'color: blue; background-color: green;');
// adds several style rules

// adding id to newly created div
div.setAttribute('id', 'theDiv');

/*
// div.removeAttribute('id');
div.removeAttribute('id')
*/


// --------------------------------------------
// started writing comment below the code line

/*
div.classList.add('new')
// adds class 'new' to your new div
*/

/*
div.classList.remove('new');
// removes class name new
*/

/*
div.classList.toggle('active');
// this will add class 'active' if you dont have
// if you you have then it will remove it
*/

div.textContent = 'Hello World!';
// creates a text node containing 'Hello World!' and 
// insert it in div

div.innerHTML = '<span>Hello World!</span>';
// renders the HTML inside div

console.log(div);

// LET'S REVISE, WHAT WE HAVE LEARNED


const revise = document.querySelector('.revise');

const div_1 = document.createElement('div');
div_1.classList.add('div_1');
div_1.setAttribute('style', 'background-color: yellow; height: 100px; width: 100px');
div_1.textContent = 'This is Vishal'
// div_1.innerHTML = '<h1>Hello</h1>';

revise.appendChild(div_1);



console.log(div_1);


const prac = document.querySelector('.prac');
prac.setAttribute('style', 'background-color: green');

const para = document.createElement('p');
para.setAttribute('style', 'color: red');
prac.appendChild(para);

const h3 = document.createElement('h3');
h3.textContent = ' I\'m a blue h3!'
h3.setAttribute('style', 'color: blue');
para.textContent = 'This is Vishal';
prac.appendChild(h3);

const underDiv = document.createElement('div');
underDiv.setAttribute('style', 'border: 1px solid black; background-color: pink');
const h1 = document.createElement('h1');
h1.textContent = " I'm in div";
const pa = document.createElement('p');
pa.textContent = "ME TOO!";

prac.appendChild(underDiv);
underDiv.appendChild(h1);
underDiv.appendChild(pa);

// The Event

let btn = document.querySelector('#btn');
// btn.onclick = () => alert('Hello another world');

// btn.addEventListener('click', () => {
//     alert("Hello World!")
// });

btn.addEventListener('click', function (e) {
    console.log(e);
})


let anonymousFunction = function(music, play) {
    if (play) {
        console.log('play ' + music);
    }
}


const arrowFunctionn = () => {
        console.log('This is arrow function');
}

console.log(arrowFunctionn);

const notes = ['do', 're', 'me'];

notes.forEach((note) => console.log(note));

function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

const myArray = [2, 3, 4, 2];

myForEach(myArray, item => console.log(item + 2));

const btn1 = document.querySelector('#btn1');


let btnn = document.querySelector('#btnn')
function alertFunction() {
    alert('Yeah, you did this')
}

btnn.onclick = alertFunction;
btnn.addEventListener('click', alertFunction)

let click = document.querySelector('#click');

click.addEventListener('click', function(e) {
    e.alert('This is e alert')
});


