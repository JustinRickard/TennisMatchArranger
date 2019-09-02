import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Club } from 'src/app/models/Club';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.css']
})
export class ClubDetailsComponent implements OnInit {

  club:Club;

  constructor(private clubService: ClubService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.club = this.clubService.getClub(this.route.snapshot.params['id']);
  }

}
