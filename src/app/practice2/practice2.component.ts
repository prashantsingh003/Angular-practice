import { Component } from '@angular/core';

@Component({
    selector: 'practice2',
    templateUrl:'./practice2.component.html'
})

export class Practice2Component{
    user_Name="kk";
    k="";
    checkUsernameStatus(){
        if(this.user_Name=="")
        return true;
        else
        return false;
    }
    resetingUsername(){
        this.user_Name="";
    }
    setUsername(event:any){
        this.user_Name=(<HTMLInputElement>event.target).value;
    }
}