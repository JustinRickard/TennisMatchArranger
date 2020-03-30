import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalBuilderComponent } from 'src/app/components/builders/modal-builder/modal-builder.component';
import { SinglesResult } from 'src/app/models/singles-result';
import { ResultService } from 'src/app/services/result.service'
import { Form } from '@angular/forms';
import { SinglesResultFormComponent } from '../singles-result-form/singles-result-form.component';

@Component({
  selector: 'add-singles-result',
  templateUrl: './add-singles-result.component.html',
  styleUrls: ['./add-singles-result.component.scss']
})
export class AddSinglesResultComponent implements OnInit {
  @ViewChild(ModalBuilderComponent, null) modalBuilder:ModalBuilderComponent;
  @ViewChild(SinglesResultFormComponent, null) form:SinglesResultFormComponent;

  constructor(private resultService:ResultService) { }

  ngOnInit() {
  }

  addSinglesResult (event:any) {
    this.resultService.addSinglesResult(this.form.resultsForm.value); // TODO: wait on result
    this.modalBuilder.toggleShow();
  }
}
