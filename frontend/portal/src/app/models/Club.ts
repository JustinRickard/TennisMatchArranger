export interface IClub {
  id: string;
  name: string;
}

export class Club implements IClub {
  constructor(
    public id:string,
    public name: string) {
  }
}