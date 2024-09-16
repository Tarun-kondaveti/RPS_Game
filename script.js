const rpsbutton =(playerChoice) => {
    const computerChoice = compchoice()
    const score =getresult(playerChoice.value,computerChoice)
    displayresult(score,playerChoice.value,computerChoice)


}
const compchoice =() => {
    let rpschoices=['Rock','Paper','Scissor']
    let computerChoice=rpschoices[Math.floor(Math.random() * 3)]
        return computerChoice
}
const getresult =(playerChoice,computerChoice) => {
    let score;
    if (playerChoice === computerChoice) {
      score = 0
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissor') {
      score = 1
  
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      score = 1
  
    } else if (playerChoice === "Scissor" && computerChoice === "Paper") {
      score = 1
  
    } else {
      score = -1
    }
    return score
}
const displayresult =(score,playerChoice,computerChoice) => {
    let result=document.getElementById('result')
    if(score === 0){
        result.innerText=`DRAW`
    }
    else if(score === -1){
        result.innerText=`LOSE`
    }
    else if(score === 1){
        result.innerText=`WIN`
    }
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText =` ${Number(playerScore.innerText) + score}`
      hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}
const startgame=() => {
   
    let rpsButtons = document.querySelectorAll('.rpsbuttons')
    rpsButtons.forEach(button =>{
        button.onclick = () => rpsbutton(button)
      } ) 
    
      let endGameButton = document.getElementById('endbutton')
      endGameButton.onclick = () => endbutton()
}

const endbutton =() => {
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''

}
startgame()

