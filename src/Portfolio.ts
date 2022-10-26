import { Currency } from './Currency'
import { Bank } from './Bank'
import { Money } from './Money'

export class Portfolio {

  moneys: Array<Money> = new Array()

  evaluateMoney (bank: Bank, currency: Currency): Money {
    return this.moneys.reduce((acc: Money, currentMoney: Money) => {
      return acc.add(bank.ConvertMoney(currentMoney, acc.currency))
    }, new Money(0, currency))
  }

  add (amount: number, currency: Currency): void {
    this.moneys.push(new Money(amount, currency))
  }
}
