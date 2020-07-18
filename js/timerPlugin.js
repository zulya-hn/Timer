"use strict";

class TimerPlugin {
    
    constructor(obj) {
        
        this.timerDisplay = obj.timerDisplay;
    
        this.runButton = obj.runButton;
        this.pauseButton = obj.pauseButton;
        this.auto = obj.auto;
    
        this.timer;
        this.parsedTime = {
            s: 0,
            i: 1,
            h: 0,
            d: 0,
        };
        this.currentTimeInSeconds = obj.timeInMinutes * 60;
    
        this.parseTime();
        this.truncTime();
    }
        parseTime() {
            this.parsedTime.s = this.currentTimeInSeconds%60;
            this.parsedTime.m = this.currentTimeInSeconds/60%60;
            this.parsedTime.h = this.currentTimeInSeconds/60/60%24;
            this.parsedTime.d = this.currentTimeInSeconds/60/60/24%60;
        };
    
        truncTime() {
            this.parsedTime.s = Math.trunc(this.parsedTime.s);
            this.parsedTime.m = Math.trunc(this.parsedTime.m);
            this.parsedTime.h = Math.trunc(this.parsedTime.h);
            this.parsedTime.d = Math.trunc(this.parsedTime.d);
        };
        
        start() {
    
            this.timer = setInterval(() => {
    
                if (this.currentTimeInSeconds === 0){
                    this.pause();
                    this.timerDisplay.showEnd();
                    return;
                }
                
                --this.currentTimeInSeconds;
                this.parseTime();
                this.truncTime();
    
                this.timerDisplay.showTick(this.parsedTime);
                
            }, 1000);
    
            this.timerDisplay.blink(1000);
        };
    
        pause() {
            clearInterval(this.timer);
            this.timerDisplay.stopBlink();
        };
    
        runButtonListener() {
            let timerPlugin = this;
    
            document.querySelector(timerPlugin.runButton).addEventListener('click', function () {
                timerPlugin.start();
                this.disabled = true;
            });
        };
    
        pauseButtonListener() {
            let timerPlugin = this;
            
            document.querySelector(timerPlugin.pauseButton).addEventListener('click', function () {
                timerPlugin.pause();
                document.querySelector(timerPlugin.runButton).disabled = false;
            });
        };
    
        initButtons() {
            if (this.auto) {
                this.start();
            }
            else {
                this.runButtonListener();
                this.pauseButtonListener();
            }
        };
    
        init() {
            this.initButtons();
            this.timerDisplay.showStartTimer(this.parsedTime);
        };
    }