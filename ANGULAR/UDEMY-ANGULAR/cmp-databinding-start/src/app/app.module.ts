import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerComponent } from './server/server.component';
import { GameControlComponent } from './exercise-databinding/game-control/game-control.component';
import { OddComponent } from './exercise-databinding/odd/odd.component';
import { EvenComponent } from './exercise-databinding/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
