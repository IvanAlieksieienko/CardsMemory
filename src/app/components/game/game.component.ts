import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';
import { DataRetrieverService } from 'src/app/services/data-retriever.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    public allCards!: CardModel[];

    public pack!: CardModel[];
    public buffer: CardModel[] = [];
    public trash: CardModel[] = [];

    public finished = false;

    constructor(private _dataRetrieverService: DataRetrieverService) {
        _dataRetrieverService.getCards().subscribe(cards => {
            this.allCards = cards;

            this.pack = [..._dataRetrieverService.getMixedCards(this.allCards)];
        });
    }
    
    ngOnInit(): void {
    }

    giveCards(number: number) {
        if (!this.pack.length) {
            alert("empty");
            return;
        }

        if (this.buffer.length) {
            this.trash.push(...this.buffer);
            this.buffer = [];
        }

        for (let index = 0; index < number; index++) {
            let card = this.pack.pop();
            if (!card) {
                break;
            }
            this.buffer.push(card);
        }


    }

    finish() {
        if (this.buffer.length) {
            this.trash.push(...this.buffer);
            this.buffer = [];
        }

        this.finished = true;
    }
}
