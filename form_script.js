import IMask from 'imask';
'use strict'
document.addEventListener('DOMContentLoaded', start);

function start() {
    console.log('Connection between the DOM and the Script was successfull! Nice 😎');
    mask();
}
const form = document.querySelector("form");
const input = document.querySelectorAll("input");


input.forEach(inp => {

    inp.addEventListener("blur", e => {
        if (!e.target.checkValidity()) {
            console.error("INVALID INPUT");
        }
    });


});

function mask() {
    var numberMask = IMask(
        document.getElementById('postnr'), {
            mask: Number,
            min: 0,
            max: 9999,
            thousandsSeparator: ''
        });

    var phoneMask = IMask(
        document.getElementById('phone'), {
            mask: '+{45} 00 00 00 00'
        });
}

form.setAttribute("novalidate", true);
form.addEventListener("submit", e => {
    e.preventDefault();
    //const isValidEmail = emailField.checkValidity();
    form.querySelectorAll("input").forEach(inp => {
        if (!inp.checkValidity()) {
            inp.classList.add("invalid");

        }
    })

    //form.reportValidity();
})