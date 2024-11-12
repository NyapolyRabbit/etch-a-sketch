let randomizeColorBoolean = false;
let progressiveDarkeningBoolean = false;

function createGrid(size) {

    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);

    for (let i = 0; i < size; i++){
        const column = document.createElement("div");
        column.classList.add("column");
        container.appendChild(column);

        for (let j = 0; j < size; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            column.appendChild(square);
        }
    }
    color();
}

let randomColorize = document.getElementById("randomColor");

randomizeColor.addEventListener("click", function () {
    randomizeColorBoolean = !randomizeColorBoolean;
    color();
});

function random() {
    const [red, green, blue] = Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
    return `rgb(${red}, ${green}, ${blue})`;
}

function color() {
    const divs = document.getElementsByClassName("square");

    for (let i = 0; i < divs.length; i++) {
        divs[i].removeEventListener("mouseover", changeColor);

        divs[i].addEventListener("mouseover", changeColor);
    }
}

function changeColor() {
    if (randomizeColorBoolean) {
        event.target.style.backgroundColor = random();
    }
    else {
        event.target.style.backgroundColor = "red";
    }
}

createGrid(16);

let grid = document.getElementById("grid");

grid.addEventListener("click", function() {
    let limit;
    do {
        limit = prompt("Choose the number of squares per side for the new grid (Must be equal to or less than 100)");
    } while (limit > 100);

    const removeDivs = document.querySelectorAll("div");
    removeDivs.forEach(div => div.remove());

    createGrid(limit);
});

let progressiveDarkening = document.getElementById("progressiveDarkening");

progressiveDarkening.addEventListener("click", function () {
    progressiveDarkeningBoolean = !progressiveDarkeningBoolean;
    darken();
});

function darken() {
    const divs = document.getElementsByClassName("square");

    for (let i = 0; i < divs.length; i++) {
        divs[i].removeEventListener("mouseover", changeDarken);

        divs[i].addEventListener("mouseover", changeDarken);
    }
}

function changeDarken () {
    let currentOpacity = parseFloat(event.target.style.opacity) || 0;
    if (progressiveDarkeningBoolean) {
        currentOpacity = Math.min(currentOpacity + 0.1, 1);
        event.target.style.opacity = currentOpacity;
    }
    else {
        event.target.style.opacity = 1;
    }
}