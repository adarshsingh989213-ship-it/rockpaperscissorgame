let userScore =0;
let computerScore= 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userscore")
const computerScorePara = document.querySelector("#computerscore")

const genComptChoice =() =>{
    const options =["rock" ,"paper" ,"scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options [randomIdx];
};

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText ="GAME WAS DRAW , PLAY AGAIN !!";
    msg.style.backgroundColor = "#081b31"

}; 

const showWinner = (userWin ,userChoice, compChoice) =>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`YOU WIN !! Your ${userChoice}, Beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText =`YOU LOST !! ${compChoice}, Beats Your ${userChoice}`
        msg.style.backgroundColor = "red"

    }
}


const playGame =(userChoice) =>{
    console.log("userChoice =", userChoice);
    const compChoice =  genComptChoice();
    console.log("compChoice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }else{
        userWin = true;
        if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false :true ;
        }else if ( userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true;
        }else {
        userWin = compChoice ==="rock" ? false : true;
        }
        showWinner (userWin, userChoice, compChoice);
    }

};

choices.forEach ((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})
