$(document).ready(function(){
    $(".card").css("top", "0"); // Set initial position of .card

    $(".container").mouseenter(function(){
        $(".card").stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function(){
        $(".card").stop().animate({
            top: '0px'
        }, 'slow');
    });
});
