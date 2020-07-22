import { Injectable } from "@angular/core";

@Injectable()

export class CounterService{
   // d:Date = new Date();

    //entry:[{'user':string,'status':string}];

    OnEntry(userName:string,userStatus:string){

        //var t=(this.d.getHours+" / "+this.d.getMinutes+" / "+this.d.getSeconds);
        // this.entry.push({
        //     user : userName,
        //     status : userStatus
        // });
        console.log(userName+" Switched to "+userStatus/*+" on : "+t*/);
        
    }
}