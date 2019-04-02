$(document).ready(function(){

// $(currentMarker).hide();

$(".board").on("click", function(){
	if (currentMarker === "X"){
	$(this).css("background-image", "url('images/close.svg')");
} else if (currentMarker === "O") {
	$(this).css("background-image", "url('images/circumference.svg')")
}
	let boardNumber = $(this).attr('id');

	let marker = currentMarker
	console.log(marker);
	$(this).html(marker)

	makeMove(boardNumber);



});
});
