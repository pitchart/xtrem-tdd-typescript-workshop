import { Currency } from './Currency'
import { ExchangeRate } from './ExchangeRate';
import { MissingExchangeRateError } from './MissingExchangeRateError'
import { Money } from './Money'

export class Bank {
  private readonly rates: Map<string, ExchangeRate> = new Map()

  static withExchangeRate(from: Currency, to: Currency, rate: number): Bank {
    const bank = new Bank()
    bank.AddExchangeRate(from, to, rate)
    return bank
  }

  static withExchangeRates (...exchangeRates: ExchangeRate[]): Bank {
    const bank = new Bank()
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
