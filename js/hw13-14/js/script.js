'use strict';

(function () {
    var questions = [
        {
            question: 'Сколько будет 5 * 3?',
            answers: ['13', '8', '15'],
            correctAnswer: 2
        },
        {
            question: 'Сколько будет 48 / 12?',
            answers: ['4', '5', '3'],
            correctAnswer: 0
        },
        {
            question: 'Сколько пальцев на руке?',
            answers: ['3.5', '4', '1', '5'],
            correctAnswer: 3
        }
    ];
    // пишем в локальное хранилище
    localStorage.setItem('questions', JSON.stringify({info: questions}));

    // читаем из локального хранилища
    var questionsStorage = JSON.parse(localStorage.getItem('questions')).info;
    var data = {
        caption: 'Серьезная математика - курс для продвинутых.',
        questions: questionsStorage
    };
    // создаем массив правильных ответов
    var masCorrectAnswers = [];
    for (var i = 0; i < data.questions.length; i++) {
        masCorrectAnswers.push('q' + i + 'a' + data.questions[i].correctAnswer);
    }
    // выводим на экран вопросы и варианты ответов
    var html = document.getElementById('script-test').innerHTML;
    var content = tmpl(html, data);
    document.body.innerHTML = content;

    var modalDialog = document.getElementById('modal-dialog');
    var btnResult = document.getElementById('btn-result');
    var checkboxs;
    btnResult.addEventListener('click', function (e) {
        // очищаем информацию в диалоговом окне
        var mess = document.querySelector('.modal-info');
        mess.innerText = '';
        modalDialog.style.display = 'block';

        var good = 0;
        checkboxs = document.getElementsByTagName('input');
        for (var i = 0; i < checkboxs.length; i++) {
            if (checkboxs[i].checked) {
                if (masCorrectAnswers.indexOf(checkboxs[i].name) != -1) good++;
                else good--;
            }
        }
        if (good == data.questions.length)
            mess.innerText = 'Test successfully passed !!!';
        else
            mess.innerText = 'Test fails :(';
        e.preventDefault();
    });

    var btnClose = document.getElementsByClassName('close');
    for (var i = 0; i < btnClose.length; i++) {
        btnClose[i].addEventListener('click', function () {
            modalDialog.style.display = 'none';
            for (var i = 0; i < checkboxs.length; i++) {
                if (checkboxs[i].checked) {
                    checkboxs[i].checked = false;
                }
            }
        });
    }
})();



