var johnsTeam = [89, 120, 103];
var mikesTeam = [116, 94, 123];

var johnsTeamAverage = 0

for (var number of johnsTeam) {
    johnsTeamAverage += number;
}

johnsTeamAverage = johnsTeamAverage / johnsTeam.length;

var mikesTeamAverage = 0

for (var number of mikesTeam) {
    mikesTeamAverage += number;
}

mikesTeamAverage = mikesTeamAverage / mikesTeam.length;

if (johnsTeamAverage > mikesTeamAverage) {
    console.log("John's team has the higher average score");
    console.log(johnsTeamAverage);
} else if (johnsTeamAverage < mikesTeamAverage){
    console.log("Mike's team has the higher average score");
    console.log(mikesTeamAverage);
} else {
    console.log("Both players' teams have the same score");
    console.log(mikesTeamAverage);
}

