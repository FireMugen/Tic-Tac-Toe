$(document).ready(function(){

const svgSwitch = function () {
	if (currentMarker() = "X"){
	$(this).css("background-image", "url('images/close.svg')");
} else if (currentMarker() = "O" ) {
	$(this).css("background-image", "url('images/circumferance.svg')")
}
};


$(".board").on("click", function(){
	let boardNumber = $(this).attr('id');

	let marker = currentMarker
	console.log(marker);
	$(this).html(marker)

	makeMove(boardNumber);

});
});
