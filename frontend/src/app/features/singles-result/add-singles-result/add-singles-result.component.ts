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
  @ViewChild(ModalBuilderComponent, { static: false}) modalBuilder:ModalBuilderComponent;
  @ViewChild(SinglesResultFormComponent, { static: false}) form:SinglesResultFormComponent;

  constructor(private resultService:ResultService) { }

  ngOnInit() {
  }

  cancel() {
    this.modalBuilder.toggleShow();
    this.form.clear();    
  }

  addSinglesResult (event:any) {
    this.resultService.addSinglesResult(this.form.resultsForm.value); // TODO: wait on result
    this.modalBuilder.toggleShow();
  }
}
