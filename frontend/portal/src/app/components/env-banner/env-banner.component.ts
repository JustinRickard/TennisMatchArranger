import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'env-banner',
  templateUrl: './env-banner.component.html',
  styleUrls: ['./env-banner.component.scss']
})
export class EnvBannerComponent implements OnInit {
  
  env: string = environment.env;
  constructor() { }

  ngOnInit() {
  }
}
