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

let currentIndex = 0
const maxIndex = Math.floor(imgs.length / 2)
const minIndex = -maxIndex

rightButton.addEventListener("click", () => {
    currentIndex++
    if (currentIndex > maxIndex) currentIndex = minIndex
    console.log(currentIndex)
    updateCarousel(currentIndex)
})

leftButton.addEventListener("click", () => {
    currentIndex--
    if (currentIndex < minIndex) currentIndex = maxIndex;
    console.log(currentIndex)
    updateCarousel(currentIndex)
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

function getImageAt(i) {
    const centerIndex = Math.floor(imgs.length / 2) // or whatever you consider the center index
    const total = imgs.length;
    return imgs[(centerIndex + i + total) % total]; // wrap safely
}

console.log(getImageAt(minIndex))