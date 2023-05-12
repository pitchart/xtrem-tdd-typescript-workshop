import {Currency} from './Currency'
import {MissingExchangeRateError} from './MissingExchangeRateError'
import {Money} from "./Money";

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

  Convert (money: Money, to: Currency): number {
    if (!this.CanConvert(money.currency, to)) { throw new MissingExchangeRateError(money.currency, to) }

    return this.ConvertSafely(money, to)
  }

  private ConvertSafely (money: Money, to: Currency): number {
    return to === money.currency
      ? money.amount
      : money.times(this._exchangeRates.get(this.KeyFor(money.currency, to))).amount
  }

  private readonly CanConvert = (from: Currency, to: Currency): boolean => from === to || this._exchangeRates.has(this.KeyFor(from, to))

  private readonly KeyFor = (from: Currency, to: Currency): string => from + '->' + to
}
