import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { Portfolio } from '../src/Portfolio'

let bank: Bank
let portfolio: Portfolio

describe('Portfolio', function () {
  beforeEach(() => {
    bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
    bank.AddExchangeRate(Currency.USD, Currency.KRW, 1100)
    bank.AddExchangeRate(Currency.EUR, Currency.KRW, 220)
    portfolio = new Portfolio()
  })
  it('should 5 USD + 10 EUR = 17 USD', () => {
    portfolio.add(5, Currency.USD)
    portfolio.add(10, Currency.EUR)

    expect(portfolio.evaluate(bank, Currency.USD)).toBe(17)
  })

  it('should 10 USD + 10 EUR = 22 USD', () => {
    portfolio.add(10, Currency.USD)
    portfolio.add(10, Currency.EUR)

    expect(portfolio.evaluate(bank, Currency.USD)).toBe(22)
  })

  it('should 5 USD + 10 USD = 15 USD', () => {
    portfolio.add(5, Currency.USD)
    portfolio.add(10, Currency.USD)

    expect(portfolio.evaluate(bank, Currency.USD)).toBe(15)
  })
  it('should 1 USD + 1100 KRW = 2200 KRW', () => {
    portfolio.add(1, Currency.USD)
    portfolio.add(1100, Currency.KRW)

    expect(portfolio.evaluate(bank, Currency.KRW)).toBe(2200)
  })
  it('should 1 USD + 10 EUR = 3300 KRW', () => {
    portfolio.add(1, Currency.USD)
    portfolio.add(10, Currency.EUR)

    expect(portfolio.evaluate(bank, Currency.KRW)).toBe(3300)
  })
})
