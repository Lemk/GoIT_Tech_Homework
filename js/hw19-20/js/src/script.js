$(function () {
    $('#slider__radio1').click(function () {
        $('.slider__img').animate({opacity: 0}, 200);
        $('.slider__img').css({background: 'url("img/img1.png")'}).animate({opacity: 1.0}, 300);
    });
    $('#slider__radio2').click(function () {
        $('.slider__img').animate({opacity: 0}, 200);
        $('.slider__img').css({background: 'url("img/img2.png")'}).animate({opacity: 1.0}, 300);
    });
    $('#slider__radio3').click(function () {
        $('.slider__img').animate({opacity: 0}, 200);
        $('.slider__img').css({background: 'url("img/img3.png")'}).animate({opacity: 1.0}, 300);
    });
    var acc = document.getElementsByClassName("infoContent__accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
});
