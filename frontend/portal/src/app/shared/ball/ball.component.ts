import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})
export class BallComponent implements OnInit {

  @Input() spin: boolean;
  @Input() text: string = "Loading...";
  constructor() { }

  ngOnInit() {
  }

}
