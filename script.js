const container = document.querySelector(".container");
const content = document.querySelector(".content");
const features = document.querySelector(".nav-menu-elements-features");
const company = document.querySelector(".nav-menu-elements-company");
const arrowDownF = document.querySelector(".arrow-down-features");
const arrowUpF = document.querySelector(".arrow-up-features");
const arrowDownC = document.querySelector(".arrow-down-company");
const arrowUpC = document.querySelector(".arrow-up-company");
const hamburger = document.querySelector(".nav-hamburger");
const hamburgerMenu = document.querySelector(".nav-menu");
const cross = document.querySelector(".cross");

hamburger.addEventListener("click", () => {
  hamburgerMenu.style.display = "block";
});

cross.addEventListener("click", () => {
  hamburgerMenu.style.display = "none";
});

arrowDownF.addEventListener("click", () => {
  features.style.display = "block";
  arrowDownF.style.display = "none";
  arrowUpF.style.display = "block";
});

arrowUpF.addEventListener("click", () => {
  features.style.display = "none";
  arrowUpF.style.display = "none";
  arrowDownF.style.display = "block";
});

arrowDownC.addEventListener("click", () => {
  company.style.display = "block";
  arrowDownC.style.display = "none";
  arrowUpC.style.display = "block";
});

arrowUpC.addEventListener("click", () => {
  company.style.display = "none";
  arrowUpC.style.display = "none";
  arrowDownC.style.display = "block";
});
