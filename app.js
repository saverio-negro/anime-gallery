const smallImages = document.querySelectorAll(".img-container img")
const modal = document.querySelector(".modal")
const fullImage = document.querySelector(".full-img")

smallImages.forEach((smallImage) => {
    smallImage.addEventListener("click", (e) => {
        smallImageNumber = e.target.title
        fullImage.src = `./images/large/large_${smallImageNumber}.jpg`
        setTimeout(() => {modal.setAttribute("class", "modal open")}, 400)
        fullImage.setAttribute("class", "full-img open")
    })
})

modal.addEventListener("click", () => {
    modal.setAttribute("class", "modal")
    fullImage.setAttribute("class", "full-img")
})
