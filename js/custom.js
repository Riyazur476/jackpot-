//FadeInimg 
$(document).ready(function() {
    //Banner FadeImage
    $('#FadeInimg').EzFade({
        height: '692',
        width: '673',
        duration: 5000,
    });
    //Banner Counter js
    $('.counter').counterUp({
        delay: 50,
        time: 4000
    });
    //
    $('.ziehharmonika').ziehharmonika({
        arrow: false,
        collapsible: true,
        scroll: false
    });
    //
    $(function() {
        $('#countdown').countdown({
            year: 2022, // YYYY Format
            month: 10, // 1-12
            day: 1, // 1-31
            hour: 0, // 24 hour format 0-23
            minute: 0, // 0-59
            second: 0, // 0-59
        });
    });



    //
    $('.GameSlider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});