import { Currency } from './Currency'
import { MissingExchangeRateError } from './MissingExchangeRateError'

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

  Convert (amount: number, from: Currency, to: Currency): number {
    if (!this.CanConvert(from, to)) { throw new MissingExchangeRateError(from, to) }

    return this.ConvertSafely(amount, from, to)
  }

  private ConvertSafely (amount: number, from: Currency, to: Currency): number {
    return to === from
      ? amount
      : amount * this._exchangeRates.get(this.KeyFor(from, to))
  }

  private readonly CanConvert = (from: Currency, to: Currency): boolean => from === to || this._exchangeRates.has(this.KeyFor(from, to))

  private readonly KeyFor = (from: Currency, to: Currency): string => from + '->' + to
}
