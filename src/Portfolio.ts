import { Currency } from './Currency'
import { Bank } from './Bank'
import { Money } from './Money'

export class Portfolio {
  moneys: Array<Money> = new Array()

  evaluate (bank: Bank, currency: Currency): number {
    return this.moneys.reduce((acc: number, currentMoney: Money) => {
      return acc + bank.Convert(currentMoney.amount, currentMoney.currency, currency)
    }, 0)
  }

  add (amount: number, currency: Currency): void {
    this.moneys.push(new Money(amount, currency))
  }
}
