let activePlayer = 'X';
let selectedSquares = [];

function placeXorO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("Images/x.png")';
        }
        else {
            select.style.backgroundImage = 'url("Images/o.png")';
        }
    }
}