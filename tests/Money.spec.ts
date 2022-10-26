import { Currency } from '../src/Currency'

describe('Money', function () {

  describe.each([
    {a: 50, b: 10, expected: 60},
    {a: 100, b: 10, expected: 110}
  ])('Money sum', ({a, b, expected}) => {
    it(`should add money in the same currency`, () => {
      const money = new Money(a, Currency.EUR)
      const result = money.add(new Money(b, Currency.EUR))
      expect(result).toEqual(new Money(expected, Currency.EUR))
    })
  });
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
