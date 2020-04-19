import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
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

  defaultBestOfSets:number = 3;

  // Lookup data
  players: ILookup[];
  competitions: ILookup[];

  constructor(private fb: FormBuilder) {    
   }

  ngOnInit() {
    this.players = [new Lookup("1","Justin Rickard"), new Lookup("2", "Phil Beiken")];    
    this.competitions = [new Lookup("1","Friendly"), new Lookup("2","Men's 2nd League")];

    this.resultsForm = new FormGroup({
      date: new FormControl(moment()),
      competition: new FormControl(),
      bestOfSets: new FormControl(this.defaultBestOfSets),
      player1: new FormControl(),
      player1Sets: this.fb.array([null, null, null]),
      player2: new FormControl(),
      player2Sets: this.fb.array([null, null, null]),
    });
  }

  submitForm() {
    console.log("Form: ", this.resultsForm);
    this.submitAction.emit(this.resultsForm)
  }

  updateBestOfSets() {
    const player1Sets = this.resultsForm.get('player1Sets') as FormArray;
    const player2Sets = this.resultsForm.get('player2Sets') as FormArray;
   
    player1Sets.setValue([]);
    player2Sets.setValue([]);

    const totalSets = this.resultsForm.get('bestOfSets').value as number;

    for(var i:number=0; i < totalSets; i++) {
      player1Sets.push(null);
      player2Sets.push(null);
    }
  }
}
