import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalBuilderComponent } from 'src/app/components/builders/modal-builder/modal-builder.component';
import { SinglesResult } from 'src/app/models/singles-result';
import { ResultService } from 'src/app/services/result.service'

@Component({
  selector: 'add-singles-result',
  templateUrl: './add-singles-result.component.html',
  styleUrls: ['./add-singles-result.component.scss']
})
export class AddSinglesResultComponent implements OnInit {
  @ViewChild(ModalBuilderComponent, null) modalBuilder:ModalBuilderComponent;

  showAddSinglesModal:boolean;

  constructor(private resultService:ResultService) { }

  ngOnInit() {
  }

  addSinglesResult (event:any) {
    console.log("adding result...", event);
    const result = new SinglesResult("2020-02-01", "test-loc", "test-evt", "p1", "p2", [6,6], [4,1]);
    this.resultService.addSinglesResult(result); // TODO: wait on result
    this.modalBuilder.toggleShow();
  }
}
