const counterValue = document.getElementById("counter-value");
const decButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const incButton = document.querySelector(".increase");

decButton.addEventListener("click", () => {
  if (parseInt(counterValue.innerText) <= 0) {
    counterValue.style.color = "red";
  }
  const initVal = parseInt(counterValue.innerText);
  counterValue.innerText = (initVal - 1).toString();
});

resetButton.addEventListener("click", () => {
  counterValue.style.color = "black";
  counterValue.innerText = String(0);
});

incButton.addEventListener("click", () => {
  if (parseInt(counterValue.innerText) >= 0) {
    counterValue.style.color = "green";
  }
  const initVal = parseInt(counterValue.innerText);
  counterValue.innerText = (initVal + 1).toString();
});
