var mark = {
    fullName: "Mark Lastname",
    mass: 80,
    height: 1.8,
    bmi: undefined,
    calculateBMI: function() {
        this.bmi = this.mass / this.height^2;
        return this.bmi
    }
}

var john = {
    fullName: "Mark Lastname",
    mass: 70,
    height: 1.6,
    bmi: undefined,
    calculateBMI: function() {
        this.bmi = this.mass / this.height^2;
        return this.bmi
    }
}

if (mark.calculateBMI() > john.calculateBMI()) {
    console.log("Mark has the higher BMI");
    console.log(mark.calculateBMI())
} else if (mark.calculateBMI() < john.calculateBMI()) {
    console.log("John has the higher BMI");
    console.log(john.calculateBMI())
} else {
    console.log("Both have the same BMI");
    console.log(mark.calculateBMI())
}
