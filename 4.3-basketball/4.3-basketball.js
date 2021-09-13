function averageScore(game1, game2, game3) {
    return (game1 + game2 + game3) / 3;
}

let johnTeam = averageScore(89, 120, 103);
let mikeTeam = averageScore(116, 94, 123);
let maryTeam = averageScore(97, 134, 105);

winner = Math.max(johnTeam, mikeTeam, maryTeam);
let winnerName;
switch (winner) {
    case johnTeam:
        winnerName = `John's Team`;
        break;
    case mikeTeam:
        winnerName = `Mike's Team`;
        break;
    case maryTeam:
        winnerName = `Mary's Team`;
        break;
}

if (mikeTeam === johnTeam || mikeTeam === maryTeam || johnTeam === maryTeam) {
    winnerName = `...nobody`
}
    console.log(`The winner is ${winnerName}`);
