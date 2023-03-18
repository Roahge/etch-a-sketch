const gridContainer = document.querySelector('.grid-container');
const button = document.querySelector('button');





const gridCreation = (size) => {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridSize = (size * size);


    if(size > 100 || size) {size = 100;}
        for(let i = 0; i < gridSize; i++) {
            const div = document.createElement("div");
            div.classList.add("grid");
            div.onmouseover = function(){div.style.background = "black"};
            gridContainer.appendChild(div);
}}

function resizeGrid() {
    const size = window.prompt('Choose a grid size number between 0 and 100');

    if (isNaN(size) || size < 0 || size > 100) {
        window.alert('The number you entered is not an acceptable value, please choose between 0 and 100');
    }
    {
        deleteGrid();
        gridCreation(size);
    }
}

function deleteGrid() {
    const items = document.getElementsByClassName('.grid');
    const total = items.length;

    for(let i = 0; i <total; i++) {
        items[0].parentNode.removeChild(items[0]);
    }
}
button.addEventListener('click', () => {
    resizeGrid();
})

gridCreation(16);
