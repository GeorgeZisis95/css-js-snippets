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