import { Component, OnInit } from "@angular/core";
import { UsersService } from './users.service'

@Component({
    selector:'app-practice5',
    templateUrl:'./practice5.component.html',
    providers:[UsersService]
})

export class Practice5Component implements OnInit{

  activeUsers: string[];
  inactiveUsers: string[];

  constructor(private userService:UsersService){}

  ngOnInit(){
  }

}