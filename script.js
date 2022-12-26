// comment
        
/*
comment
*/

/*

var firstname = "John";
console.log(firstname);

console.log(typeof firstname);

var employmentStatus = "employed";

if(employmentStatus === "unemployed") {
    console.log("Get a job!")
} else {
    console.log("You go!")
}

var job = "Handcrafter";

switch(job) {
    case "Teacher": console.log("Nice"); break;
    case "Handcrafter": console.log("Cool"); break;
    default: console.log("YOLO"); 
}

var age = 12;

switch(true) {
    case age < 13: console.log("a"); break;
    case age > 13: console.log("b"); break;
}

for(var i = 0; i <= 9; i++) {
    console.log(i);
}

var i = 0;

while(i < 10) {
    console.log(i);
    i++;
}

// function declartion
function calculateAge(yearOfBirth) {
    return 2018 - yearOfBirth;
}

// function expression
var returnName = function(name) {
    return name;
}


// an object but not a class
var john = {
    firstName: "John",
    lastName: "Johnson",
    returnName: function() {
        return this.firstName + " " + this.lastName;
    }
}

john.firstName = "Peter";
john["firstName"] = "Hugo";

console.log(john.returnName());

// array
var names = ["Peter", "Hugo", 1, true];

names[1] = "Paul";
names.push(3);
names.unshift("Add this");
names.pop();
john.shift();

console.log(names[0]);
console.log(names.length);




const x = 1;
let y = 2;
// are block-scoped
const z = 'thishaha';

console.log(`This is ${x}`);
// to write strings more easily

// other useful functions are:
console.log(z.startsWith("j"));
console.log(z.endsWith("j"));
console.log(z.includes("j"));

// use the map function to apply a function to all functions in an array

var a = [123, 123, 1345, 1345, 12345];
var b = a.map(function(x) {return 2000 - x});
console.log(b);

// alternatively:

var c = a.map((x, index) => 2000 - x + index);
// the second argument is the index in the array
console.log(c);

// the spread operator ... takes elements out of an array

const family1 = ['Peter', 'Jane'];
const familty2 = [...family1, 'Jorg'];

// the rest operator turns single values into a value array

// maps are a data structure like dictionaries for which the keys can be of any type

const test1 = new Map();
test1.set(true, 'output');
test1.set(1, 'thisIs');
console.log(test1);
console.log(test1.get(true));
// test1.delete(1);
// console.log(test1.has(1));
// test1.clear();

test1.forEach((value, key) => console.log(value, key));

// there are also classes in JavaScript => are not hoisted

// make JS asynchronous with the setTimeout function
function test2() {
    console.log("Hi1");
    setTimeout(() => {console.log("Hi2");}, 1000);
    console.log("Hi3");
}

test2();

// create a promise object that always resolves by outputting a string
const getIDs = new Promise((resolve, reject) => {
    resolve("Hi4");
});

// getting the result of the fulfilled promise
getIDs.then(IDs => {
    console.log(IDs);
});

// one can also catch rejections
getIDs.catch(error => {console.log(error);});

// to consume promises in a structured manner; the async function runs in the background => callback
async function test3() {
    const IDs = await getIDs;
    console.log(IDs);
}

test3().then(IDs => {console.log(IDs)});

*/

// programming a JS API
// returns a promise => consume it
// convert JSON to JS object
// the JSON method also returns a promise

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(results => {return results.json();})
    .then(data => {console.log(data);})
    .catch();

