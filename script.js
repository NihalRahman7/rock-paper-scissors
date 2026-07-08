const MAX_SCORE = 5;

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


let humanSelection = undefined;

const answerContainer = document.querySelector("#answer");
const answer = document.createElement("p");

const choices = ["rock", "paper", "scissors"];
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const buttons = document.querySelectorAll(".button");

let humanScoreMsg = document.querySelector("#humanScoreMsg");
let computerScoreMsg = document.querySelector("#computerScoreMsg");
let humanScore = 0;
let computerScore = 0;

function disabledButtons(){
    buttons.forEach(button => {
        button.disabled = true;
    });
}

buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        const clickedButton = event.currentTarget;
        
        if (clickedButton.textContent = "Rock"){
            humanSelection = choices[0];
            const computerSelection = getComputerChoice();
            let message = playRound(humanSelection, computerSelection);

            if (message.includes("tie")){
                answer.textContent = message;
                answerContainer.append(answer);
            } 
            if (message.includes("win")){
                humanScoreMsg.textContent = `Human score: ${++humanScore}`
                answer.textContent = message;
                answerContainer.append(answer);
            }    
            if (message.includes("lose")){
                computerScoreMsg.textContent = `Computer score: ${++computerScore}`;
                answer.textContent = message;
                answerContainer.append(answer);
            }

            if (humanScore == MAX_SCORE){
                answer.textContent = "You won the game! Congratulations!";
                disabledButtons();
            }
            if (computerScore == MAX_SCORE){
                answer.textContent = "The computer won the game. Better luck next time.";
                disabledButtons();
            }
        }

        else if (clickedButton.textContent = "Paper"){
            humanSelection = choices[1];
            const computerSelection = getComputerChoice();
            let message = playRound(humanSelection, computerSelection);

            if (message.includes("tie")){
                answer.textContent = message;
                answerContainer.append(answer);
            } 
            if (message.includes("win")){
                humanScoreMsg.textContent = `Human score: ${++humanScore}`
                answer.textContent = message;
                answerContainer.append(answer);
            }
            if (message.includes("lose")){
                computerScoreMsg.textContent = `Computer score: ${++computerScore}`;
                answer.textContent = message;
                answerContainer.append(answer);
            }

            if (humanScore == MAX_SCORE){
                answer.textContent = "You won the game! Congratulations!";
                disabledButtons();
            }
            if (computerScore == MAX_SCORE){
                answer.textContent = "The computer won the game. Better luck next time.";
                disabledButtons();
            }
        }

        else if (clickedButton.textContent = "Scissors"){
            humanSelection = choices[2];
            const computerSelection = getComputerChoice();
            let message = playRound(humanSelection, computerSelection);

            if (message.includes("tie")){
                answer.textContent = message;
                answerContainer.append(answer);
            } 
            if (message.includes("win")){
                humanScoreMsg.textContent = `Human score: ${++humanScore}`
                answer.textContent = message;
                answerContainer.append(answer);
            }
            if (message.includes("lose")){
                computerScoreMsg.textContent = `Computer score: ${++computerScore}`;
                answer.textContent = message;
                answerContainer.append(answer);
            }
        }

        if (humanScore == MAX_SCORE){
            answer.textContent = "You won the game! Congratulations!";
            disabledButtons();
        }
        if (computerScore == MAX_SCORE){
            answer.textContent = "The computer won the game. Better luck next time.";
            disabledButtons();
        }
    })
    
    
})


