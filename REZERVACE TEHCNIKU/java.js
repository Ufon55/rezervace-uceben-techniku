const rezervaceT = document.getElementById("rezervaceT")
const rezervaceM = document.getElementById("rezervaceM")
const Ondrej = document.getElementById("Ondrej")
const Richard = document.getElementById("Richard")
const Lukas = document.getElementById("Lukas")
const Martin = document.getElementById("Martin")

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



Ondrej.addEventListener("click", () => {
    shown.classList.remove("blur")
    technici.classList.remove("show")

})

Richard.addEventListener("click", () => {
    shown.classList.remove("blur")
    technici.classList.remove("show")
})

Lukas.addEventListener("click", () => {
    shown.classList.remove("blur")
    technici.classList.remove("show")
})

Martin.addEventListener("click", () => {
    shown.classList.remove("blur")
    technici.classList.remove("show")
})

