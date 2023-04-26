import { Currency } from './Currency'
import { MissingExchangeRateError } from './MissingExchangeRateError'
import { Money } from './Money'

export class Bank {
  private readonly _exchangeRates: Map<string, number> = new Map()

  static withExchangeRate (from: Currency, to: Currency, rate: number): Bank {
    const bank = new Bank()
    bank.addExchangeRate(from, to, rate)
    return bank
  }

  addExchangeRate (from: Currency, to: Currency, rate: number): void {
    this._exchangeRates.set(this.getKey(from, to), rate)
  }

  convert (money: Money, to: Currency): Money {
    if (!this.canConvert(money.currency, to)) {
      throw new MissingExchangeRateError(money.currency, to)
    }
    return this.convertSafely(money, to)
  }

  private convertSafely (money: Money, to: Currency): Money {
    return to === money.currency
      ? money
      : new Money(money.amount * this._exchangeRates.get(this.getKey(money.currency, to)), to)
  }

  private getKey (from: Currency, to: Currency): string {
    return from + '->' + to
  }

  private canConvert (from: Currency, to: Currency): boolean {
    return from === to || this._exchangeRates.has(this.getKey(from, to))
  }
}
