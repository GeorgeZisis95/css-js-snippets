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

let currentIndex = 0

const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        const width = entry.contentRect.width;

        for (img of imgs) {
            img.style.transform = "translateX(" + (-currentIndex * width) + "px)"
        }
    }
});

resizeObserver.observe(imgs[0])

