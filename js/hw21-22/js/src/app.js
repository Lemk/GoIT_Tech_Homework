'use strict';

(function () {
    var questions = [{
        question: 'Сколько будет 5 * 3?',
        answers: ['13', '8', '15'],
        correctAnswer: 2
    }, {
        question: 'Сколько будет 48 / 12?',
        answers: ['4', '5', '3'],
        correctAnswer: 0
    }, {
        question: 'Сколько пальцев на руке?',
        answers: ['3.5', '4', '1', '5'],
        correctAnswer: 3
    }];

    var myString = strings;

    // пишем в локальное хранилище
    localStorage.setItem('questions', JSON.stringify({ info: questions }));
    // читаем из локального хранилища
    var questionsStorage = JSON.parse(localStorage.getItem('questions')).info;
    var data = {
        caption: myString.InitCaption(),
        questions: questionsStorage
    };
    // создаем массив правильных ответов
    var masCorrectAnswers = [];

    for (var i = 0; i < data.questions.length; i++) {
        masCorrectAnswers.push('q' + i + 'a' + data.questions[i].correctAnswer);
    }
    // выводим на экран вопросы и варианты ответов
    var html = document.getElementById('script-test');

    var content = tmpl(html.innerHTML, data);
    document.body.innerHTML = content;

    var modalDialog = document.getElementById('modal-dialog');
    var btnResult = document.getElementById('btn-result');

    var checkboxs = void 0;
    btnResult.addEventListener('click', function (e) {
        // очищаем информацию в диалоговом окне
        var mess = document.querySelector('.modal-info');
        mess.innerText = '';
        modalDialog.style.display = 'block';

        var good = 0;
        checkboxs = document.getElementsByTagName('input');

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = checkboxs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _i = _step.value;

                if (_i.checked) {
                    if (masCorrectAnswers.indexOf(_i.name) != -1) good++;else good--;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        if (good == data.questions.length) mess.innerText = myString.InitMessageWin();else mess.innerText = myString.InitMessageFail();
        e.preventDefault();
    });
    var btnClose = document.getElementsByClassName('close');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = btnClose[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var j = _step2.value;

            j.addEventListener('click', function () {
                modalDialog.style.display = 'none';
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = checkboxs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var _i2 = _step3.value;

                        if (_i2.checked) {
                            _i2.checked = false;
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            });
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
})();
