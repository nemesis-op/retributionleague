import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MatchesComponent } from './matches/matches.component';
import { TeamsComponent } from './teams/teams.component';


const routes: Routes = [
  { path: '',  redirectTo: '/leaderboard', pathMatch: 'full' },
  { path: 'leaderboard', pathMatch: 'full', component: LeaderboardComponent },
  { path: 'matches', pathMatch: 'full', component: MatchesComponent },
  { path: 'teams', pathMatch: 'full', component: TeamsComponent },
  { path: '**', redirectTo: '/leaderboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
