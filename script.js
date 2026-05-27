const button = document.querySelector("button");

button.addEventListener("mouseenter", () => {
  button.innerHTML = "시원하게 주문하기 🍉";
});

button.addEventListener("mouseleave", () => {
  button.innerHTML = "ORDER NOW";
});