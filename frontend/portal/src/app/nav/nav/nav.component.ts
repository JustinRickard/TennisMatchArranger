import { Component, OnInit } from '@angular/core';
import { faHome, faChartPie, faUsers, faUserCircle, faTableTennis, faTrophy, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  faHome = faHome;
  faChartPie = faChartPie;
  faUsers = faUsers;
  faUserCircle = faUserCircle;
  faTableTennis = faTableTennis;
  faTrophy = faTrophy;
  faCogs = faCogs;

  navActive: boolean;
  adminOpen: boolean;
  accountOpen: boolean;

  constructor() {
    this.navActive = false;
    this.adminOpen = false;
    this.accountOpen = false;
   }

  ngOnInit() {
  }

  toggleMenu():void {
    this.navActive = !this.navActive;
    this.closeAll();
  }
  toggleAdmin():void {
    this.adminOpen = !this.adminOpen;
    this.accountOpen = false;
  }
  toggleAccount():void {
    this.accountOpen = !this.accountOpen;
    this.adminOpen = false;
  }
  closeAll():void {
    this.accountOpen = false;
    this.adminOpen = false;
  }
}
