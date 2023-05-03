import { Currency } from './Currency'

export class Portfolio {
    private amount : number = 0

    add(amount: number, EUR: Currency) {
        this.amount += amount
    }

    evaluate(EUR: Currency): [number, Currency] {
        return [this.amount, Currency.EUR]
    }
}