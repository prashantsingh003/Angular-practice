import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
    @Output() incremented = new EventEmitter();
    setTimer;
    startButton:boolean=false;
    i:number=0;
    constructor(){
    }

    ngOnInit(){
    }

    increaseI(){
        ++this.i;
        this.incremented.emit(this.i);
    }
    onStartTimer(){
        this.setTimer = setInterval(() => { this.increaseI(); }, 1000);
        this.startButton=!this.startButton;
    }
    onStopTimer(){
        clearInterval(this.setTimer);
        this.startButton=!this.startButton;
    }
}