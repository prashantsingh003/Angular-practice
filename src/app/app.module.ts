import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule} from '@angular/forms';

import { Practice2Component } from './practice2/practice2.component';

import { Practice3Component } from './practice3/practice3.component';

import { Practice4Component } from './practice4/practice4.component';
import { EvenComponent } from "./practice4/even/even.component";
import { OddComponent } from "./practice4/odd/odd.component";
import { GameControlComponent } from "./practice4/game-control/game-control.component";

import { Practice5Component } from "./practice5/practice5.component";
import { InactiveUsersComponent } from "./practice5/inactive-users/inactive-users.component";
import { ActiveUsersComponent } from "./practice5/active-users/active-users.component";
import { CounterService } from "./practice5/counter.service";

@NgModule({
  declarations: [
    AppComponent,
    Practice2Component,
    Practice3Component,
    Practice4Component,
    OddComponent,
    EvenComponent,
    GameControlComponent,
    Practice5Component,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
