var johnsFamily = {
    bills: [124, 48, 268, 180, 42],
    tipCalculator: function() {
        var tips = [];
        var finalAmount = [];
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var tip = undefined;
            if (bill < 50) {
                tip = bill * 0.2;
            } else if (bill >= 50 && bill <= 200) {
                tip = bill * 0.15;
            } else {
                tip = bill * 0.1;
            }
            tips.push(tip);
            finalAmount.push(bill + tip)
        }
        return [tips, finalAmount]
    }
}

var marksFamily = {
    bills: [77, 375, 110, 45],
    tipCalculator: function() {
        var tips = [];
        var finalAmount = [];
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var tip = undefined;
            if (bill < 100) {
                tip = bill * 0.2;
            } else if (bill >= 100 && bill <= 300) {
                tip = bill * 0.1;
            } else {
                tip = bill * 0.25;
            }
            tips.push(tip);
            finalAmount.push(bill + tip)
        }
        return [tips, finalAmount]
    }
}

function averageTip(tips) {
    var tipSum = 0;
    for (var i = 0; i < tips.length; i++) {
        tipSum += tips[i]
    }
    return tipSum / tips.length
}

var johnsFamilyAverage = averageTip(johnsFamily.tipCalculator()[0]);
var marksFamilyAverage = averageTip(marksFamily.tipCalculator()[0]);

if (johnsFamilyAverage > marksFamilyAverage) {
    console.log("John's family paid the higher average tip");
    console.log(johnsFamilyAverage)
} else if (johnsFamilyAverage < marksFamilyAverage) {
    console.log("Mark's family paid the higher average tip")
    console.log(marksFamilyAverage)
} else {
    console.log("Both families paid the same tip")
    console.log(johnsFamilyAverage)
}