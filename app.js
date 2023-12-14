const smallImages = document.querySelectorAll(".img-container img")
const modal = document.querySelector(".modal")
const fullImage = document.querySelector(".full-img")

smallImages.forEach((smallImage) => {
    smallImage.addEventListener("click", (e) => {
        smallImageNumber = e.target.title
        fullImage.src = `./images/large/large_${smallImageNumber}.jpg`
        setTimeout(() => {modal.classList.add("open")}, 100)
        fullImage.classList.add("open")
    })
})

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        fullImage.classList.remove("open")
        modal.classList.remove("open")
    }
})
