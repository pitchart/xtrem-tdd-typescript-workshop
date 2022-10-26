import { Currency } from '../src/Currency'
import { Money } from '../src/Money'
import { MoneyError } from '../src/MoneyError'

describe('Money', function () {
  describe.each([
    { a: 50, b: 10, expected: 60 },
    { a: 100, b: 10, expected: 110 }
  ])('Money sum', ({ a, b, expected }) => {
    it('should add money in the same currency', () => {
      const money = new Money(a, Currency.EUR)
      const result = money.add(new Money(b, Currency.EUR))
      expect(result).toEqual(new Money(expected, Currency.EUR))
    })
  })

  it('should not allow to add money from different currencies', () => {
    const money = new Money(20, Currency.EUR)
    expect(() => money.add(new Money(20, Currency.USD))).toThrow(MoneyError).toThrow('unable to add EUR and USD')
  })

  it('should multiply money', () => {
    const money = new Money(10, Currency.EUR)
    const moneyResult = money.multiply(2)

    expect(moneyResult).toEqual(new Money(20, Currency.EUR))
  })

  it('should divide money', () => {
    const money = new Money(20, Currency.EUR)
    const moneyResult = money.divide(3)

    expect(moneyResult).toEqual(new Money(20 / 3, Currency.EUR))
  })
})
