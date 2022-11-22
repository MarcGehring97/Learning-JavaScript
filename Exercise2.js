function buildTriagnle(width) {
    if (width > 0) {
        var output = ""
        for (var i = 1; i <= width; i++) {
            console.log("*".repeat(i));
        }
    } else {
        console.log("Insert a positive integer");
    }
}

buildTriagnle(10);