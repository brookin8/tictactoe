//Globals
var restartButton = document.getElementById('restartButton');
var spaces = document.getElementsByClassName('space');
var symbols = ["O","X"];
var turn = 0;
var notification = document.getElementById('notification');
var winnerMessage = document.getElementById('winnerMessage');


// Waits for page to load before being able to use functions
document.onreadystatechange = function () {
	if (document.readyState == "interactive") {
		restartButton.onclick = startGame; //Runs startGame() when you hit button
		startGame(); //Runs start game whenever the page reloads
	}
};



function startGame() {
	
	//Clear Board
	//clear();

	//Reset turn counter
	turn = 0;

	//Remove winner notification and make sure div is hidden
	notification.style.display = 'none';
	winnerMessage.innerHTML = "";	

	//Add click events on squares
	for (i=0 ; i<spaces.length; i++) { //for loop to go through each space
		spaces[i].innerHTML = '';
		spaces[i].addEventListener("click", takeSpace); //add event listener to each space that listens for click
	}

}

function takeSpace() {

	//I wrote the innerHTML symbol piece like this:
	//if(turn === 0 || turn%2 === 0) {
	// 	this.innerHTML = symbols[1];
	// } else {
	// 	this.innerHTML = symbols[0];
	// }

	turn++;
	
	var currentPlayer = symbols[turn % 2]
	this.innerHTML = currentPlayer;
	this.removeEventListener("click", takeSpace); //removes function from space when clicked


	for(var i=0; i < wins.length; i++) {
		if(checkForWin(wins[i])) {
			for (var j=0; j < spaces.length; j++) {
				spaces[j].removeEventListener("click",takeSpace);
			}
			notification.style.display = 'block';
			winnerMessage.innerHTML = "Yay! "+ currentPlayer+ " won!";
			break;
		} else {
			if(turn == 9) {
				notification.style.display = 'block';
				winnerMessage.innerHTML += "It's a Draw";
			}
		}
	}
}

	




function checkForWin(winArray) {
	
	//Win happens if all indices contain same symbol
	//Returns true if all true, and false if one false
	return spaces[winArray[0]].innerHTML !== '' &&
		spaces[winArray[0]].innerHTML === spaces[winArray[1]].innerHTML && 
		spaces[winArray[0]].innerHTML === spaces[winArray[2]].innerHTML;
} 



