var width = $('.ticker__text').width(),
    containerwidth = $('.ticker__wrap').width(),
    left = containerwidth;
$(document).ready(function(e){
    function tick() {
        if(--left < -width){
            left = containerwidth;
        }
        $(".ticker__text").css("margin-left", left + "px");
        setTimeout(tick, 16);
    }
    tick();
});