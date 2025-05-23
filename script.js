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

// Image Carousel, for array we use indeces centered to 0 -> [-2, -1, 0, 1, 2] instead of [0, 1, 2, 3, 4]

images = Array.from(document.querySelectorAll(".carousel img"))
bottomBttns = Array.from(document.querySelectorAll(".bottom-buttons button"))

rightButton = document.querySelector(".rl-button.right")
leftButton = document.querySelector(".rl-button.left")

let currentIndex = 0
const maxIndex = Math.floor(images.length / 2)
const minIndex = -maxIndex

swipeRight(currentIndex)
swipeLeft(currentIndex)
colorManipulation(currentIndex)

bottomBttns.forEach(button => {
    button.addEventListener("click", (event) => {
        const index = bottomBttns.indexOf(event.target)
        currentIndex = index + minIndex
        updateCarousel(currentIndex)

        swipeRight(currentIndex)
        swipeLeft(currentIndex)

        colorManipulation(currentIndex)
    })
})

function colorManipulation(currentIndex) {
    bottomBttns.forEach(button => {
        button.style.backgroundColor = "white"
    })
    const theIndex = currentIndex + maxIndex
    bottomBttns[theIndex].style.backgroundColor = "black"
}

function swipeRight(currentIndex) {
    rightButton.addEventListener("click", () => {
        currentIndex++
        if (currentIndex > maxIndex) currentIndex = minIndex
        updateCarousel(currentIndex)
        colorManipulation(currentIndex)
    })
}

function swipeLeft(currentIndex) {
    leftButton.addEventListener("click", () => {
        currentIndex--
        if (currentIndex < minIndex) currentIndex = maxIndex;
        updateCarousel(currentIndex)
        colorManipulation(currentIndex)
    })
}

function updateCarousel(currentIndex) {
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const width = entry.contentRect.width;

            for (img of images) {
                img.style.transform = "translateX(" + (-currentIndex * width) + "px)"
            }
        }
    });
    resizeObserver.observe(images[0])
}