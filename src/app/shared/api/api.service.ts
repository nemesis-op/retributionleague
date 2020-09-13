import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getLeaderboard(){
    return this._http.get(environment.uri+'/leaderboard')
  }
  getTeams(){
    return this._http.get(environment.uri+'/teams')
  }
  getMatches(){
    return this._http.get(environment.uri+'/matches')
  }
}
