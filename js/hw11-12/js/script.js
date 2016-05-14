$(function () {
    // template use
    var html = $('#carousel').html();
    var images = [
        {
            img: 'img1.jpg',
            caption: 'Описание 1'
        },
        {
            img: 'img2.jpg',
            caption: 'Описание 2'
        },
        {
            img: 'img3.jpg',
            caption: 'Описание 3'
        },
        {
            img: 'img4.png',
            caption: 'Описание 4'
        },
        {
            img: 'img1.jpg',
            caption: 'Описание 5'
        },
        {
            img: 'img2.jpg',
            caption: 'Описание 6'
        },
        {
            img: 'img3.jpg',
            caption: 'Описание 7'
        },
        {
            img: 'img4.png',
            caption: 'Описание 8'
        },
        {
            img: 'img1.jpg',
            caption: 'Описание 9'
        },
        {
            img: 'img2.jpg',
            caption: 'Описание 10'
        },
        {
            img: 'img3.jpg',
            caption: 'Описание 11'
        },
        {
            img: 'img4.png',
            caption: 'Описание 12'
        }
    ];
    data = {
        caption: 'My carousel',
        leftCaption: 'Влево',
        rightCaption: 'Вправо',
        leftClass: 'carousel-arrow-left',
        rightClass: 'carousel-arrow-right',
        containerClass: 'carousel-hider',
        listClass: 'carousel-list',
        imgs: images
    };

    var content = tmpl(html, data);
    $('body').append(content);

    // jQuery plug-in use
    var params = {
        leftUIEl: '.carousel-arrow-left',
        rightUIEl: '.carousel-arrow-right'
    };

    $('.carousel-list').myCarousel(params);
});
