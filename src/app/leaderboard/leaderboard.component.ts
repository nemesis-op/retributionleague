import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api/api.service';
import { LeaderboardService } from '../shared/helper/leaderboard/leaderboard.service';

@Component({
  selector: 'rl-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  leaderboardData:any;
  flag = false;
  constructor(private _helper: LeaderboardService, private _api: ApiService) { }

  ngOnInit(): void {
    this.leaderboardData = this._helper.getConfiguredData();
    console.log(this.leaderboardData);
    this.scheduler();
  }

  async scheduler(){
    if(this.flag){
      this.setLeaderboard();
    } else {
      this.flag = true;
    }
    await new Promise(resolve => setTimeout(()=>resolve(), 60000)).then(()=>this.scheduler());
  }

  setLeaderboard(){
    this._api.getLeaderboard().subscribe((res:any)=>{
      localStorage.setItem('leaderboard',JSON.stringify(res));
      this.leaderboardData = this._helper.getConfiguredData();
    },
    (err:any)=>{
      console.log(err);
    })
  }

}
