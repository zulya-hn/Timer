"use strict";

window.onload = function () {
    
    let timerDisplay = new TimerDisplay({
        days: '#days',
        hours: '#hours',
        mins: '#mins',
        seconds: '#seconds',
        blinkedTwoDots: '#time .blink',
    });
    
    let clickTimer = new TimerPlugin({
        timeInMinutes: 7200,
        runButton: '#run',
        pauseButton: '#pause',
        auto: false,
        timerDisplay: timerDisplay,
    });
    
    clickTimer.init();
    
    
    let AutoTimerDisplay = new TimerDisplay({
        days: '#days2',
        hours: '#hours2',
        mins: '#mins2',
        seconds: '#seconds2',
        blinkedTwoDots: '#time2 .blink',
    });
    
    let autoTimer = new TimerPlugin({
        timeInMinutes: 1,
        runButton: null,
        pauseButton: null,
        auto: true,
        timerDisplay: AutoTimerDisplay,
    });
    
    autoTimer.init();
};

