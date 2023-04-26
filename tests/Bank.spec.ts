import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { MissingExchangeRateError } from '../src/MissingExchangeRateError'
import { Money } from '../src/Money'

let bank: Bank

describe('Bank', function () {
  beforeEach(() => {
    bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
  })

  test('10 EUR -> USD = 12 USD', () => {
    expect(bank.convert(new Money(10, Currency.EUR), Currency.USD)).toEqual(new Money(12, Currency.USD))
  })

  test('10 EUR -> EUR = 10 EUR', () => {
    expect(bank.convert(new Money(10, Currency.EUR), Currency.EUR)).toEqual(new Money(10, Currency.EUR))
  })

  test('Throws a MissingExchangeRateException in case of missing exchange rates', () => {
    expect(() => bank.convert(new Money(10, Currency.EUR), Currency.KRW))
      .toThrow(MissingExchangeRateError)
  })

  test('Conversion with different exchange rates EUR -> USD', () => {
    expect(bank.convert(new Money(10, Currency.EUR), Currency.USD)).toEqual(new Money(12, Currency.USD))

    bank.addExchangeRate(Currency.EUR, Currency.USD, 1.3)

    expect(bank.convert(new Money(10, Currency.EUR), Currency.USD)).toEqual(new Money(13, Currency.USD))

    bank.addExchangeRate(Currency.EUR, Currency.USD, 1.5)

    expect(bank.convert(new Money(10, Currency.EUR), Currency.USD)).toEqual(new Money(15, Currency.USD))
  })
})
