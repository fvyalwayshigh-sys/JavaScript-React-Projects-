let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let body = document.querySelector("body");
  let h1 = document.querySelector("h1");
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  h1.textContent = ` rgb(${red}, ${green}, ${blue})`;
});
