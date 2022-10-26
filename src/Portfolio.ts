import { Currency } from './Currency'
import { Bank } from './Bank'
import { Money } from './Money'

export class Portfolio {
  private readonly moneys: Money[] = []

  evaluateMoney (bank: Bank, currency: Currency): Money {
    return this.moneys.reduce((acc: Money, currentMoney: Money) => {
      return this.addMoneyInSameCurrency(acc, bank, currentMoney)
    }, new Money(0, currency))
  }

  private addMoneyInSameCurrency (acc: Money, bank: Bank, currentMoney: Money): Money {
    return acc.add(bank.ConvertMoney(currentMoney, acc.currency))
  }

  add (amount: number, currency: Currency): void {
    this.moneys.push(new Money(amount, currency))
  }
}
