


const iconDown = document.querySelectorAll(".imgDown");

iconDown.forEach((item) => {
    item.addEventListener("click", () => {
        item.parentNode.className = "active";
    })
})

const iconX = document.querySelectorAll("#imgX");
iconX.forEach((item) => {
    item.addEventListener("click", () => {
        item.parentNode.classList.remove("active");
        item.parentNode.classList.add("answer");
    })
})






