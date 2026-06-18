//console.log("Hello World");

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice = "";

    if (randomNum === 0){
        choice = "rock";
    }
    else if (randomNum === 1){
        choice = "paper";
    }
    else if (randomNum === 2){
        choice = "scissors";
    }
    return choice;
}
//console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Pick between rock paper or scissors");
    return choice;
}
//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let message = "test";

    switch(humanChoice) {
        case humanChoice == "rock" && computerChoice == "paper":
            message = "You lose! Paper beats rock";
            computerScore++;
            break;
        case humanChoice == "rock" && computerChoice == "scissors":
            message = "You win! Rock beats scissors";
            computerScore++;
            break;
        case humanChoice == "paper" && computerChoice == "rock":
            message = "You win! Paper beats rock";
            computerScore++;
            break;
        case humanChoice == "paper" && computerChoice == "scissors":
            message = "You lose! Scissors beats paper";
            computerScore++;
            break;
        case humanChoice == "scissors" && computerChoice == "paper":
            message = "You win! Scissors beats paper";
            computerScore++;
            break;
        case humanChoice == "scissors" && computerChoice == "rock":
            message = "You lose! Rock beats scissors";
            computerScore++;
            break;
    }

    return message;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
console.log(playRound())