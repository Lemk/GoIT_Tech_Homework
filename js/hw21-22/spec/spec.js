var strings = require('../js/strings.js');

describe("names of tags check ", function () {
    //prepare
    var nameWin = strings.InitMessageWin();
    var nameFail = strings.InitMessageFail();
    var nameCaption = strings.InitCaption();
    //act

    //assert
    it("massages, caption", function () {
        expect(nameWin).toBe('Test successfully passed !!!');
        expect(nameFail).toBe('Test fails :(');
        expect(nameCaption).toBe('Серьезная математика - курс для продвинутых.');
    });
});