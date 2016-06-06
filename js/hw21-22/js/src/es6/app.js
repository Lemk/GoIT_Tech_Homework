'use strict';

(function() {
    let questions = [
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

    var myString = strings;

    // пишем в локальное хранилище
    localStorage.setItem('questions', JSON.stringify({info: questions}));
    // читаем из локального хранилища
    let questionsStorage = JSON.parse(localStorage.getItem('questions')).info;
    let data = {
        caption: myString.InitCaption(),
        questions: questionsStorage
    };
    // создаем массив правильных ответов
    let masCorrectAnswers = [];

    for (let i = 0; i < data.questions.length; i++) {
        masCorrectAnswers.push('q' + i + 'a' + data.questions[i].correctAnswer);
    }
    // выводим на экран вопросы и варианты ответов
    let html = document.getElementById('script-test');

    let content = tmpl(html.innerHTML, data);
    document.body.innerHTML = content;

    let modalDialog = document.getElementById('modal-dialog');
    let btnResult = document.getElementById('btn-result');

    let checkboxs;
    btnResult.addEventListener('click', (e) => {
        // очищаем информацию в диалоговом окне
        let mess = document.querySelector('.modal-info');
        mess.innerText = '';
        modalDialog.style.display = 'block';

        let good = 0;
        checkboxs = document.getElementsByTagName('input');

        for (let i of checkboxs)
        {
            if (i.checked) {
                if (masCorrectAnswers.indexOf(i.name) != -1) good++;
                else good--;
            }
        }
        if (good == data.questions.length)

            mess.innerText = myString.InitMessageWin();
        else
            mess.innerText = myString.InitMessageFail();
        e.preventDefault();
    })
    let btnClose = document.getElementsByClassName('close');
    for (let j of btnClose) {
            j.addEventListener('click', () => {
            modalDialog.style.display = 'none';
            for (let i of checkboxs)
            {
                if (i.checked) {
                    i.checked = false;
                }
            }
        })
    }
})();