$(document).ready(function(){
	$(document).on("click", function(){
			//Duplicate a block, prevent changing its position by removing the class
        	$(".js-myClass").clone().appendTo("body").removeClass("js-myClass");
        });
	//Get cursor coordinates
    $(document).on( "mousemove", function( event ) {
        $(document).on("click", function(){
        	//Change block's position
            $(".js-myClass").offset({top: event.pageY, left: event.pageX});
        });
    });
    $(document).on("click", function(){
    		//Count clicks
            var value = $(".js-myClass").data().value + 1;
            //Change text value
            $(".js-myClass").text(value).data().value = value;
        });
});