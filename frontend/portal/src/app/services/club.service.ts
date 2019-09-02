import { Injectable } from "@angular/core";
import { IClub, Club } from '../models/Club';

@Injectable
export class ClubService {
    getClubs(): Club[] {
        return Clubs;
    }

    getClub(id:string) : Club {
        return Clubs.find(x => x.id == id);
    }
}

const Clubs: Club[] = [
    new Club("1", "Billingshurst")
]