export interface CardData {
    last4: string;
    exp_month: number;
    exp_year: number;
    id: string;
    brand: string;
}

export interface GetCardsReq {
    listCustomerCards: CardData[];
}
