const gridContainer = document.querySelector('.grid-container');

for(let i = 1; i < 257; i++) {
    const div = document.createElement("div");
    gridContainer.appendChild(div);
    div.style.border = '1px solid red';
    gridContainer.style.border = '1px solid red';
}
