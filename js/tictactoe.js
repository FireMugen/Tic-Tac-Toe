// Board  1  2  3
// .....  4  5  6
// .....  7  8  9
// ..............

// Array numbers represent a tile on the game board
// When an index is picked the player is switched until the 6th turn
// then a function that checks the combination of these numbers runs
// Three tiles in a row are considered a win so.. 1 2 3,, 4 5 6,, 7 8 9
// 1 4 7,, 2 5 8,, 3 9 6,, 1 5 9,, 3 5 7.

var board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentMarker = "X";
var turnCounter = 0;

// const

const makeMove = function (boardNumber) {
  board[boardNumber-1] = currentMarker;
	checkForWinner();
	swapMarker();
};

const swapMarker = function () {
	if (currentMarker === "X"){
		currentMarker = "O"
		return "X";
	} else {
		currentMarker = "X";
		return "O";
	}
};

const checkForWinner = function () {
	console.log(board);
	if (board[0] === board[1] && board[0] === board[2]) {
		console.log(`${ currentMarker } is the winner!`);
	} else if (board[3] === board[4] && board[3] === board[5]) {
		console.log(`${ currentMarker } is the winner!`);
	} else if (board[6] === board[7] && board[6] === board[8]) {
		console.log(`${ currentMarker } is the winner!`);
	} else if (board[0] === board[3] && board[0] === board[6]) {
		console.log(`${ currentMarker } is the winner!`);
	} else if (board[1] === board[4] && board[1] === board[7]) {
		console.log(`${ currentMarker } is the winner!`);
	} else if (board[2] === board[8] && board[2] === board[5]) {
		console.log(`${ currentMarker } is the winner!`);
	} else if (board[0] === board[4] && board[0] === board[8]) {
		console.log(`${ currentMarker } is the winner!`);
	} else if (board[2] === board[4] && board[2] === board[6]) {
		console.log(`${ currentMarker } is the winner!`);
	}
};


// Board  1  2  3
// .....  4  5  6
// .....  7  8  9
// ..............z

//X wins
// makeMove(0);
// makeMove(4);
// makeMove(3);
// makeMove(7);
// makeMove(6);
