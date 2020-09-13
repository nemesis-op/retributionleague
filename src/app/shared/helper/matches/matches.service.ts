import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor() { }

  getConfiguredData(){
    let matches = JSON.parse(localStorage.getItem('matches'));
    let data = [];
    for (let i = 0; i < matches.length; i++) {
      let obj = {
        completed: false,
        matchType: '',
        time: '',
        teamOne: '',
        teamOneLogoUrl: '',
        teamOneScore: 0,
        teamTwo: '',
        teamTwoLogoUrl: '',
        teamTwoScore: 0,
      }
      obj.completed = matches[i].complete;
      obj.matchType = matches[i].MatchType; 
      obj.time = matches[i].schedule_time;
      obj.teamOne = this.getName( matches[i].Team1_id);
      obj.teamOneLogoUrl = this.getLogoUrl(matches[i].Team1_id);
      obj.teamOneScore = matches[i].Team1_Score; 
      obj.teamTwo = this.getName( matches[i].Team2_id);
      obj.teamTwoLogoUrl = this.getLogoUrl(matches[i].Team2_id);
      obj.teamTwoScore = matches[i].Team2_Score; 
      if(obj.teamOneScore > obj.teamTwoScore){
        obj.teamOne = obj.teamOne+'(W)';
      } else if (obj.teamOneScore < obj.teamTwoScore) {
        obj.teamTwo = obj.teamTwo+'(W)';
      } else {
        obj = obj;
      }

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
