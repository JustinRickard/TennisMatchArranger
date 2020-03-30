import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'singles-result-form',
  templateUrl: './singles-result-form.component.html',
  styleUrls: ['./singles-result-form.component.scss']
})
export class SinglesResultFormComponent implements OnInit {

  resultsForm: FormGroup;
  @Output() submitAction = new EventEmitter<FormGroup>();

  constructor() { }

  ngOnInit() {
    let date = new FormControl(moment());
    let competition = new FormControl("Friendly")

    this.resultsForm = new FormGroup({
      date: date,
      competition: competition
    });
  }

  submitForm() {
    console.log("Form: ", this.resultsForm);
    this.submitAction.emit(this.resultsForm)
  }
}
