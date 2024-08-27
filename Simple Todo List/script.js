const form = document.querySelector("body form");
const inp = document.querySelector("body form input");
const add = document.getElementById("add");
const done = document.getElementById("done");
const ol = document.querySelector("body ol");

// console.log(inp)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  function validateInp() {
    if (inp.value.trim() === "") {
      alert("Please fill the required feild...");
      return false;
    } else {
      return true;
    }
  }

  function addTodo() {
    if (validateInp()) {
      const li = document.createElement("li");
      const label = document.createElement("label");

      const radiobtn = document.createElement("input");
      radiobtn.type = "radio";

      label.textContent = inp.value;
      li.setAttribute(
        "class",
        "bg-zinc-600 p-2 rounded-md flex items-center justify-start gap-1 mt-3"
      );
      label.setAttribute("class", "text-[1.2vw]");

      function toggleRadioBtn() {
        let flag = 1;
        radiobtn.addEventListener("click", () => {
          if (flag) {
            radiobtn.checked = true;
            label.setAttribute("class", "text-[1.2vw] line-through");
            flag = 0;
          } else {
            radiobtn.checked = false;
            label.setAttribute("class", "no-underline text-[1.2vw]");
            flag = 1;
          }
        });
      }

      li.appendChild(radiobtn);
      li.appendChild(label);
      ol.appendChild(li);

      toggleRadioBtn();
      inp.value = "";
    } 

  }

  add.addEventListener("click", addTodo());
});
