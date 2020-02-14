import { Component, OnInit, ViewChild } from '@angular/core';
import { SinglesResult } from 'src/app/models/singles-result';
import { ResultService } from 'src/app/services/result.service'
import { ModalBuilderComponent } from 'src/app/shared/builders/modal-builder/modal-builder.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(ModalBuilderComponent, null) modalBuilder:ModalBuilderComponent;

  showAddSinglesModal:boolean;

  constructor(private resultService:ResultService) { 
    this.showAddSinglesModal = false;
  }

  addSinglesResult (event:any) {
    console.log("adding result...", event);
    const result = new SinglesResult("2020-02-01", "test-loc", "test-evt", "p1", "p2", [6,6], [4,1]);
    this.resultService.addSinglesResult(result); // TODO: wait on result
    this.modalBuilder.toggleShow();
  }

  ngOnInit() {
  }
}
