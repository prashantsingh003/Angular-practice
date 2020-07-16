import { Component } from "@angular/core";

@Component({
    selector: 'practice4',
    templateUrl: './practice4.component.html',
    styleUrls: ['./practice4.component.css']
})

export class Practice4Component{
    i:number=0;
    evenElements:number[]=[];
    oddElements:number[]=[];

    constructor(){
    }

    gameControlNumber(k){
        this.i=k;
        if(k%2==0)
            this.evenElements.push(k);
        else
            this.oddElements.push(k);
    }
}