import { Currency } from '../src/Currency'

describe('Money', function () {
  it('should add money in the same currency', () => {
    const money = new Money(50, Currency.EUR)
    const result = money.add(new Money(10, Currency.EUR))
    expect(result).toBe(new Money(60, Currency.EUR))
  })
})

class Money {
  add (arg0: Money) {
    throw new Error('Method not implemented.')
  }

  private readonly amount: number
  private readonly currency: Currency
  constructor (amount: number, currency: Currency) {
    this.amount = amount
    this.currency = currency
  }
}
