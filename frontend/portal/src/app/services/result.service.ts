import { Injectable } from '@angular/core';
import { ServiceResult } from 'src/app/services/ServiceResult';
import { SinglesResult } from 'src/app/models/singles-result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor() { }

  public addSinglesResult(result: SinglesResult) {
    // TODO: Implement back-end call with RxJS    

    console.log("Saving result", result);
    return new ServiceResult(true, "Added");
  }  
}
