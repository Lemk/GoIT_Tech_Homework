// случайные темы для картинок
var rand = ['joy', 'sport', 'forest', 'sea', 'flowers', 'cars', 'animals', 'stars', 'angels', 'guns', 'sun'];
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// отбор картинок ajax-запросом
function flickrSearch() {
    $('.grid').empty().append("<div class='grid-sizer'></div>");
    var $gitem;
    if($('#search__text').value == ""){
        $('#search__text').value = rand[randomInteger(0,10)];
    };
    var urlSearch = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + $('#search__text').val() + "&tagmode=any&format=json&jsoncallback=?";
    $.getJSON(urlSearch,
        function (data) {
            $.each(data.items, function (i, item) {
                $gitem = $("<div class='grid-item'/>").append("<img src='"+ item.media.m +"'/>");
                if(i % 3 === 0){
                    $gitem = $("<div class='grid-item clearfix'/>").append("<img src='"+ item.media.m +"'/>");
                }else{
                    $gitem = $("<div class='grid-item'/>").append("<img src='"+ item.media.m +"'/>");
                }
                $(".grid").append($gitem);
                if(document.body.clientWidth <= 320){
                    if (i == 3) return false;
                }else{
                    if (i == 11) return false;
                };
            });
        });
    $(".grid-item").masonry({
        itemSelector: '.grid-item',
        percentPosition: false
    });
};


$(function () {
    var op1 = {
        list: '.slider__list1',
        leftBtn: '.sliders__left1',
        rightBtn: '.sliders__right1'
    };
    $('.sliders').mySlider(op1);
    var op2 = {
        list: '.slider__list2',
        leftBtn: '.sliders__left2',
        rightBtn: '.sliders__right2'
    };
    $('.sliders').mySlider(op2);
    var op3 = {
        list: '.slider__list3',
        leftBtn: '.sliders__left3',
        rightBtn: '.sliders__right3'
    };
    $('.sliders').mySlider(op3);

    $('#search__text').keypress(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            flickrSearch();
        }
    });
    $('#search__submit').click(function (e) {
        e.preventDefault();
        flickrSearch();
    });
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item'
    });
    flickrSearch();
});