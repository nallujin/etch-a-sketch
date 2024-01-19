const body = document.querySelector("body");
const container = document.querySelector(".container");
const btnOne = document.createElement("button");
const btnTwo = document.createElement("button");

// Add button to the top of the page
btnOne.id = "btn01";
btnOne.type = "button";
btnOne.textContent = "Your custom grid here";
btnOne.style.margin = "10px";
body.prepend(btnOne);

// For clearing the 'canvas'
btnTwo.id = "btn02";
btnTwo.type = "button";
btnTwo.textContent = "Reset canvas";
btnTwo.style.margin = "10px";
body.insertBefore(btnTwo, container);


// Random color generator
const randomRGB = () => Math.floor(Math.random() * 255) + 1;

// Ignore these commented block, I've included this on the function below this commented block.
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
        div.classList.add("default-color");
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
            // divChild.classList.remove("default-color");
            // divChild.classList.add("hoverboard");
            divChild.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
        });
    });
}

customGrid(16);

btnOne.addEventListener("click", () => {
    let desiredGrid = prompt("Please input your desired (1-100)!");
    const numberGrid = Number(desiredGrid);
    if (numberGrid >= 1 && numberGrid <= 100) {
        customGrid(numberGrid);
    } else {
        alert(`${desiredGrid} is an invalid input. Please input between 1 to 100.`);
    }
});

btnTwo.addEventListener("click", () => {
    const allDivs = document.querySelectorAll(".container>div");
    allDivs.forEach((div) => {
        div.classList.remove("hoverboard");
        div.classList.add("default-color");
    });
});

