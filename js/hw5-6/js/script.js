var timer = {
    self: null,
    isStart: false,
    onStart: function () {
        var currHours;
        var currMin;
        var currSec;
        if (self.isStart == false) {
            self.isStart = true;
            self.btnStart.innerHTML = 'Pause';
            self.btnStart.style.backgroundColor = '#e43009';
            self.timer1 = setTimeout(function run() {
                self.msec2 = self.msec2 + 4;
                if (self.msec2 >= 10) {
                    self.msec2 = 0;
                    self.msec1++;
                }
                if (self.msec1 === 10) {
                    self.msec1 = 0;
                }
                self.lblMsec.innerHTML = self.msec + '' + self.msec1 + '' + self.msec2;
                self.timer1 = setTimeout(run, 1);
            }, 1);
            self.timer2 = setTimeout(function run() {
                self.msec++;
                if (self.msec == 10) {
                    self.msec = 0;
                    self.s++;
                }
                if (self.s == 60) {
                    self.s = 0;
                    self.m++;
                }
                if (self.m == 60) {
                    self.m = 0;
                    self.h++;
                }
                currSec = (self.s < 10) ? '0' + self.s : self.s;
                currMin = (self.m < 10) ? '0' + self.m : self.m;
                currHours = (self.h < 10) ? '0' + self.h : self.h;
                self.lblMsec.innerHTML = self.msec + '' + self.msec1 + '' + self.msec2;
                self.lblSec.innerHTML = currHours + ':' + currMin + ':' + currSec;
                self.timer2 = setTimeout(run, 100);
            }, 100);
        } else {
            self.isStart = false;
            self.btnStart.innerHTML = 'Start';
            self.btnStart.style.backgroundColor = '#B8E475';
            clearTimeout(self.timer1);
            clearTimeout(self.timer2);
        }
    },
    onClear: function () {
        clearTimeout(self.timer1);
        clearTimeout(self.timer2);
        self.msec = 0;
        self.msec1 = 0;
        self.msec2 = 0;
        self.s = 0;
        self.m = 0;
        self.h = 0;
        self.lblMsec.innerHTML = '000';
        self.lblSec.innerHTML = '00:00:00';
        self.isStart = false;
        self.btnStart.innerHTML = 'Start';
        self.btnStart.style.backgroundColor = '#B8E475';
    },
    init: function (btnStart, btnClear, captionSec, captionMilliSec) {
        self = this;
        self.btnStart = document.getElementById(btnStart);
        self.btnStart.addEventListener('click', self.onStart);
        self.btnClear = document.getElementById(btnClear);
        self.btnClear.addEventListener('click', self.onClear);
        self.lblMsec = document.getElementById(captionMilliSec);
        self.lblSec = document.getElementById(captionSec);
        self.onClear();
    }
};

timer.init('start', 'clear', 'sec', 'millisec');





