// comment
        
/*
comment
*/

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


