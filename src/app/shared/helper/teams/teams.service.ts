import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }
  getConfiguredData(){
    let teams = JSON.parse(localStorage.getItem('teams'));
    let data = [];
    for (let i = 0; i < teams.length; i++) {
      let obj = {
        name: '',
        description: '', 
        logoUrl: '',
      };
      obj.name = teams[i].name;
      obj.description = teams[i].description;
      let url = teams[i].logo;
      obj.logoUrl = url.substring(url.lastIndexOf('/') + 1);
      data.push(obj);
    }
    return data;
  }
}
