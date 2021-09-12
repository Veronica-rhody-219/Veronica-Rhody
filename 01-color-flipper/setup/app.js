const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  let doc1 = document.body.style.backgroundColor = colors[randomNumber];
  console.log(doc1);
  let color1 = color.textContent = colors[randomNumber];
  console.log(color1);
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
