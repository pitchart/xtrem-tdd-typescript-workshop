import { Either } from 'funfix-core';
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

  // @TODO - Install lib either / try / option
  // Either<MissingExchangeRateError, Money>
  Convert (money: Money, to: Currency): Either<MissingExchangeRateError, Money> {
    if (!this.CanConvert(money.currency, to)) { return Either.left(new MissingExchangeRateError(money.currency, to))}

    return Either.right(this.ConvertSafely(money, to))
  }

  private ConvertSafely (money: Money, to: Currency): Money {
    return to === money.currency
      ? money
      : new Money(money.amount * this._exchangeRates.get(this.KeyFor(money.currency, to)), to)
  }

  private readonly CanConvert = (from: Currency, to: Currency): boolean => from === to || this._exchangeRates.has(this.KeyFor(from, to))

  private readonly KeyFor = (from: Currency, to: Currency): string => from + '->' + to
}
