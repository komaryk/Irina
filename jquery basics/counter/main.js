$(document).ready(function(){
    $(document).on( "mousemove", function( event ) {
        $(document).on("click", function(){
            $(".myClass").offset({top: event.pageY, left: event.pageX});
        });
    });
    $(document).on("click", function(){
            var value = $(".myClass").data().value + 1;
            $(".myClass").text(value).data().value = value;
        });
});