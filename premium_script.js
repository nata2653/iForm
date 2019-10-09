"use strict";
document.addEventListener("DOMContentLoaded", start);
function start() {
  console.log("Hej");
}

let size;
let price = 299;

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("click", e => {
    //Vis knap her
    activateButton();
    console.log(e.target.value);
    size = e.target.value;
  });
});

function activateButton() {
  document.querySelector(".next_btn").addEventListener("click", () => {
    window.location.href = "magazine.html?size=" + size;
  });
}
