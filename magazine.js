"use strict";

let box;
let yourOffer;
let discount = 761;
let premiumPrice = 600;
let defaultPrice = Number(document.querySelector("input:checked").value);
document.querySelector(".amount").textContent = defaultPrice;
document.querySelector(".total-value").textContent = defaultPrice + premiumPrice;
document.querySelector(".spec-price").textContent = defaultPrice - discount + premiumPrice;
document.querySelector(".disc").textContent = discount;

const button = document.querySelector(".show-saving");
let container = document.querySelectorAll(".container");

button.addEventListener("click", showSaved);

function showSaved() {
  console.log("Show list of informations");
  container.forEach(container => {
    if (container.classList.contains("hide")) {
      container.classList.remove("hide");
      container.className = "show";
      button.innerHTML = "Skjul besparelse";
    } else {
      container.classList.add("hide");
      container.classList.remove("show");
      button.innerHTML = "Se din besparelse";
    }
  });
}

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("click", e => {
    console.log(e.target.value);
    let value = Number(e.target.value);

    if (e.target.value == 310) {
      document.querySelector(".disc").textContent = 761;
      discount = 761;
    } else if (e.target.value == 465) {
      document.querySelector(".disc").textContent = 866;
      discount = 866;
    } else if (e.target.value == 620) {
      document.querySelector(".disc").textContent = 921;
      discount = 921;
    }
    document.querySelector(".amount").textContent = value;
    document.querySelector(".total-value").textContent = value + premiumPrice;
    document.querySelector(".spec-price").textContent = value - discount + premiumPrice;
  });
});
