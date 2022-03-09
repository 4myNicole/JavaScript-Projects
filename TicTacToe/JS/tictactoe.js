let activePlayer = 'X'; //keeps track of whos turn it is
let selectedSquares = []; //stored an array of moved, to determine winner

function placeXorO(squareNumber) { //places X or O in the squares
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("Images/x.png")';
        }
        else {
            select.style.backgroundImage = 'url("Images/o.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions(); //for changin the active player
        if (activePlayer ==='X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        audio('Media/place.mp3');
        if(activePlayer === 'O') {
            disableClick();
            setTimeout(function () {computersTurn();}, 1000);
        }
        return true;
    }
    function computersTurn() { //makes random square be selected on computers turn
        let success = false;
        let pickASquare;
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXorO(pickASquare)){
                placeXorO(pickASquare);
                success = true;
            }
        }
    }
}

function checkWinConditions() { //Parses the selectedSquares array to search for win conditions
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); } //drawWinLine draws line if conditions are met
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }

    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }

    else if (selectedSquares.length >= 9){ //this checks if there is a tie
        audio('Media/tie.mp3');
        setTimeout(function() {resetGame();}, 1000) //.3 second timer before resetGame is called
    }

    function arrayIncludes(squareA, squareB, squareC) { //check if array includes 3 strings
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {return true;}
    }
}

function disableClick() { 
    body.style.pointerEvents = 'none'; //makes body temporarily unclickable
    setTimeout(function () { body.style.pointerEvents = 'auto' }, 1000); //makes body clickable again after 1 second
}

function audio(audioURL) {
    let audio = new Audio(audioURL) ;
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1, //start of lines x axis
        y1 = coordY1, //start of lines y axis
        x2 = coordX2, //end of lines x axis
        y2 = coordY2, //end of lines y axis
        x = x1, // stores temporary x axis - updated in animation loop
        y = y1; // stores temporary y axis - updated in animation loop

    function animateLineDrawing() { //interact with the canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608); //clear content from from last loop iteration
        c.beginPath(); //starts a new path for line
        c.moveTo(x1, y1); //moves line to starting point
        c.lineTo(x, y); //end point for line
        c.lineWidth = 10; 
        c.strokeStyle = 'rgba(70, 255, 33, .8)'; //line colour
        c.stroke(); //draws out everyhitng above
        if (x1 <= x2 && y1 <=y2) { //checks if weve reached the endpoint
            if (x < x2) { x += 10; } //adds 10 to previous x point
            if (y < y2) { y += 10; } //adds 10 to previous y point
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); } //cancels animatio loop if end point is reached
        }
        if (x1 <= x2 && y1 >= y2) { //similar to above, necessary for 6,4,2 win condition
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); }
        }
    }

    function clear() { //clears canvas after win line is drawn
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608); //clears canvas
        cancelAnimationFrame(animationLoop); //stops animation loop
    }
    disableClick(); // disallows clicking while win sound is playing
    audio('Media/winGame.mp3'); //plays win sound
    animateLineDrawing(); // calls main animation loop
    setTimeout(function () { clear(); resetGame() ; }, 1000); //waits 1 second then clears canvas and resets game
}

function resetGame() { //reset time 
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}
