var playerOneScore = 0;
var playerTwoScore = 0;

$(document).ready(function(){

	$("h4")

	$("button").hide();

	$(".board").on("click", function(){
		let boardSquare = +$(this).attr('id') - 1;
		if (typeof board[boardSquare] === "string") {
			return;
		}
		if (checkForWinner() === true){
			return;
		}
		if (currentMarker === "X"){
			$(this).css("background-image", "url('images/close.svg')");
			$("h2").html("Player Two Go!")
	} else if (currentMarker === "O") {
			$(this).css("background-image", "url('images/circumference.svg')");
			$("h2").html("Player One Go!")
	}
		let boardNumber = $(this).attr('id');
		let marker = currentMarker
		makeMove(boardNumber);
	});

	$(".board").on("click", function(){
		if (numberOfTurns === 9){
			$("h2").html("It's a Draw!")
			$("button").show();
	 }
	});

	$(".board").on("click", function(){
		if (checkForWinner() === true && currentMarker === "O"){
			$("h2").html(`Player One You Win!`);
			$("button").show();
			playerOneScore += 1;
		}	else if (checkForWinner() === true && currentMarker === "X"){
			$("h2").html(`Player Two You Win!`);
			$("button").show();
			playerTwoScore += 1;


		}
	});

	$("button").on("click", function(){
		boardClear();
		$(".board").css('background-image', '');
		$("h2").html("Player One Go!");
		$("button").hide();
		$("#playerOne").html(`Player One: ${playerOneScore}`);
		$("#playerTwo").html(`Player Two: ${playerTwoScore}`);
	});
});
