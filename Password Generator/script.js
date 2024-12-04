const length = document.querySelector("#length")
const password = document.querySelector("#password")
const displayLength = document.querySelector("#displayLength")
const copy = document.querySelector("#copy")
const number = document.querySelector("#number")
const character = document.querySelector("#character")

let str = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`
let characterStr = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`


length.addEventListener("input",(e)=>{
    displayLength.textContent = e.target.value
    generatePassword(e)
})

function generatePassword(passwordLength){
    for(let i = 0; i <= str.length; i++){
        const randomCharacterSelector = Math.floor(Math.random()*str.length)
        const newPassword = ''

        console.log(randomCharacterSelector)
    }
}