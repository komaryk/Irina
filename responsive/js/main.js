$(document).ready(function(){
	// Open and close select box on click
    $(".select").on("click", function(){
        $(this).toggleClass("select--open");
    });
    $(".select").hover(function(){
    }, function(){
        $(this).removeClass("select--open");
    });
    $(".select li").on("click", function(){
    	var value = $(this).data().value;
        $(this).parent().find(".js-select").text(value).data().value = value;
    });
    $(".header").on("click", function(){
        $(this).toggleClass("header--open");
    });
    $(".header").hover(function(){
    }, function(){
        $(this).removeClass("header--open");
    });

    //Close select box on click outside of the box
 //    $(document).on('click', function(event) {
	//     if (!$(event.target).is('.select--open')) {
	//         $('.select').toggleClass('select--open');
	//     }
	// });
	// $(document).on("click",function (e)
	// {
	//     var container = $(".select");

	//     if (!container.is(e.target) // if the target of the click isn't the container
	//         && container.hasClass('select--open') == true) // and the container is open
	//     {
	//         $(container).removeClass('select--open');
	//     }
	// });
});