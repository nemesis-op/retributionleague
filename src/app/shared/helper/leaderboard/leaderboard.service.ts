import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor() { }
  getConfiguredData(){
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
    let data = [];
    for (let i = 0; i < leaderboard.length; i++) {
      let obj = {
        name: '',
        logoUrl: '',
        details: {
          points: 0,
          p: 0,
          w: 0,
          l: 0,
          d: 0,
          pd: 0
        }
      }
      obj.name = this.getName(leaderboard[i][0]);
      obj.logoUrl = this.getLogoUrl(leaderboard[i][0]);
      obj.details.points = leaderboard[i][1].points;
      obj.details.p = leaderboard[i][1].w + leaderboard[i][1].l + leaderboard[i][1].d;
      obj.details.w = leaderboard[i][1].w;
      obj.details.l = leaderboard[i][1].l;
      obj.details.d = leaderboard[i][1].d;
      obj.details.pd = leaderboard[i][1].pd;
      data.push(obj);
    }
    return data;
  }
  private getName(id){
    let teams = JSON.parse(localStorage.getItem('teams'));
    let name = '';
    for (let i = 0; i < teams.length; i++) {
      if(teams[i].id===id){
        name = teams[i].name;
      }
    }
    return name;
  }
  getLogoUrl(id){
    let teams = JSON.parse(localStorage.getItem('teams'));
    let url = '';
    for (let i = 0; i < teams.length; i++) {
      if(teams[i].id===id){
        url = teams[i].logo;
      }
    }
    url = url.substring(url.lastIndexOf('/') + 1);
    return url;
  }
}
