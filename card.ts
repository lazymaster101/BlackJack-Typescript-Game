import { deckTypes } from "./enum";

export class Card {
    private deck: deckTypes;
    private points: number;
    private face: string | number;
    constructor(deck: deckTypes, face: string | number) {
        this.deck = deck;
        this.face = face;

        if (typeof face === "string") {
            if (face === "A") {
                this.points = 1
            }
            else{
                this.points = 10;
            }
        } else {
            this.points = face;
        }
    }

    public getDeck(): deckTypes {
        return this.deck;
    }
    public getPoints(): number {
        return this.points;
    }
    public setPoints(newPoints: number): void {
        this.points = newPoints;
    }
    public getFace(): string | number {
        return this.face;
    }
    public printCard(): string {
        return (`${this.face}${this.deck}`);
    }
}
