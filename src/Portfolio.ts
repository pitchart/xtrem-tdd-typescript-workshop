import { Currency } from "./Currency";
import { Bank } from "./Bank";
import {Money} from "./Money";

export class Portfolio {
  private readonly amounts: [number, Currency][] = []

  add(amount: number, currency: Currency): void {
    this.amounts.push([amount, currency])
  }

  evaluate (currency: Currency, bank: Bank): [number, Currency] {
    const amount = this.amounts
      .map((money: [number, Currency]): [number, Currency] => {
        return [bank.Convert(new Money(money[0], money[1]), currency), currency]
      })
      .reduce((acc: number, currentValue: [number, Currency]): number => {
        return acc + currentValue[0]
      }, 0)
    return [amount, currency]
  }
}
