var question = {
    setQuestion: function (parent, question, answers) {
        var list;
        var listItem;

        list = document.createElement('ul');
        list.innerHTML = question;
        for (var j = 0; j < answers.length; j++) {
            listItem = document.createElement('li');
            listItem.className = 'list-unstyled';
            listItem.innerHTML = '<label><input type="checkbox" name=ch' + j + '>' + '<p>' + answers[j] + '</p></label>';
            list.appendChild(listItem);
        }
        return parent.appendChild(list);
    }

};

// заголовок
var parent = initElements(document.body);
setCaption(parent, 'Тест по программированию');
parent = setForm(parent);
// 1 блок
var answers = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'];
question.setQuestion(parent, 'Вариант №1', answers);
// 2 блок
answers = ['Вариант ответа №4', 'Вариант ответа №5', 'Вариант ответа №6', 'Вариант ответа №7'];
question.setQuestion(parent, 'Вариант №2', answers);
// 3 блок
answers = ['Вариант ответа №8', 'Вариант ответа №9', 'Вариант ответа №10'];
question.setQuestion(parent, 'Вариант №3', answers);
// кнопка отправки
setButton(parent, 'Проверить мои результаты');


function initElements(parent) {
    wrapper = document.createElement('div');
    wrapper.className = 'container';
    return parent.appendChild(wrapper);
};

function setCaption(parent, caption) {
    var name = document.createElement('h3');
    name.innerHTML = '<p class="text-center">' + caption + '</p>';
    return parent.appendChild(name);
};

function setForm(parent, caption) {
    var name = document.createElement('form');
    name.id = 'test';
    return parent.appendChild(name);
};


function setButton(parent, caption) {
    var btnBox = document.createElement('div');
    var button = document.createElement('button');
    button.className = 'btn btn-default';
    button.type = 'submit';
    button.innerHTML = caption;
    btnBox.className = 'btnBox';
    btnBox.appendChild(button);
    return parent.appendChild(btnBox);
};







