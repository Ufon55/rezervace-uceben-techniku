const rezervaceT = document.getElementById("rezervaceT")
const rezervaceM = document.getElementById("rezervaceM")

const technici = document.querySelector(".technici")
const mistnosti = document.querySelector(".mistnosti")
const shown = document.querySelector(".shown")

rezervaceT.addEventListener("click", () => {
    shown.classList.add("blur")
    technici.classList.add("show")
})

rezervaceM.addEventListener("click",() => {
    shown.classList.add("blur")
    mistnosti.classList.add("show")
})