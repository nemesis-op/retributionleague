import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MatchesComponent } from './matches/matches.component';
import { TeamsComponent } from './teams/teams.component';
import { ApiService } from './shared/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { LeaderboardService } from './shared/helper/leaderboard/leaderboard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeaderboardComponent,
    MatchesComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    LeaderboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
