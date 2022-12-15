function RockPaperScissors(input){
//Type rock, paper or scissors in the input of the function at the end of the code :)
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors"; 

let playerTurn=input;  

let computerTurn;

if (playerTurn == "rock" || playerTurn == "Rock") {
    playerTurn = rock;
}
else if (playerTurn == "paper" || playerTurn == "Paper") {
    playerTurn = paper;
}
else if (playerTurn == "scissors" || playerTurn == "Scissors") {
    playerTurn = scissors;
}
else {
    console.log("The input is invalid! Try putting a valid one!");
    return;
}
console.log("You choose " + playerTurn);

let randomNumber = Math.floor(Math.random() * 3) + 1;

switch (randomNumber) {
    case 1:
        computerTurn = rock;
        break;
    case 2:
        computerTurn = paper;
        break;
    case 3:
        computerTurn = scissors;
        break;
}

console.log(`The computer chooses ${computerTurn}`);

if ((playerTurn === rock && computerTurn === scissors) || (playerTurn === paper && computerTurn === rock) || (playerTurn === scissors && computerTurn === paper)) {
    console.log('\x1b[33m You win! \x1b[0m');
}
else if ((playerTurn === rock && computerTurn === paper) || (playerTurn === paper && computerTurn === scissors) || (playerTurn === scissors && computerTurn === rock)) {
    console.log('\x1b[33m You lose! \x1b[0m'); 
}
else if ((playerTurn === rock && computerTurn === rock) || (playerTurn === paper && computerTurn === paper) || (playerTurn === scissors && computerTurn === scissors)) {
    console.log('\x1b[33m Draw! \x1b[0m');  
}
}
RockPaperScissors("paper"); 
