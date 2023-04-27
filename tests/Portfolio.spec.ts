import { Bank } from '../src/Bank'
import { Currency } from '../src/Currency'
import { Money } from '../src/Money'

class Portfolio {
  add (money: Money): void {

  }

  evaluate (bank: Bank, currency: Currency): Money {
    return bank.convert(new Money(17, Currency.USD), currency)
  }
}

describe('Portfolio with 5 USD and 10 EUR', () => {
  it('should be evaluated to 17 USD in a Bank containing an Exchange Rate of 1.2 from EUR to USD ', () => {
    // Given - Arrange
    const bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
    const portfolio = new Portfolio()
    portfolio.add(new Money(5, Currency.USD))
    portfolio.add(new Money(10, Currency.EUR))

    // When - Act
    const result = portfolio.evaluate(bank, Currency.USD)

    // Then - Assert
    expect(result).toEqual(new Money(17, Currency.USD))
  })
  it('should be evaluated to 14.1 EUR in a Bank containing an Exchange Rate of 0.8 from USD to EUR', () => {
    // Given - Arrange
    const bank = Bank.withExchangeRate(Currency.USD, Currency.EUR, 0.8)
    const portfolio = new Portfolio()
    portfolio.add(new Money(5, Currency.USD))
    portfolio.add(new Money(10, Currency.EUR))

    // When - Act
    const result = portfolio.evaluate(bank, Currency.EUR)

    // Then - Assert
    expect(result).toEqual(new Money(14.1, Currency.EUR))
  })
})
