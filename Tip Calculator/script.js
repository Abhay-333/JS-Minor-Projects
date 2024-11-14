const bill = document.querySelector("#bill");
const five = document.querySelector("#five");
const ten = document.querySelector("#ten");
const fifteen = document.querySelector("#fifteen");
const twentyFive = document.querySelector("#twenty-five");
const fifty = document.querySelector("#fifty");
const tipAmt = document.querySelector("#tipAmt");
const showNOP = document.querySelector("#person");
const form = document.querySelector("form");
const showTipAmount = document.querySelector("#tipAmt span");
const showTotalAmount = document.querySelector("#showTotal span");
const resetBtn = document.querySelector("#reset");
const custom = document.querySelector("#custom");

const peopleInp = document.querySelector("#people-inp");

let billAmt = 0;
let numberOfPeopleValue = 0;
let tip;
const regexForTipInp = /^\d+(\.\d+)?$/;
const regexForNOP = /^\d+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

peopleInp.addEventListener("input", (e) => {
  numberOfPeopleValue = e.target.value;

  if (!regexForNOP.test(numberOfPeopleValue)) {
    alert("Please Enter valid Information");
    return;
  }
});

bill.addEventListener("input", (e) => {
  billAmt = parseFloat(e.target.value);
  if (!regexForTipInp.test(billAmt)) {
    alert("Please Enter valid Information");
    return;
  }
  // billAmt = 1000

  // here the problem was that at every input change we are calling the function which ruins our memory and time

  // solution1 - when the button is click we will add an attribute to that element, so that we can check the element has the attribute or not if it does then we calculte further and if not then do nothing
});

function setAttrForFive(e) {
  e.setAttribute("elem-clicked", "true");
  if (five && five.hasAttribute("elem-clicked")) {
    tip = ((5 / 100) * billAmt).toFixed(2);

    showTotalAmount.textContent = tip;

    if (numberOfPeopleValue !== 0) {
      tip = (tip / numberOfPeopleValue).toFixed(2);
    }
  }
  console.log(tip);
  updateTextContent();
}

function setAttrForTen(e) {
  e.setAttribute("elem-clicked", "true");
  if (ten && ten.hasAttribute("elem-clicked")) {
    tip = ((10 / 100) * billAmt).toFixed(2);
    showTotalAmount.textContent = tip;

    if (numberOfPeopleValue !== 0) {
      tip = (tip / numberOfPeopleValue).toFixed(2);
    }
    console.log(tip);
  }
  updateTextContent();
}

function setAttrForFifteen(e) {
  e.setAttribute("elem-clicked", "true");
  if (fifteen && fifteen.hasAttribute("elem-clicked")) {
    tip = ((15 / 100) * billAmt).toFixed(2);

    showTotalAmount.textContent = tip;

    if (numberOfPeopleValue !== 0) {
      tip = (tip / numberOfPeopleValue).toFixed(2);
      console.log(tip);
    }
  }
  updateTextContent();
}

function setAttrForTwentyFive(e) {
  e.setAttribute("elem-clicked", "true");

  if (twentyFive && twentyFive.hasAttribute("elem-clicked")) {
    tip = ((25 / 100) * billAmt).toFixed(2);
    showTotalAmount.textContent = tip;

    if (numberOfPeopleValue !== 0) {
      tip = (tip / numberOfPeopleValue).toFixed(2);
      console.log(tip);
    }
  }
  updateTextContent();
}

function setAttrForFifty(e) {
  console.log(e);
  e.setAttribute("elem-clicked", "true");

  if (fifty && fifty.hasAttribute("elem-clicked")) {
    tip = ((50 / 100) * billAmt).toFixed(2);
    console.log(tip);
    showTotalAmount.textContent = tip;

    if (numberOfPeopleValue !== 0) {
      tip = (tip / numberOfPeopleValue).toFixed(2);
    }
  }
  updateTextContent();
}

function updateTextContent() {
  showTipAmount.textContent = tip;
}

resetBtn.addEventListener("click", () => {
  billAmt = 0;
  numberOfPeopleValue = 0;
  tip = 0;
  bill.value = "";
  showTotalAmount.textContent = tip;
  peopleInp.value = "";
  updateTextContent();
});

function setAttrCustom(e) {
  e.preventDefault();

  const newInputTag = document.createElement("input");
  newInputTag.setAttribute(
    "class",
    "bg-zinc-300 p-3 rounded-xl w-full lg:w-[100%] text-black text-right text-2xl outline-none"
  );
  custom.textContent = "";

  newInputTag.addEventListener("blur", () => {
    const customTip = parseFloat(newInputTag.value);
    if (!isNaN(customTip) && customTip >= 0) {
      calculateTip(customTip);
    }
    newInputTag.replaceWith(custom);
  });
  custom.replaceWith(newInputTag);
  newInputTag.focus();
  // custom.appendChild(newInputTag)
}

function calculateTip(customTip) {
  billAmt = customTip;
  numberOfPeopleValue;

  const tipAmount = (bill * (tipPercentage / 100)) / peopleCount;
  const totalAmount = (bill + bill * (tipPercentage / 100)) / peopleCount;

  tipAmt.innerHTML = `$${tipAmount.toFixed(2)}`;
  showTotalAmount.innerHTML = `$${totalAmount.toFixed(2)}`;
}
