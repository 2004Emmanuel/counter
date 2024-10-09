let count = 0;
const read = document.getElementById("counter");

function increase() {
  count += 1;
  read.innerHTML = count;
}
function decrease() {
  count -= 1;
  read.innerHTML = count;
}
function reset() {
  count = 0;
  read.innerHTML = count;
}
