$(document).ready(function(){
	function windowSize(){
	var height = $(window).height();
	var width = $(window).width();
	
	$("#home").height(height);
	$("#home").width(width);

	}
	

	setInterval(windowSize, 300);
});