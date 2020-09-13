import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../shared/helper/teams/teams.service';

@Component({
  selector: 'rl-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teamsData: any = [];
  constructor(private _helper: TeamsService) { }

  ngOnInit(): void {
    this.teamsData = this._helper.getConfiguredData();
  }

}
