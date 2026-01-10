const rezervaceT = document.getElementById("rezervaceT")
const rezervaceM = document.getElementById("rezervaceM")
const Ondrej_button = document.getElementById("Ondrej")
const Richard_button = document.getElementById("Richard")
const Lukas_button = document.getElementById("Lukas")
const Martin_button = document.getElementById("Martin")

const zpetButtons = document.querySelectorAll(".Zpet")

const technici = document.querySelector(".technici")
const mistnosti = document.querySelector(".mistnosti")
const shown = document.querySelector(".shown")

rezervaceT.addEventListener("click", () => {
    shown.classList.add("blur")
    technici.classList.add("show")
})

rezervaceM.addEventListener("click", () => {
    shown.classList.add("blur")
    mistnosti.classList.add("show")
})



Ondrej_button.addEventListener("click", () => {
    shown.classList.remove("blur")
    technici.classList.remove("show")
    document.getElementById("1").textContent = "Ne"
    Ondrej_button.disabled = true
})

Richard_button.addEventListener("click", () => {
    shown.classList.remove("blur")
    technici.classList.remove("show")
    document.getElementById("2").textContent = "Ne"
    Richard_button.disabled = true

})

Lukas_button.addEventListener("click", () => {
    shown.classList.remove("blur")
    technici.classList.remove("show")
    document.getElementById("3").textContent = "Ne"
    Lukas_button.disabled = true
})

Martin_button.addEventListener("click", () => {
    shown.classList.remove("blur")
    technici.classList.remove("show")
    document.getElementById("4").textContent = "Ne"
    Martin_button.disabled = true
})

zpetButtons.addEventListener("click", () => {
    shown.classList.remove("blur")
    technici.classList.remove("show")
    mistnosti.classList.remove("show")
})

