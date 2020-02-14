import { Component, OnInit } from '@angular/core';
import { SinglesResult } from 'src/app/models/singles-result';
import { ResultService } from 'src/app/services/result.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showAddSinglesModal:bool;

  constructor(private resultService:ResultService) { 
    this.showAddSinglesModal = false;
  }

  toggleSinglesModal() {
    this.showAddSinglesModal = !this.showAddSinglesModal;
  }

  addSinglesResult () {
    console.log("adding result...", this.resultService);
    const result = new SinglesResult(new Date(), "test-loc", "test-evt", "p1", "p2", [6,6], [4,1]);
    this.resultService.addSinglesResult(result); // TODO: wait on result
    this.toggleSinglesModal();
  }

  /*  
  addSinglesResult {(result: SinglesResult) {
    this.resultService.addSinglesResult(result);
  }
  */
  ngOnInit() {
  }

}
