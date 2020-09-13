import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../shared/helper/matches/matches.service';

@Component({
  selector: 'rl-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matchesData: any = [];
  constructor(private _helper: MatchesService) { }

  ngOnInit(): void {
    this.matchesData = this._helper.getConfiguredData();
    console.log(this.matchesData);
  }

}
