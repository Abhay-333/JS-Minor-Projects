const bill = document.querySelector("#bill");
const five = document.querySelector("#five");
const ten = document.querySelector("#ten");
const fifteen = document.querySelector("#fifteen");
const twentyFive = document.querySelector("#twenty-five");
const fifty = document.querySelector("#fifty");
const custom = document.querySelector("#fifty");
const tipAmt = document.querySelector("#tipAmt");
const showNOP = document.querySelector("#person");
const form = document.querySelector("form");
const showTipAmount = document.querySelector('#tipAmt span')
const showTotalAmount = document.querySelector('#showTotal span')

const peopleInp = document.querySelector("#people-inp");

let billAmt;
let numberOfPeopleValue;
let tip;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});


peopleInp.addEventListener("input", (e) => {
    numberOfPeopleValue = e.target.value;
  });
  

bill.addEventListener("input", (e) => {
  billAmt = parseFloat(e.target.value);
  // billAmt = 1000

  // here the problem was that at every input change we are calling the function which ruins our memory and time though we have memory and time but a good programmer thinks of saving it , so i think i did that,

  // solution1 - when the button is click we will add an attribute to that element, so that we can check the element has the attribute or not if it does then we calculte further and if not then do nothing

});

function setAttrForFive(e) {
  e.setAttribute("elem-clicked", "true");
  if (five && five.hasAttribute("elem-clicked")) {
    tip = ((5 / 100) * billAmt).toFixed(2);
  }
  console.log(tip);
  updateTextContent()
}

function setAttrForTen(e) {
  e.setAttribute("elem-clicked", "true");
  if (ten && ten.hasAttribute("elem-clicked")) {
    tip = ((10 / 100) * billAmt).toFixed(2);

    console.log(tip);
  }
  updateTextContent()
}

function setAttrForFifteen(e) {
    e.setAttribute("elem-clicked","true")
  if (fifteen && fifteen.hasAttribute("elem-clicked")) {
    tip = ((15 / 100) * billAmt).toFixed(2);
    console.log(tip);
  }
  updateTextContent()
}

function setAttrForTwentyFive(e) {
    e.setAttribute("elem-clicked","true")

  if(twentyFive && twentyFive.hasAttribute("elem-clicked")){
    tip = ((25 / 100) * billAmt).toFixed(2);
      console.log(tip);
  }
  updateTextContent()
}

function setAttrForFifty(e) {
    e.setAttribute("elem-clicked","true")

  if(fifty && fifty.hasAttribute("elem-clicked")){
    tip = ((50 / 100) * billAmt).toFixed(2);
      console.log(tip);
  }
  updateTextContent()
}

// function CustomTip(e,amount){
//     e.preventDefault();
//     tip = 5/100 * amount
//
// }

function updateTextContent(){
    console.log(tip)

    showTipAmount.textContent = tip
}
