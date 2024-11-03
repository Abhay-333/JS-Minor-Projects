const bill = document.querySelector('#bill')
const five = document.querySelector('#five')
const ten = document.querySelector('#ten')
const fifteen = document.querySelector('#fifteen')
const twentyFive = document.querySelector('#twenty-five')
const fifty = document.querySelector('#fifty')
const custom = document.querySelector('#fifty')
const tipAmt = document.querySelector('#tipAmt')
const showNOP = document.querySelector('#person')
const form = document.querySelector('form')

const peopleInp = document.querySelector('#people-inp')

let billAmt;
let numberOfPeopleValue;
let tip;



form.addEventListener('submit',(e)=>{
    e.preventDefault()
})


bill.addEventListener("input", (e)=>{
    billAmt = e.target.value
    // billAmt = 1000
    
    // here the problem was that at every input change we are calling the function which ruins our memory and time though we have memory and time but a good programmer thinks of saving it , so i think i did that,

    // solution1 - when the button is click we will add an attribute to that element, so that we can check the element has the attribute or not if it does then we calculte further and if not then do nothing 

    // five.addEventListener('click' , fivePercent(e,billAmt))
    ten.addEventListener('click' , tenPercent(e,billAmt))
    fifteen.addEventListener('click' , fifteenPercent(e,billAmt))
    twentyFive.addEventListener('click' , twentyFivePercent(e,billAmt))
    fifty.addEventListener('click' , fiftyPercent(e,billAmt))
})

function setAttr(e){
    e.setAttribute("elem-clicked", "true")
    
    if( five && five.hasAttribute("elem-clicked")){
        fivePercent(billAmt)
    }
}

peopleInp.addEventListener("input", (e)=>{
    numberOfPeopleValue = e.target.value;
})

function fivePercent(amount){
    tip = 5/100 * amount
    console.log(tip)
}

function tenPercent(e,amount){
    e.preventDefault();
    tip = 10/100 * amount
    
    console.log(tip)
}

function fifteenPercent(e,amount){
    e.preventDefault();
    tip = 15/100 * amount
    console.log(tip)
}

function twentyFivePercent(e,amount){
    e.preventDefault();
    tip = 25/100 * amount
    
    console.log(tip)
}

function fiftyPercent(e,amount){
    e.preventDefault();
    tip = 50/100 * amount
    console.log(tip)
    
}



// function CustomTip(e,amount){
//     e.preventDefault();
//     tip = 5/100 * amount
//     
// }