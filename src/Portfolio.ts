import { Currency } from './Currency'
import { Bank } from './Bank'

export class Portfolio {
  content: Map<Currency, number> = new Map()

  evaluate (bank: Bank, currency: Currency): number {
    let result: number = 0
    this.content.forEach((value, key) => {
      result += bank.Convert(value, key, currency)
    })
    return result
  }

  add (amount: number, currency: Currency): void {
    const newAmount = amount + (this.content.get(currency) ?? 0)
    this.content.set(currency, newAmount)
  }
}
