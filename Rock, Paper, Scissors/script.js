
const options = ["rock", "paper", "scissors"]
const userInput = "rock"

const AI = options[Math.floor(Math.random() * options.length)]

if(userInput == AI){
    console.log("Tie")
}else if(userInput == "rock" && AI == "scissors"){
    console.log("You Won")
}else if(userInput == "rock" && AI == "paper"){
    console.log("Defeated")
}else if(userInput == "paper" && AI == "rock"){
    console.log("You Won")
}else if(userInput == "paper" && AI == "scissors"){
    console.log("Defeated")
}else if(userInput == "scissors" && AI == "paper"){
    console.log("You Won")
}else if(userInput == "scissors" && AI == "rock"){
    console.log("Defeated")
}

console.log(AI)