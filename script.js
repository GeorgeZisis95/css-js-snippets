// Navigation Bar & Dropdown Menu

const eventButton = document.getElementById("event-button")

const buttonContainer = document.querySelector(".container")

eventButton.addEventListener("click", () => {
    if (buttonContainer.classList.contains("hide")) {
        buttonContainer.classList.remove("hide")
    }
    else {
        buttonContainer.classList.add("hide")
    }
})

// Image Carousel

imgs = Array.from(document.querySelectorAll(".carousel img"))

rightButton = document.querySelector(".rl-button.right")
leftButton = document.querySelector(".rl-button.left")

// The index numbering is [-2, -1, 0, 1, 2]
let currentIndex = 0
const maxIndex = Math.floor(imgs.length / 2)
const minIndex = -maxIndex

rightButton.addEventListener("click", () => {
    currentIndex++
    if (currentIndex > maxIndex) currentIndex = minIndex
    updateCarousel(currentIndex)
})

leftButton.addEventListener("click", () => {
    currentIndex--
    if (currentIndex < minIndex) currentIndex = maxIndex;
    updateCarousel(currentIndex)
})

bottomBttns = Array.from(document.querySelectorAll(".bottom-buttons button"))
bottomBttns.forEach(button => {
    button.addEventListener("click", (event) => {
        index = bottomBttns.indexOf(event.target)
        currentIndex = index + minIndex
        updateCarousel(currentIndex)

        // Color Manipulation
        bottomBttns.forEach(button => {
            button.style.backgroundColor = "white"
        })
        event.target.style.backgroundColor = "black"
    })
})



function updateCarousel(currentIndex) {
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const width = entry.contentRect.width;

            for (img of imgs) {
                img.style.transform = "translateX(" + (-currentIndex * width) + "px)"
            }
        }
    });
    resizeObserver.observe(imgs[0])
}