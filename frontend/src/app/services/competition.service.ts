import { Injectable } from '@angular/core';
import { Lookup } from 'src/app/models/lookup';
import { ILookup } from 'src/app/interfaces/ILookup';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor() { }

  public getCompetitionTypesLookup(): ILookup[] 
  {
    return [
      new Lookup("1","Friendly"),
      new Lookup("2","Men's 2nd League")
    ];
  }

  public getCompetitionInstancesLookup(): ILookup[] 
  {
    return [
      new Lookup("1","Friendly"),
      new Lookup("2","Men's 2nd League [Summer 2020]")
    ];
  }
}
