/* Begin with a function called getComputerChoice. 

getComputerChoice()

    let choiceArray =[ 
    choice1 = Rock,
    choice2 = Paper,
    choice3 = Scissors,
    ];

    let randomIndex Math.floor(Math.random() * textArray.length)
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