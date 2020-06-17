import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Lookup } from 'src/app/models/lookup';
import { ILookup } from 'src/app/interfaces/ILookup';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  public getPlayersLookup(): Lookup[]  {
    return [
      new Lookup("1","Justin Rickard"),
      new Lookup("2", "Phil Beiken")
    ];
  }
}
