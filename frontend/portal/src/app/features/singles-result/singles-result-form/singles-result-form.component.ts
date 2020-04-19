import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Lookup } from 'src/app/models/lookup';

@Component({
  selector: 'singles-result-form',
  templateUrl: './singles-result-form.component.html',
  styleUrls: ['./singles-result-form.component.scss']
})
export class SinglesResultFormComponent implements OnInit {

  resultsForm: FormGroup;
  @Output() submitAction = new EventEmitter<FormGroup>();

  players: ILookup[];
  competitions: ILookup[];

  constructor() { }

  ngOnInit() {
    this.players = [new Lookup("1","Justin Rickard"), new Lookup("2", "Phil Beiken")];

    let date = new FormControl(moment());
    //let competition = new FormControl("Friendly")
    this.competitions = [new Lookup("1","Friendly"), new Lookup("2","Men's 2nd League")];


    this.resultsForm = new FormGroup({
      date: date,
      competition: new FormControl("1")
    });
  }

  submitForm() {
    console.log("Form: ", this.resultsForm);
    this.submitAction.emit(this.resultsForm)
  }
}
