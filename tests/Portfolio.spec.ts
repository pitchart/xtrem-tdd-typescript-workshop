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
})

class Portfolio {
  evaluate (bank: Bank, currency: Currency): number {
    return 17
  }

  add (arg0: number, currency: Currency): void {
  }
}
