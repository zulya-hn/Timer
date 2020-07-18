"use strict";

    class TimerDisplay {

        constructor(obj) {
            this.days    =  document.querySelector(obj.days);
            this.hours   =  document.querySelector(obj.hours);
            this.mins    =  document.querySelector(obj.mins);
            this.seconds =  document.querySelector(obj.seconds);
    
            this.blinkTimer;
            this.blinkedTwoDots = obj.blinkedTwoDots;
        }
        
        // SHOW

        showStartTimer(data) {
            this.showTick(data);
        };

        showTick(data) {

            this.showExtraNull(data);
            this.timeWordsEnding(data);

            this.seconds.innerHTML = data.s;
            this.mins.innerHTML = data.m;
            this.hours.innerHTML = data.h;
            this.days.innerHTML = data.d;
        };

        showEnd () {
            alert('Таймер завершился')
        };

        // BLINK

        blink (interval = 1000) {
            
            this.blinkTimer = setInterval(() =>{
                document.querySelectorAll(this.blinkedTwoDots).forEach(function (item) {
                    item.style.opacity ^= 1 ;
                })

            }, interval);
        };

        stopBlink () {
            let timerDisplay = this;
            
            clearInterval(timerDisplay.blinkTimer);
            document.querySelectorAll(timerDisplay.blinkedTwoDots).forEach(function (item) {
                item.style.opacity = 1 ;
            })
        };

        // SUPPORT FUNCTIONS

        timeWordsEnding (data) {

            data.d = data.d + ' ' + this.getNumEnding(data.d, ['день', 'дня', 'дней']);
            data.h = data.h + ' ' + this.getNumEnding(data.h, ['час', 'часа', 'часов']);
            data.m = data.m + ' ' + this.getNumEnding(data.m, ['минута', 'минуты', 'минут']);
            data.s = data.s + ' ' + this.getNumEnding(data.s, ['секунда', 'секунды', 'секунд']);
        };
    
        getNumEnding (numberOfTime, endingArr) {
        
            numberOfTime = Math.trunc(numberOfTime).toString();
        
            let lastNumber = numberOfTime.charAt(numberOfTime.length - 1);
            let firstNumber = numberOfTime.charAt(numberOfTime.length - 2);
        
            if (lastNumber === '0' || lastNumber === '5' || lastNumber === '6' || lastNumber === '7' || lastNumber === '8' || lastNumber === '9') {
                return endingArr[2];
            } else if (firstNumber === '1') {
                return endingArr[2];
            }
        
            if (lastNumber === '2' || lastNumber === '3' || lastNumber === '4') {
                return endingArr[1];
            } else if (firstNumber === '1') {
                return endingArr[2];
            }
        
            if (lastNumber === '1') {
                return endingArr[0];
            } else if (firstNumber === '1') {
                return endingArr[2];
            }
        }

        showExtraNull (data) {

            if (data.s < 10) {
                data.s = '0' + data.s;
            }
            if (data.m < 10) {
                data.m = '0' + data.m;
            }
            if (data.h < 10) {
                data.h = '0' + data.h;
            }
        };
    }