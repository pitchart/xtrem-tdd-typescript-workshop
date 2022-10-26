import { Currency } from './Currency'
import { MissingExchangeRateError } from './MissingExchangeRateError'
import { Money } from './Money'

class ExchangeRate {
  private readonly from: Currency;
  private readonly to: Currency;
  private readonly rate: number;

  constructor(from: Currency, to: Currency, rate: number) {
    this.from = from;
    this.to = to;
    this.rate = rate;
  }
  
}

export class Bank {
  private readonly _exchangeRates: Map<string, number> = new Map()
  private readonly rates: ExchangeRate[] = []

  static withExchangeRate(from: Currency, to: Currency, rate: number): Bank {
    const bank = new Bank()
    bank.AddExchangeRate(from, to, rate)
    bank.rates.push(new ExchangeRate(from, to, rate))
    return bank
  }

  AddExchangeRate(from: Currency, to: Currency, rate: number): void {
    this._exchangeRates.set(this.KeyFor(from, to), rate)
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
      : new Money(from.multiply(this._exchangeRates.get(this.KeyFor(from.currency, to))).amount, to)
  }

  private readonly CanConvert = (from: Currency, to: Currency): boolean => from === to || this._exchangeRates.has(this.KeyFor(from, to))

  private readonly KeyFor = (from: Currency, to: Currency): string => from + '->' + to
}
