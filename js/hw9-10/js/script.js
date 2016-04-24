$(function () {
    $(".dropbox__item").change(function () {
        var color = $(this).val();
        $('body').removeClass();
        $('body').addClass(color);
    });
});

$(function () {
    $("select").searchable();
});

$(function () {
    var $links = $("a");
    $links.mouseenter(function () {
        $(this).animate({"color": '#E4A402'}, 500);
    });
    $links.mouseleave(function () {
        $(this).animate({"color": '#bbb'}, 500);
    });
});

$(function () {
    $(" #nav li").hover(function () {
        $(this).find('ul:first').css({visibility: "visible", display: "none"}).show(400);
    }, function () {
        $(this).find('ul:first').css({visibility: "hidden"});
    });
});
