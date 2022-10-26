import { Currency } from '../src/Currency'

describe('Portfolio', function () {
  it('should 5 USD + 10 EUR = 17 USD', () => {
    const portfolio = new Portfolio()
    portfolio.add(5, Currency.USD)
    portfolio.add(10, Currency.EUR)
    portfolio.evaluate(Currency.USD).toBe(17)
  })
})

class Portfolio {
  evaluate (currency: Currency) {
    throw new Error('Method not implemented.')
  }

  add (arg0: number, currency: Currency) {
    throw new Error('Method not implemented.')
  }
}
