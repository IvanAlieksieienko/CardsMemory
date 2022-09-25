import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

@Component({
    selector: 'app-judge',
    templateUrl: './judge.component.html',
    styleUrls: ['./judge.component.css'],
    animations: [
        trigger(
            'enterAnimation', [
            transition(':enter', [
                style({ transform: 'translateX(100%)', opacity: 0 }),
                animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
            ]),
            transition(':leave', [
                style({ transform: 'translateX(0)', opacity: 1 }),
                animate('500ms', style({ transform: 'translateX(-100%)', opacity: 0 }))
            ])
        ]
        )
    ]
})
export class JudgeComponent implements OnInit {

    private _allCards: CardModel[] = [];
    private _guessed = new Map<CardModel, boolean | undefined>();

    public groupedByRank = new Map<string, CardModel[]>();

    @Input() set allCards(value: CardModel[]) {
        this._allCards = value;
        this._guessed = new Map<CardModel, boolean | undefined>(this._allCards.map(c => [c, undefined]));
        this.groupedByRank = this.groupByRank(this._allCards);
    }

    @Input() cardsToGuess: CardModel[] = [];

    constructor() { }

    ngOnInit(): void {
    }

    private groupByRank(cards: CardModel[]): Map<string, CardModel[]> {
        let grouped = new Map<string, CardModel[]>();
        for (let card of cards) {
            if (grouped.has(card.rank)) {
                grouped.get(card.rank)?.push(card);
                continue;
            }

            grouped.set(card.rank, [card]);
        }

        let sorted = this.sortGrouped([...grouped.entries()]);
        return new Map<string, CardModel[]>(sorted);
    }

    private sortGrouped(entries: [string, CardModel[]][]) {
        for (let entry of entries) {
            entry[1] = entry[1].sort((c1, c2) => c2.numberedSuit - c1.numberedSuit);
        }
        return entries.sort((entry1, entry2) => {
            let card1 = entry1[1][0];
            let card2 = entry2[1][0];

            return card1.numberedRank - card2.numberedRank;
        });
    }

    asIsOrder(a:any, b:any) {
        return 1;
    }

    guessCard(card: CardModel) {
        this._guessed.set(card, !!this.cardsToGuess.find(c => c == card));

        if ([...this._guessed.values()].find(s => s === false) !== undefined) {
            alert("You failed!");
            return;
        }
        for (let card of this.cardsToGuess) {
            let result = this._guessed.get(card);

            if (result === undefined) {
                return;
            }
        }

        alert("Congratulations, you won!");
    }

    cardStatus(card: CardModel): boolean | undefined {
        return this._guessed.get(card);
    }

    getClass(card: CardModel): string {
        const status = this.cardStatus(card);
        if (status === undefined) {
            return '';
        }
        if (status === true) {
            return 'right';
        }

        return 'wrong';
    }
}
