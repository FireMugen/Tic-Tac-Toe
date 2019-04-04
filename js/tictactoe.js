var board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var currentMarker = "X";
var numberOfTurns = 0;

const boardClear = function () {
		  board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			numberOfTurns = 0;
			currentMarker = "X";
};

const makeMove = function (boardNumber) {
  board[boardNumber-1] = currentMarker;
	checkForWinner();
	swapMarker();
};

const swapMarker = function () {
	numberOfTurns += 1;
	if (currentMarker === "X"){
		currentMarker = "O";
		return "X";
	} else {
		currentMarker = "X";
		return "O";
	}
};

const checkForWinner = function () {
		if      (board[0] === board[1] && board[0] === board[2]) {
			return true;
	} else if (board[3] === board[4] && board[3] === board[5]) {
			return true;
	} else if (board[6] === board[7] && board[6] === board[8]) {
			return true;
	} else if (board[0] === board[3] && board[0] === board[6]) {
			return true;
	} else if (board[1] === board[4] && board[1] === board[7]) {
			return true;
	} else if (board[2] === board[8] && board[2] === board[5]) {
			return true;
	} else if (board[0] === board[4] && board[0] === board[8]) {
			return true;
	} else if (board[2] === board[4] && board[2] === board[6]) {
			return true
	}
};
