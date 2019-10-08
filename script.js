"use strict";

document.querySelector(".btn-see-more").addEventListener("click", showInfo);

function showInfo() {
  console.log("showInfo");

  const button = document.querySelector(".btn-see-more");
  let txt = document.querySelectorAll(".infohidden");

  txt.forEach(txt => {
    if (txt.classList.contains("hide")) {
      txt.classList.remove("hide");
      button.innerHTML = "Skjul";
    } else {
      txt.classList.add("hide");
      button.innerHTML = "Se mere";
    }
  });
}
