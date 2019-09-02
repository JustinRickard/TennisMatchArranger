import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/services/club.service';
import { Club } from 'src/app/models/Club';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  clubs: Club[];

  constructor(private clubService: ClubService) { }

  ngOnInit() {
    this.clubs = this.clubService.getClubs();
  }

}
