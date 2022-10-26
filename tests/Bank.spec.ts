import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { MissingExchangeRateError } from '../src/MissingExchangeRateError'

let bank: Bank

describe('Bank', function () {
  beforeEach(() => {
    bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
  })

  it('should convert one currency to another when exchange rate exists', () => {
    expect(bank.Convert(10, Currency.EUR, Currency.USD)).toBe(12)
  })

  it('should convert to the same currency', () => {
    expect(bank.Convert(10, Currency.EUR, Currency.EUR)).toBe(10)
  })

  it('should not convert in case of missing exchange rates', () => {
    expect(() => bank.Convert(10, Currency.EUR, Currency.KRW))
      .toThrow(MissingExchangeRateError).toThrow('EUR-> KRW')
  })

  it('should convert currency with the correct exchange rate when I change the exchange rate', () => {
    // arrange/Given
    const before = bank.Convert(10, Currency.EUR, Currency.USD)
    // act/When
    bank.AddExchangeRate(Currency.EUR, Currency.USD, 1.3)
    const after = bank.Convert(10, Currency.EUR, Currency.USD)
    // assert/Then

    expect(after).not.toBe(before)
    expect(after).toBe(13)
  })
})
