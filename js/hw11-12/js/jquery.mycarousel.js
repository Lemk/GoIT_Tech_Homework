(function ($) {

    $.fn.myCarousel = function (options) {

        var defaults = {
            leftUIEl: '.arrow-left',
            rightUIEl: '.arrow-right'
        };

        var settings = $.extend(defaults, options);

        var leftUIEl = settings.leftUIEl;
        var rightUIEl = settings.rightUIEl;
        var elementsList = this;

        var pixelsOffset = 210;
        var currentLeftValue = 0;

        $(leftUIEl).click(function () {
            currentLeftValue += pixelsOffset;
            elementsList.animate({left: currentLeftValue + "px"}, 500);
        });

        $(rightUIEl).click(function () {
            currentLeftValue -= pixelsOffset;
            elementsList.animate({left: currentLeftValue + "px"}, 500);
        });

    }

})(jQuery);
