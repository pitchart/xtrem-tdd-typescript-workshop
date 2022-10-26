import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { MissingExchangeRateError } from '../src/MissingExchangeRateError'
import { Money } from '../src/Money'

let bank: Bank

describe('Bank', function () {
  beforeEach(() => {
    bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
  })

  it('should convert one currency to another when exchange rate exists', () => {
    expect(bank.ConvertMoney(new Money(10, Currency.EUR), Currency.USD)).toEqual(new Money(12, Currency.USD))
  })

  it('should convert to the same currency', () => {
    expect(bank.ConvertMoney(new Money(10, Currency.EUR), Currency.EUR)).toEqual(new Money(10, Currency.EUR))
  })

  it('should not convert in case of missing exchange rates', () => {
    expect(() => bank.ConvertMoney(new Money(10, Currency.EUR), Currency.KRW))
      .toThrow(MissingExchangeRateError).toThrow('EUR-> KRW')
  })

  it('should convert currency with the correct exchange rate when I change the exchange rate', () => {
    // arrange/Given
    const before = bank.ConvertMoney(new Money(10, Currency.EUR), Currency.USD)
    // act/When
    bank.AddExchangeRate(Currency.EUR, Currency.USD, 1.3)
    const after = bank.ConvertMoney(new Money(10, Currency.EUR), Currency.USD)
    // assert/Then

    expect(after).not.toEqual(before)
    expect(after).toEqual(new Money(13, Currency.USD))
  })
})
