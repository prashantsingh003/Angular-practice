import { Injectable } from "@angular/core";

import { CounterService } from "./counter.service";

@Injectable()

export class UsersService{
    activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  constructor(private counterService:CounterService){}

  onSetToInactive(i:number){
      this.counterService.OnEntry(this.activeUsers[i],'Inactive');
      this.inactiveUsers.push(this.activeUsers[i]);
      this.activeUsers.splice(i,1);
  }

  onSetToActive(i:number){
      this.counterService.OnEntry(this.inactiveUsers[i],'Active');
      this.activeUsers.push(this.inactiveUsers[i]);
      this.inactiveUsers.splice(i,1);
  }

}

