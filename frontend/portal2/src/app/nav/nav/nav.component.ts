import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navActive: boolean;
  constructor() {
    this.navActive = false;
   }

  ngOnInit() {
  }

  toggleMenu():void {
    this.navActive = !this.navActive;
  }
}
