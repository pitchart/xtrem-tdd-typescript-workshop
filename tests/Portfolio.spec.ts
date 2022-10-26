import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'

describe('Portfolio', function () {
  it('should 5 USD + 10 EUR = 17 USD', () => {
    const bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
    const portfolio = new Portfolio()
    portfolio.add(5, Currency.USD)
    portfolio.add(10, Currency.EUR)
    expect(portfolio.evaluate(bank, Currency.USD)).toBe(17)
  })

  it('should 10 USD + 10 EUR = 22 USD', () => {
    const bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
    const portfolio = new Portfolio()
    portfolio.add(10, Currency.USD)
    portfolio.add(10, Currency.EUR)
    expect(portfolio.evaluate(bank, Currency.USD)).toBe(22)
  })

  it('should 5 USD + 10 USD = 15 USD', () => {
    const bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
    const portfolio = new Portfolio()
    portfolio.add(5, Currency.USD)
    portfolio.add(10, Currency.USD)
    expect(portfolio.evaluate(bank, Currency.USD)).toBe(15)
  })
})

class Portfolio {
  content: Map<Currency, number> = new Map()

  evaluate (bank: Bank, currency: Currency): number {
    let result: number = 0
    this.content.forEach((value, key) => {
      result += bank.Convert(value, key, currency)
    })
    return result
  }

  add (amount: number, currency: Currency): void {
    const newAmount = amount + (this.content.get(currency) ?? 0)
    this.content.set(currency, newAmount)
  }
}
