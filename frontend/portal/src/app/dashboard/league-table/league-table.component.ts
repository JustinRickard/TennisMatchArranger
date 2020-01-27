import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {

  @Input() name: string;
  
  results: ILeagueResult[];

  constructor() { }

  ngOnInit() {
    this.results = RESULTS; // TODO: Get from service
  }

}

const RESULTS: ILeagueResult[] = [
  {
    position: 1,
    player: "Phil Beicken",
    rating: "8.1",
    played: 3,
    won: 3,
    lost: 0,
    setsWon: 6,
    gameNetRatio: 31,
    points: 9
  },
  {
    position: 2,
    player: "Justin Rickard",
    rating: "10.1",
    played: 3,
    won: 2,
    lost: 1,
    setsWon: 5,
    gameNetRatio: 8,
    points: 7
  }
]