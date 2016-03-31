var test = {
    questionArray: [
        {
            question: 'Вариант №1',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        },
        {
            question: 'Вариант №2',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        },
        {
            question: 'Вариант №3',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        },
    ],
    caption: 'Тест по программированию',
    btnCaption: 'Проверить мои результаты',
    initElements: function (parent) {
        var name = document.createElement('h3');
        name.innerHTML = '<p class="text-center">' + this.caption + '</p>';
        parent.appendChild(name);

        var form = document.createElement('form');
        form.id = 'test';
        parent.appendChild(form);


        var wrapper = document.createElement('div');
        wrapper.className = 'container';
        return form.appendChild(wrapper);
    },
    setQuestion: function (parent) {
        var list;
        var listItem;
        for (var i = 0; i < this.questionArray.length; i++) {
            list = document.createElement('ul');
            list.innerHTML = this.questionArray[i].question;
            for (var j = 0; j < this.questionArray[i].answers.length; j++) {
                listItem = document.createElement('li');
                listItem.className = 'list-unstyled';
                listItem.innerHTML = '<label><input type="checkbox" name=ch' + i + j + '>' + '<p>' + this.questionArray[i].answers[j] + '</p></label>';
                list.appendChild(listItem);
            }
            parent.appendChild(list);
        }
    },
    setButton: function (parent) {
        var btnBox = document.createElement('div');
        var button = document.createElement('button');
        button.className = 'btn btn-default';
        button.type = 'submit';
        button.innerHTML = this.btnCaption;
        btnBox.className = 'btnBox';
        btnBox.appendChild(button);
        parent.appendChild(btnBox);
    },
    show: function (parent) {
        var group = this.initElements(parent);
        this.setQuestion(group);
        this.setButton(group);
    },
}

test.show(document.body);