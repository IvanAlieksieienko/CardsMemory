import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import * as cardsData from '../data/cards-data.json';
import { CardModel } from '../models/card.model';

@Injectable({
    providedIn: 'root'
})
export class DataRetrieverService {

    constructor() { }

    getCards(): Observable<CardModel[]> {
        return of(cardsData).pipe(switchMap(cardsObject => {
            let cards: CardModel[] = [];
            let keys = Object.keys(cardsObject);
            for (let key in keys) {
                let card = cardsObject[key];
                if (!card) {
                    continue;
                }

                let parsedCard = new CardModel(card.rank, card.suit, card.src);
                cards.push(parsedCard);
            }

            return of(cards);
        }));
    }

    getRandomCards(): Observable<CardModel[]> {
        return this.getCards().pipe(switchMap((cards: CardModel[]) => {
            let mixedCards = this.getMixedCards(cards);
            return of(mixedCards)
        }))
    }

    public getMixedCards(cards: CardModel[]): CardModel[] {
        let currentIndex = cards.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [cards[currentIndex], cards[randomIndex]] = [
                cards[randomIndex], cards[currentIndex]];
        }

        return cards;
    }
}
