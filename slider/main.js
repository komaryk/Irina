$(function() {

    //configurations
    var animationSpeed = 1000;
    var slideWidth = 230;
    var pause = 3000;
    var currentSlide = 1;

    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('li');

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            // Move slider to the left
            $slideContainer.animate({'margin-left': '-='+slideWidth}, animationSpeed, function() {
                currentSlide ++;
                // After the last slide go to the first slide seamlessly
                if (currentSlide === $slides.length-3) {
                    currentSlide = 1;
                    $slideContainer.css({'margin-left': 0});
                }
            });
        }, pause);
    };

    function pauseSlider() {
        clearInterval(interval);
    };

    // Pause while hovering, then restart
    $slideContainer.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

    startSlider();
});