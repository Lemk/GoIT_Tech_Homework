$(function () {
    // tabs
    var $links = $('.tabs__item');
    $links.on('click', function () {
        var ind = $(this).index();
        for (var i = 0; i < $links.length; i++) {
            $links[i].className = 'tabs__item';
        }
        $links[ind].className = 'tabs__item tabs__item-select';

        var $contentTab = $('.content__tab');
        for (var i = 0; i < $contentTab.length; i++) {
            $contentTab[i].className = 'content__tab';
            $($contentTab[ind]).css('opacity', '0');
        }
        $contentTab[ind].className = 'content__tab content__tab-show';
        $($contentTab[ind]).animate({opacity: '1.0'}, 500);
    });

    // tooptips
    var $input = $('input');
    var $tip = $('.tip');
    var tempTitle;
    $input.hover(
        function (e) {
            e.preventDefault();
            tempTitle = $(this).attr('title');
            $(this).attr('title', '');
            $($tip).css({
                'left': e.pageX,
                'top': e.pageY
            });
            $($tip)[0].innerHTML = tempTitle;
            $($tip).show();

        },
        function () {
            $(this).attr('title', tempTitle);
            $($tip).hide();
        }
    );
});