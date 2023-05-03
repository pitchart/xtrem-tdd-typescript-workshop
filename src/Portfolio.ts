import { Currency } from './Currency'
import {Bank} from "./Bank";

export class Portfolio {
    private amounts :  [number, Currency][] = []

    add(amount: number, currency: Currency) {
        this.amounts.push([amount, currency])
    }

    evaluate(currency: Currency, bank: Bank): [number, Currency] {
        const amount = this.amounts.map((amount:[number, Currency]):[number, Currency] => {
            return [bank.Convert(amount[0],amount[1], currency), currency]
        }).reduce((acc: number, currentValue:[number, Currency]): number => {
            return acc + currentValue[0]
        },0)
        return [amount, currency]
    }
}