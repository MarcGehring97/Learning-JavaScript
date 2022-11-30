function daysUntilBirthday() {
    const inputDate = new Date(document.getElementById("dateForm").value);
    const today = new Date();
    inputDate.setFullYear(today.getFullYear());
    // Setting the same year
    
    const pattern = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/

    const diff = (inputDate.getTime() - today.getTime())/(1000 * 60 * 60 * 24)

    // Converting milliseconds to days
    // getTime() returns the number of milliseconds since midnight Jan 1 1970, and a specified date

    if (document.getElementById("dateForm").value.match(pattern)) {
        if (inputDate.getMonth() > today.getMonth()) {
            document.getElementById("output").innerHTML = (Math.round(diff).toString() + " days")
        } else {
            document.getElementById("output").innerHTML = (Math.round(365 + diff).toString() + " days")
        }
        return true
    } else {
        document.getElementById("output").innerHTML = "Please enter a valid date"
        return false
    }
}



