import { Currency } from './Currency'
import { MissingExchangeRateError } from './MissingExchangeRateError'
import { Money } from './Money'

export class Bank {
  private readonly _exchangeRates: Map<string, number> = new Map()

  static withExchangeRate (from: Currency, to: Currency, rate: number): Bank {
    const bank = new Bank()
    bank.AddExchangeRate(from, to, rate)
    return bank
  }

  AddExchangeRate (from: Currency, to: Currency, rate: number): void {
    this._exchangeRates.set(this.KeyFor(from, to), rate)
  }

  private Convert (amount: number, from: Currency, to: Currency): number {
    if (!this.CanConvert(from, to)) { throw new MissingExchangeRateError(from, to) }

    return this.ConvertSafely(amount, from, to)
  }

  ConvertMoney (money: Money, currency: Currency): Money {
    if (!this.CanConvert(money.currency, currency)) {
      throw new MissingExchangeRateError(money.currency, currency)
    }

    return new Money(this.ConvertSafely(money.amount, money.currency, currency), currency)
  }

  private ConvertSafely (amount: number, from: Currency, to: Currency): number {
    return to === from
      ? amount
      : amount * this._exchangeRates.get(this.KeyFor(from, to))
  }

  private readonly CanConvert = (from: Currency, to: Currency): boolean => from === to || this._exchangeRates.has(this.KeyFor(from, to))

  private readonly KeyFor = (from: Currency, to: Currency): string => from + '->' + to
}
