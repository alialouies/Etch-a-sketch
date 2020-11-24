document.addEventListener('DOMContentLoaded', function() {
    makeGrid(16)
})
const body = document.querySelector('body');
const main = document.createElement('main');
body.append(main);
const section = document.createElement('section');
section.setAttribute("id", "etch");
main.appendChild(section);
section.innerHTML = '<p>Etch-A-sketch</p><button class="btn" id="clear">Clear</button><button class="btn" id="color">Color</button>';
const container = document.getElementById('container');
etch.appendChild(container);

function makeGrid(cell) {
    for(let i=0; i < Math.pow(cell,2); i++) {
        let div = document.createElement('div');
        container.append(div);
        div.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = "#9a8e83";
        });
    }
}

function makeColorGrid(cell) {
    for(let i=0; i < Math.pow(cell,2); i++) {
        let div = document.createElement('div');
        container.append(div);
        div.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        });
        div.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = "filter: brightness(90%)";
        })
    }
}

function usersChoice() {
    let userChoice = prompt('How many squares per side?');
    container.style.gridTemplateColumns = 'repeat(' + userChoice + ', 1fr)'
    container.style.gridTemplateRows = 'repeat(' + userChoice + ', 1fr)'
    makeGrid(userChoice)
}

function colorChoice() {
    let userChoice = prompt('How many squares per side?');
    container.style.gridTemplateColumns = 'repeat(' + userChoice + ', 1fr)'
    container.style.gridTemplateRows = 'repeat(' + userChoice + ', 1fr)'
    makeColorGrid(userChoice)
}

function removeChildren() {
    container.textContent = '';
}
const grid = document.querySelector('#clear');
grid.addEventListener('click' , removeChildren)
grid.addEventListener('click', usersChoice);



const color = document.querySelector('#color')
color.addEventListener('click', removeChildren);
color.addEventListener('click', makeColorGrid);
color.addEventListener('click', colorChoice);


