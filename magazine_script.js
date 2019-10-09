"use strict";
document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Hej");
}

let urlParams = new URLSearchParams(window.location.search);
let size = urlParams.get("size");

//window.location.href = "magazine.html?size=" + size + "&price=" + price;
