import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'rl-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  showApp: boolean = false;
  sidenavToggle: boolean = false;
  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this.setLeaderboard();
  }

  setLeaderboard(){
    this._api.getLeaderboard().subscribe((res:any)=>{
      localStorage.setItem('leaderboard',JSON.stringify(res));
      this.setTeams();
    },
    (err:any)=>{
      console.log(err);
    })
  }

  setTeams(){
    this._api.getTeams().subscribe((res:any)=>{
      localStorage.setItem('teams',JSON.stringify(res));
      this.setMatches();
    },
    (err:any)=>{
      console.log(err);
    })
  }

  setMatches(){
    this._api.getMatches().subscribe((res:any)=>{
      localStorage.setItem('matches',JSON.stringify(res));
      this.showApp = true;
    },
    (err:any)=>{
      console.log(err);
    })
  }

}
