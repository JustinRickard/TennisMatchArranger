export class SinglesResult {

    date:Date; // TODO Change to moment
    locationId: string;
    eventId: string;

    player1Id:string;
    player2Id:string;

    player1Scores: int[];
    player2Scores: int[];

    constructor(
        date:Date,
        locationId: string,
        eventId: string,
        player1Id: string,
        player2Id: string,
        player1Scores: int[],
        player2Scores: int[]) {
            this.date = date;
            this.locationId = locationId;
            this.eventId = eventId;
            this.player1Id = player1Id;
            this.player2Id = player2Id;
            this.player1Scores = player1Scores;
            this.player2Scores = player2Scores;
    }
}
