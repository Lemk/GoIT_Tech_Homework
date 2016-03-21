var tests = {
    caption: 'Тест по программированию',
    question: 'Вопрос №',
    answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
    captionBtn: 'Проверить мои результаты',
    wrapper: document.createElement('div'),

    initElements: function () {
        this.wrapper.className = 'container';
        var body = document.getElementsByTagName('body');
        document.body.appendChild(this.wrapper);
    },
    setCaption: function () {
        var name = document.createElement('h3');
        name.innerHTML = '<p class="text-center">' + this.caption + '</p>';
        this.wrapper.appendChild(name);
    },
    setQuestion: function () {
        var list;
        var listItem;
        for (var i = 0; i < 3; i++) {
            list = document.createElement('ul');
            list.innerHTML = (i + 1) + '. ' + this.question + (i + 1);
            for (var j = 0; j < this.answer.length; j++) {
                listItem = document.createElement('li');
                listItem.className = 'list-unstyled';
                listItem.innerHTML = '<label><input class=check-' + i + j + "" + ' type="checkbox" value="">' +
                    '<p>' + this.answer[j] + '</p></label>';
                list.appendChild(listItem);
            }
            this.wrapper.appendChild(list);
        }

    },
    setButton: function () {
        var btnBox = document.createElement('div');
        var button = document.createElement('button');
        button.className = 'btn btn-default';
        button.type = 'submit';
        button.innerHTML = this.captionBtn;
        btnBox.className = 'btnBox';
        btnBox.appendChild(button);
        this.wrapper.appendChild(btnBox);
    },
    show: function () {
        this.initElements();
        this.setCaption();
        this.setQuestion();
        this.setButton();
    }
};

tests.show();

