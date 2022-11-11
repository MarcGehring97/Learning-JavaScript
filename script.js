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
    console.log(i)
}