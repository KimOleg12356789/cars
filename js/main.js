$(document).ready(function(){


$('.responsives-is').slick({
        infinite: true,
        speed: 900,
        dots:false,
        arows:true,
        centerMode: true,
        centerPadding:'40px',
        slidesToShow: 1,
        slidesToScroll: 1
  });


$('.iss').slick({
                      infinite: true,
                      speed: 900,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      arrows:false,
                      fade: false
});




const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});


 $("#modul-1").on("click", function (e) {
           $('.modul-1').css('display','block');
           $('body').css('overflow','hidden')
});

 $("#modul-2").on("click", function (e) {
           $('.modul-2').css('display','block');
           $('body').css('overflow','hidden')
});

 $(".close").on("click", function (e) {
           $('.modul-1').css('display','none');
           $('.modul-2').css('display','none');
           $('body').css('overflow','auto');
});



});