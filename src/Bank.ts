import { Currency } from './Currency'
import { MissingExchangeRateError } from './MissingExchangeRateError'
import { Money } from './Money'

class ExchangeRate {
  private readonly from: Currency;
  private readonly to: Currency;
  private readonly _rate: number;
  public get rate(): number {
    return this._rate;
  }

  constructor(from: Currency, to: Currency, rate: number) {
    this.from = from;
    this.to = to;
    this._rate = rate;
  }
  
}

export class Bank {
  private readonly rates: Map<string, ExchangeRate> = new Map()

  static withExchangeRate(from: Currency, to: Currency, rate: number): Bank {
    const bank = new Bank()
    bank.AddExchangeRate(from, to, rate)
    return bank
  }

  AddExchangeRate(from: Currency, to: Currency, rate: number): void {
    this.rates.set(this.KeyFor(from, to), new ExchangeRate(from, to, rate))
  }

  ConvertMoney(money: Money, currency: Currency): Money {
    if (!this.CanConvert(money.currency, currency)) {
      throw new MissingExchangeRateError(money.currency, currency)
    }

    return this.ConvertSafely(money, currency)
  }

  private ConvertSafely(from: Money, to: Currency): Money {
    return from.currency === to
      ? from
      : new Money(from.multiply(this.rates.get(this.KeyFor(from.currency, to)).rate).amount, to)
  }

  private readonly CanConvert = (from: Currency, to: Currency): boolean => from === to || this.rates.has(this.KeyFor(from, to))

  private readonly KeyFor = (from: Currency, to: Currency): string => from + '->' + to
}
