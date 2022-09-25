import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

@Component({
    selector: 'app-in-game-cards',
    templateUrl: './in-game-cards.component.html',
    styleUrls: ['./in-game-cards.component.css'],
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
export class InGameCardsComponent implements OnInit {

    @Input() trashHasCards: boolean = false;
    @Input() inGameCards: CardModel[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
