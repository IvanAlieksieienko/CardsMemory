import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { OptionsComponent } from './components/options/options.component';
import { InGameCardsComponent } from './components/in-game-cards/in-game-cards.component';
import { JudgeComponent } from './components/judge/judge.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    OptionsComponent,
    InGameCardsComponent,
    JudgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
