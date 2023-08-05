let count = 0;

const number = document.getElementById("num");
const decrease = document.getElementById("btn-decrease");
const reset = document.getElementById("btn-reset");
const increase = document.getElementById("btn-increase");

decrease.addEventListener("click", function () {
  {
    count--;
  }
  number.textContent = count;
  updateCountAndColor();
});
increase.addEventListener("click", function () {
  {
    count++;
  }
  number.textContent = count;
  updateCountAndColor();
});
reset.addEventListener("click", function () {
  {
    count = 0;
  }
  number.textContent = count;
  updateCountAndColor();
});

function updateCountAndColor() {
  number.textContent = count;

  if (count < 0) {
    number.style.color = "red";
  } else if (count > 0) {
    number.style.color = "green";
  } else {
    number.style.color = "white";
  }
}
