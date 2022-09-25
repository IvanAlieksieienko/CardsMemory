import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

    @Output() giveCardsRequested = new EventEmitter<number>();
    @Output() memoryFinished = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    public giveCards(numberOfCards: number) {
        this.giveCardsRequested.emit(numberOfCards);
    }

    public finish() {
        this.memoryFinished.emit();
    }

}
