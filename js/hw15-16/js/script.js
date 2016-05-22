'use strict';

function flickrSearch() {
    $('#results').empty();
    var urlSearch = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + $('#search-text').val() + "&tagmode=any&format=json&jsoncallback=?";
    $.getJSON(urlSearch,
        function (data) {
            $.each(data.items, function (i, item) {
                $("<img/>").attr("src", item.media.m).appendTo("#results");
                if (i == 20) return false;
            });
        });
}

$(function () {
    // первое задание
    $('#search-text').keypress(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            flickrSearch();
        }
    });
    $('#search-submit').click(function (e) {
        e.preventDefault();
        flickrSearch();
    });

    // второе задание
    function Human() {
        this.name = 'John';
        this.age = 30;
        this.sex = 'man';
        this.height = 180;
        this.weight = 80;
    };
    var human = new Human();


    function Worker() {
        this.workplace = 'Chicago';
        this.salary = 2000;
        this.work = function () {

            this.work += 1;
        };
    };

    Worker.prototype = human;

    function Student() {
        this.studyplace = 'Seattle';
        this.grants = 900;
        this.watchTVshows = function () {
            this.grants -= 50;
        };
    };
    Student.prototype = human;

    var worker = new Worker();
    var worker2 = new Worker();
    var worker3 = new Worker();

    var student = new Student();
    var student2 = new Student();

    console.log('worker', worker);
    console.log('student', student);
});


