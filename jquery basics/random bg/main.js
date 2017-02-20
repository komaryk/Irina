$.fn.randomColor = function() {
	var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	$("body").css("background-color", color);
};

$(document).ready(function(){
	$(document).randomColor();
});


window.setInterval(function(){
	$(document).randomColor();
}, 5000);