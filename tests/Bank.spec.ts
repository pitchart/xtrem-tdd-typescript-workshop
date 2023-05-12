import {Currency} from '../src/Currency'
import {Bank} from '../src/Bank'
import {MissingExchangeRateError} from '../src/MissingExchangeRateError'
import {Money} from "../src/Money";

let bank: Bank

describe('Bank', function () {
  beforeEach(() => {
    bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
  })

  test('10 EUR -> USD = 12 USD', () => {
    expect(bank.Convert(new Money(10, Currency.EUR), Currency.USD)).toBe(12)
  })

  test('10 EUR -> EUR = 10 EUR', () => {
    expect(bank.Convert(new Money(10, Currency.EUR), Currency.EUR)).toBe(10)
  })

  test('Throws a MissingExchangeRateException in case of missing exchange rates', () => {
    expect(() => bank.Convert(new Money(10, Currency.EUR), Currency.KRW))
      .toThrow(MissingExchangeRateError).toThrow('EUR-> KRW')
  })

  test('Conversion with different exchange rates EUR -> USD', () => {
    expect(bank.Convert(new Money(10, Currency.EUR), Currency.USD)).toBe(12)

    bank.AddExchangeRate(Currency.EUR, Currency.USD, 1.3)

    expect(bank.Convert(new Money(10, Currency.EUR), Currency.USD)).toBe(13)

    bank.AddExchangeRate(Currency.EUR, Currency.USD, 1.5)

    expect(bank.Convert(new Money(10, Currency.EUR), Currency.USD)).toBe(15)
  })
})
