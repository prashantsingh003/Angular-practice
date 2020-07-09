import { Component } from '@angular/core';

@Component({
  selector: 'practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})
export class Practice3Component {
  psswd="";
  count=0;
  i:number=0;
  toggle=false;
  timeEntry=[];

  btnClicked(){
    if(this.toggle){
      this.toggle=false;
    }
    else
    this.toggle=true;

    if(this.count=0)
      this.psswd="1234";

    var now=new Date();
    this.timeEntry.push(now.getHours()+"/"+now.getMinutes()+"/"+now.getSeconds());
  
    this.count++;
    this.i=0;
  }

  smthing(){
    return(this.timeEntry[this.i++]);
  }
}
