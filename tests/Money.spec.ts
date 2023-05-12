import { Currency } from '../src/Currency'
import { Money } from '../src/Money'

describe('Money', function () {
  test('5 USD + 10 USD = 15 USD', () => {
    const money = new Money(5, Currency.USD)
    const result = money.add(new Money(10, Currency.USD))

    expect(result).toEqual(new Money(15, Currency.USD))
  })

  test('5 USD + 10 EUR should throw Error', () => {
    const dollars = new Money(5, Currency.USD)
    const euros = new Money(10, Currency.EUR)

    expect(() => dollars.add(euros)).toThrow(new Error('je sais pas'))
  })

  test('10 EUR x 2 = 20 EUR', () => {
    const money = new Money(10, Currency.EUR)

    expect(money.times(2)).toEqual(new Money(20, Currency.EUR))
  })

  test('4002 KRW / 4 = 1000.5 KRW', () => {
    const money = new Money(4002, Currency.KRW)

    expect(money.divide(4)).toEqual(new Money(1000.5, Currency.KRW))
  })
})
