// Verify Log In Status

  
  // Add Code Here

// html elements only
const items = document.querySelectorAll(".item");
const active = document.querySelector(".active");

(function reset() {
  active.style.left = `${items[4].offsetLeft}px`;
})();

items.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    active.style.left = `${elem.offsetLeft}px`;
  });
});

