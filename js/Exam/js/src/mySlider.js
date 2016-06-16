(function($){
    $.fn.mySlider = function(options){

        var defaults = {
            list: '.slider__list',
            leftBtn: '.sliders__left',
            rightBtn: '.sliders__right',
            offset: 310,
            limit: 600,
            anim: 500
        };

        var settings = $.extend(defaults, options);


        var elementsList = $(settings.list);
        var pixelsOffset = settings.offset; //310
        var currentLeftValue = 0;

        $(settings.leftBtn).click(function () {

            if (currentLeftValue) {
                currentLeftValue += pixelsOffset;
                elementsList.animate({left: currentLeftValue + "px"}, settings.anim);
            }

        });

        $(settings.rightBtn).click(function () {
            if (currentLeftValue > -settings.limit) {
                currentLeftValue -= pixelsOffset;
                elementsList.animate({left: currentLeftValue + "px"}, settings.anim);
            }
        });
    }
})(jQuery)
