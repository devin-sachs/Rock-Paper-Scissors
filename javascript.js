/* Begin with a function called getComputerChoice. 

getComputerChoice()
    let choiceArray =[ 
    choice1 = Rock,
    choice2 = Paper,
    choice3 = Scissors,
    ];

    let randomIndex Math.floor(Math.random() * textArray.length) 
    randomElement = choiceArray[randomeIndex]
*/

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


function playRound(playerSelection, computerSelection) {
if( playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    console.log("Draw!")
    }
    else if (playerSelection.toLowerCase() === "ROCK" && computerSelection.toLowerCase() === "Paper") {
        console.log("Paper beats Rock! You lose!")
    }
    else if (playerSelection.toLowerCase() === "ROCK" && computerSelection.toLowerCase() === "Scissors") {
    console.log("Rock beats Scissors! You Win!")
    }
    else if (playerSelection.toLowerCase() === "PAPER" && computerSelection.toLowerCase() === "Scissors") {
    console.log("Scissors beats Paper! You Lose!")
    }
    else if (playerSelection.toLowerCase() === "PAPER" && computerSelection.toLowerCase() === "Rock") {
    console.log("Scissors beats Paper! You Lose!")
    }
    else if (playerSelection.toLowerCase() === "Scissors" && computerSelection.toLowerCase() === "Rock") {
    console.log("Scissors beats Paper! You Lose!")
    }
    else{
    console.log("Scissors beats Paper! You Lose!")
    }
}

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

