"use strict";
document.addEventListener("DOMContentLoaded", start);
function start() {
  console.log("Hej");
  activateButton();
}

function activateButton() {
  document.querySelector(".next_btn").addEventListener("click", () => {
    window.location.href = "payment.html";
  });
}
