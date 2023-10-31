
$('.conteiner-slider').slick({
    dots:true,
    arrows:false,
    speed:1000,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    responsive: [
        {
            breakpoint:768,
            settings:{
                slidesToShow:1,
                slidesToScroll: 1
            }
        }]

});
