// Function to establish possible choices that the computer play can choose from. 

function getComputerChoice(){
    let choiceArray = [ 
        "Rock",
        "Paper",
        "Scissors"
    ];

    let randomChoiceIndex = Math.floor(Math.random() * choiceArray.length);
    let randomElement = choiceArray[randomChoiceIndex]
    return randomElement;
    };

// Plays one round of Rock paper scissors, keeps track of the player score and outputs result to console. 

const btn_container = document.getElementById('btn-container');
btn_container.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    console.dir(event.target.id);
})

function playRound(playerSelection, computerSelection) {
if( playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    console.log("Draw!")
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore++;
        console.log("Paper beats Rock! You lose! Beta!!!")
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore++;
        console.log("Rock beats Scissors! You Win! Alpha!!!")
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerScore++;
        console.log("Scissors beats Paper! You Lose! Beta!!!")
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore++;
        console.log("Paper beats Rock! You Win! Alpha!!!")
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerScore++;
        console.log("Rock beats Scissors! You Lose! Beta!!!")
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore++;
        console.log("Scissors beats Paper! You Win! Alpha!!!")
    }
    else {
        console.log("Error, unable to proceed. Proper conditions were not met to win, lose, or draw the game.")
    }
}

// Establish global variables for score, so that the function for playing rounds can access and increment them 
let playerScore = 0;
let computerScore = 0;

// Function to play the game 5 times
function game() {
    roundCounter = 0;
    for (roundCounter = 0; roundCounter < 5; roundCounter++) {
        let playerSelection = window.prompt("Let's play Rock, Paper, Scissors! What is your choice?");
        let computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection)
    }
    if (playerScore > computerScore) {
        console.log("You Won the game!!! What an ALPHA!" + playerScore.toString() + ":" + computerScore.toString());
    }
    else if (playerScore === computerScore){
        console.log("You tied the game!!!!" + playerScore.toString() + ":" + computerScore.toString());
    }
    else if( playerScore < computerScore) {
        console.log("You lost to the computer!!! LMAOOOO" + playerScore.toString() + ":" + computerScore.toString());
    }
}

//Calling the function so the game is played
// game();

