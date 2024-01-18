const body = document.querySelector("body");
const container = document.querySelector(".container");
const btnOne = document.createElement("button");

// Adding button to the top of the page
btnOne.id = "btn01";
btnOne.type = "button";
btnOne.textContent = "Button";
btnOne.style.margin = "10px";
body.prepend(btnOne);

// const count = 16;
// const theGrid = count*count+count;
// for (let i = 1; i < theGrid; i++) { // 256 + 16, but 16x16
//     const div = document.createElement("div");
//     div.classList.add("masbro");
//     if (i % (count + 1) === 0) {
//         div.classList.add("another-div");
//     } else {
//         div.classList.add("normal-div");
//     }
//     container.appendChild(div);
// }
// const divChildren = document.querySelectorAll(".container>div");
// divChildren.forEach((divChild) => {
//     divChild.addEventListener("mouseenter", () => {
//         divChild.classList.add("hoverboard");
//     });
// });

function customGrid(xByX) {
    const grid = ( xByX * xByX ) + xByX;
    const modifier = xByX + 1; // I put ~const modifier = grid + 1~ here before. dang.
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 1; i < grid; i++) {
        const div = document.createElement("div");
        if (i % modifier === 0) {
            div.classList.add("another-div")
        } else {
            div.classList.add("normal-div");
        }
        container.appendChild(div);
    }
    const divChildren = document.querySelectorAll(".container>div");
    divChildren.forEach((divChild) => {
        divChild.addEventListener("mouseenter", () => {
            divChild.classList.add("hoverboard");
        });
    });
}

customGrid(16);




