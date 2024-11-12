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

    const divs = document.getElementsByClassName("square");

    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function () {
            divs[i].style.backgroundColor = "red";
        });
    }
}

createGrid(16);

let button = document.querySelector("button");

button.addEventListener("click", function() {
    let limit;
    do {
        limit = prompt("Choose the number of squares per side for the new grid (Must be equal to or less than 100)");
    } while (limit > 100);

    const removeDivs = document.querySelectorAll("div");
    removeDivs.forEach(div => div.remove());

    createGrid(limit);
});
