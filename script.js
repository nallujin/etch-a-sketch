const container = document.querySelector(".container");
for (let i = 1; i <= 273; i++) { // 256 + 16
    const div = document.createElement("div");
    div.classList.add("masbro");
    container.appendChild(div);
}

const divChildren = document.querySelectorAll(".container>div");

divChildren.forEach((divChild) => {
    divChild.addEventListener("mouseenter", () => {
        console.log("hello");
        divChild.classList.add("hoverboard");
    });
});
