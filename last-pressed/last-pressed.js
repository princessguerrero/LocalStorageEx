var firstBtn = document.querySelector("#first")
var secondBtn = document.querySelector("#second")
var thirdBtn = document.querySelector("#third")

firstBtn.addEventListener("click", function() {
    firstBtn.style.backgroundColor = "green";
    secondBtn.style.backgroundColor = "";
    thirdBtn.style.backgroundColor = "";
})

secondBtn.addEventListener("click", function() {
    secondBtn.style.backgroundColor = "green";
    firstBtn.style.backgroundColor = "";
    thirdBtn.style.backgroundColor = "";
})

thirdBtn.addEventListener("click", function() {
    thirdBtn.style.backgroundColor = "green";
    firstBtn.style.backgroundColor = "";
    secondBtn.style.backgroundColor = "";
})