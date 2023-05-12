import { Currency } from "./Currency";
import { Bank } from "./Bank";
import {Money} from "./Money";

export class Portfolio {
  private readonly moneys: Money[] = []

  add(money: Money): void {
    this.moneys.push(money)
  }

  evaluate (currency: Currency, bank: Bank): Money {
    return this.moneys
      .map((money: Money): Money => {
        return bank.Convert(money, currency)
      })
      .reduce((acc: Money, currentValue: Money): Money => {
        return acc.add(currentValue)
      }, new Money(0, currency))
  }
}
