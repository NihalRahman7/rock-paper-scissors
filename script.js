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

function getHumanChoice() {
    let choice = prompt("Pick between rock paper or scissors").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let message;

    if (humanChoice == "rock" && computerChoice == "paper"){
        message = "You lose! Paper beats rock"
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        message ="You win! Rock beats scissors"
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        message = "You win! Paper beats rock";
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        message = "You lose! Scissors beats paper";
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        message = "You win! Scissors beats paper";
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        message = "You lose! Rock beats scissors";
    }
    else if (humanChoice == computerChoice) {
        message = "It's a tie!"; 
    }

    return message;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        let message = playRound(humanChoice, computerChoice)
        console.log(computerChoice);
        console.log(humanChoice);
        console.log(message);

        if (message.includes("win")){
            humanScore++;
        }
        if (message.includes("lose")){
            computerScore++;
        }
    }

    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

    if (humanScore > computerScore) {
        console.log("The winner is the human!");
    }
    else if (humanScore == computerScore) {
        console.log("It's a tie!");
    }
    else {
        console.log("The winner is the computer!");
    }
}

playGame();