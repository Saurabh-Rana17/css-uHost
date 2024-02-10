let backdrop = document.querySelector(".backdrop");
let selectPlanButtons = document.querySelectorAll(".plan button");
let modal = document.querySelector(".modal");
let negative = document.querySelector(".modal__action__negative");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

if (negative) {
  negative.addEventListener("click", () => {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    backdrop.classList.remove("open");
    modal.classList.remove("open");
  });
}

backdrop.addEventListener("click", () => {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  // mobileNav.style.display = "none ";
  backdrop.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
  mobileNav.classList.remove("open");
});

toggleButton.addEventListener("click", () => {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
