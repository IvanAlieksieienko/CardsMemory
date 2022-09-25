export class CardModel {
    rank: string;
    suit: string;
    src: string;

    get numberedRank(): number {
        let numberedRank = +this.rank;
        if (numberedRank) {
            return numberedRank;
        }
        if (this.rank == "J") {
            return 11;
        }
        if (this.rank == "Q") {
            return 12;
        }
        if (this.rank == "K") {
            return 13;
        }
        if (this.rank == "A") {
            return 14;
        }

        return -1;
    }

    get numberedSuit(): number {
        if (this.suit == "hearts") {
            return 4;
        }
        if (this.suit == "spades") {
            return 3;
        }
        if (this.suit == "diamonds") {
            return 2;
        }

        return 1;
    }

    constructor(rank: string,
        suit: string,
        src: string) {
        this.rank = rank;
        this.suit = suit;
        this.src = src;
    }
}