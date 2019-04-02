$(document).ready(function(){

$(".board").on("click", function(){
	if (currentMarker === "X"){
		$(this).css("background-image", "url('images/close.svg')");
		$(this).off("click");
		$("h2").fadeIn("slow").html("Player Two Go!")
} else if (currentMarker === "O") {
		$(this).css("background-image", "url('images/circumference.svg')")
		$(this).off("click")
		$("h2").fadeIn("slow").html("Player One Go!")
}
	let boardNumber = $(this).attr('id');
	let marker = currentMarker
	makeMove(boardNumber);
});

$(".board").on("click", function(){
	if (numberOfTurns === 9){
		$("h2").html("It's a Draw!")
 }
});

$(".board").on("click", function(){
	if (checkForWinner() === true && currentMarker === "O"){
	$("h2").html(`Player One You Win`);
	$(".board").off("click");
}	else if (checkForWinner() === true && currentMarker === "X"){
	$("h2").html(`Player Two You Win`);
	$(".board").off("click");
}
});
});
