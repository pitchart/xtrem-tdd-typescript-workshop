import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { Portfolio } from '../src/Portfolio'
import { Money } from '../src/Money'
import { ExchangeRate } from '../src/ExchangeRate'

let bank: Bank
let portfolio: Portfolio

describe('Portfolio', function () {
  beforeEach(() => {
    bank = Bank.withExchangeRates(
      new ExchangeRate(Currency.EUR, Currency.USD, 1.2),
      new ExchangeRate(Currency.USD, Currency.KRW, 1100),
      new ExchangeRate(Currency.EUR, Currency.KRW, 220)
    )
    portfolio = new Portfolio()
  })
  it('should 5 USD + 10 EUR = 17 USD', () => {
    portfolio.add(5, Currency.USD)
    portfolio.add(10, Currency.EUR)

    expect(portfolio.evaluateMoney(bank, Currency.USD)).toEqual(new Money(17, Currency.USD));
  })

  it('should 10 USD + 10 EUR = 22 USD', () => {
    portfolio.add(10, Currency.USD)
    portfolio.add(10, Currency.EUR)

    expect(portfolio.evaluateMoney(bank, Currency.USD)).toEqual(new Money(22, Currency.USD));
  })

  it('should 5 USD + 10 USD = 15 USD', () => {
    portfolio.add(5, Currency.USD)
    portfolio.add(10, Currency.USD)

    expect(portfolio.evaluateMoney(bank, Currency.USD)).toEqual(new Money(15, Currency.USD));
  })
  it('should 1 USD + 1100 KRW = 2200 KRW', () => {
    portfolio.add(1, Currency.USD)
    portfolio.add(1100, Currency.KRW)

    expect(portfolio.evaluateMoney(bank, Currency.KRW)).toEqual(new Money(2200, Currency.KRW));
  })

  it('should 1 USD + 10 EUR = 3300 KRW', () => {
    portfolio.add(1, Currency.USD)
    portfolio.add(10, Currency.EUR)

    expect(portfolio.evaluateMoney(bank, Currency.KRW)).toEqual(new Money(3300, Currency.KRW));
  })
})
