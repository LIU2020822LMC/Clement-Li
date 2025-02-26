const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const doubleincreaseBtn = document.getElementById("doubleincreaseBtn");
const doubledecreaseBtn = document.getElementById("doubledecreaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
increaseBtn.onclick = function () {
  count ++;
  countLabel.textContent = count;
}
doubleincreaseBtn.onclick = function () {
  count+=2;
  countLabel.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
decreaseBtn.onclick = function () {
  count --;
  countLabel.textContent = count;
};
doubledecreaseBtn.onclick = function () {
  count -=2;
  countLabel.textContent = count;
};
