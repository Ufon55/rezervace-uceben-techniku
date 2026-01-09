const rezervaceT = document.getElementById("rezervaceT")
const rezervaceM = document.getElementById("rezervaceM")

const technici = document.querySelector(".technici")
const mistnosti = document.querySelector(".mistnosti")
const shown = document.querySelector(".shown")

rezervaceT.addEventListener("click", () => {
    classList.add("technici")
    shown.classList.add("blur")
})