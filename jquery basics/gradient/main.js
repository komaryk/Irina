var angle = 0;
var speed = $("#range").val();
// Set the gradient parameters
$(document).ready(function(e){
    function gradient() {
        angle++;
        if(angle > 359){
            angle = 0;
        }
        $("body").css("background-image", "linear-gradient(" + angle + "deg, #7f87a6, #fde7d2)");
        setTimeout(gradient, speed);
    }
    gradient();
});
// Get input value
$(document).on('input', '#range', function() {
    speed = $(this).val();
});