//Create new div for game results and score tracking to append DOM 
let resultsDiv = document.createElement('div');
resultsDiv.setAttribute('class', 'main-body')
document.body.appendChild(resultsDiv); 

let scoreTracker = document.createElement('div');
scoreTracker.setAttribute('class', 'main-body')
document.body.appendChild(scoreTracker); 

let finalResult = document.createElement('div');
scoreTracker.setAttribute('class', 'main-body')
document.body.appendChild(finalResult); 

// Establish global variables for score, so that the function for playing rounds can access and increment them 

let playerScore = 0;
let computerScore = 0;

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


function checkWinner(){ 
if (playerScore >= 5) { 
    console.log('You Won!! Alpha!!!')
    console.log(playerScore);
    return true;
    }
    
    else if (computerScore >= 5) {
    console.log("The computer Won, you lost BETA!!!!"); 
    console.log(computerScore);
    return true;
    }
    
    else{ 
        return false;
    }
}

// Plays one round of Rock paper scissors, keeps track of the player score and outputs result to console. 

const btn_container = document.getElementById('btn-container');
        btn_container.addEventListener('click', (event) => {
            const isButton = event.target.nodeName === 'BUTTON';
            if (!isButton) {
              return;
            }

            //Breaks the function and does not allow the event listener to continue if score is 5 or more 
            if (checkWinner(true)) {
                return;
            };

            //console.dir(event.target.id);
            if (event.target.id.toLowerCase() === 'rock'){
                let playerSelection = 'Rock';
                let computerSelection = getComputerChoice();
                // console.log('You chose ' + playerSelection);
                playRound(playerSelection,computerSelection);
            }
                
            else if(event.target.id.toLowerCase() === 'paper') {
                let playerSelection = 'Paper';
                let computerSelection = getComputerChoice();
                // console.log('You chose ' + playerSelection);
                playRound(playerSelection,computerSelection);
            }
        
            else if(event.target.id.toLowerCase() === 'scissors') {
                let playerSelection = 'Scissors';
                let computerSelection = getComputerChoice();
                // console.log('You chose ' + playerSelection);
        
                playRound(playerSelection,computerSelection);
            }
        
        })

function playRound(playerSelection, computerSelection) {
    //let resultsDiv = document.createElement('div');
    //document.querySelector('div')
    //resultsDiv.setAttribute('class', 'main-body')
    //document.body.appendChild(resultsDiv);
    if( playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    console.log("Draw!")
    console.log('Computer Score ' + computerScore);
    console.log('Player Score ' + playerScore);
    resultsDiv.textContent = 'Draw!'
    // checkWinner();
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore++;
        console.log('Computer Score ' + computerScore);
        console.log('Player Score ' + playerScore);
        console.log(`${computerSelection} beats ${playerSelection}! You lose! Beta!!!`)
        resultsDiv.textContent = `${computerSelection} beats ${playerSelection}! You lose! Beta!!!`
        // checkWinner();
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore++;
        console.log('Computer Score ' + computerScore);
        console.log('Player Score ' + playerScore);
        console.log(`${playerSelection} beats ${computerSelection}! You Win! Alpha!!!`)
        resultsDiv.textContent = `${playerSelection} beats ${computerSelection}! You Win! Alpha!!!`
        // checkWinner();
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerScore++;
        console.log('Computer Score ' + computerScore);
        console.log('Player Score ' + playerScore);
        console.log(`${computerSelection} beats ${playerSelection} ! You Lose! Beta!!!`)
        resultsDiv.textContent = `${computerSelection} beats ${playerSelection} ! You Lose! Beta!!!`
        // checkWinner();
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore++;
        console.log('Computer Score ' + computerScore);
        console.log('Player Score ' + playerScore);
        console.log(`${playerSelection} beats ${computerSelection}! You Win! Alpha!!!`)
        resultsDiv.textContent = `${playerSelection} beats ${computerSelection}! You Win! Alpha!!!`
        // checkWinner();
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerScore++;
        console.log('Computer Score ' + computerScore);
        console.log('Player Score ' + playerScore);
        console.log(`${computerSelection} beats ${playerSelection} ! You Lose! Beta!!!`)
        resultsDiv.textContent = `${computerSelection} beats ${playerSelection} ! You Lose! Beta!!!`
        // checkWinner();
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore++;
        console.log('Computer Score ' + computerScore);
        console.log('Player Score ' + playerScore);
        console.log(`${playerSelection} beats ${computerSelection}! You Win! Alpha!!!`)
        resultsDiv.textContent = `${playerSelection} beats ${computerSelection}! You Win! Alpha!!!`
        // checkWinner();
    }
    else {
        console.log("Error, unable to proceed. Proper conditions were not met to win, lose, or draw the game.")
        resultsDiv.textContent = "Error, unable to proceed. Proper conditions were not met to win, lose, or draw the game."
    }

    // Checks for a winner as soon as the score values obtain 5 points 
    checkWinner();
}

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