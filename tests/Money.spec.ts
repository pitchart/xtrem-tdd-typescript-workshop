import { Currency } from '../src/Currency'

describe('Money', function () {

  
  it('should add money in the same currency', () => {
    const money = new Money(50, Currency.EUR)
    const result = money.add(new Money(10, Currency.EUR))
    expect(result).toEqual(new Money(60, Currency.EUR))
  })

  it('should add another money in the same currency', () => {
    const money = new Money(100, Currency.EUR)
    const result = money.add(new Money(10, Currency.EUR))
    expect(result).toEqual(new Money(110, Currency.EUR))
  })
})

class Money {
  add (anotherMoney: Money): Money {
    return new Money(anotherMoney.amount + this.amount, this.currency)
  }

  private readonly amount: number
  private readonly currency: Currency
  constructor (amount: number, currency: Currency) {
    this.amount = amount
    this.currency = currency
  }
}
