let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  if (document.body.classList.toggle("black")) {
    btn.textContent = "Dark Mode";
  } else {
    btn.textContent = "Light Mode";
  }
});
