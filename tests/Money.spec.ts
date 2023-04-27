import { Currency } from '../src/Currency'
import { Money } from '../src/Money'

describe('Money', function () {
  it('should not be negative', () => {
    expect(() => new Money(-10, Currency.USD)).toThrow('Money can not have a negative amount')
  })

  it('should be multiplied by a number', () => {
    const money: Money = new Money(10, Currency.EUR)

    const multiplied = money.times(2)

    expect(multiplied).toEqual(new Money(20, Currency.EUR))
    expect(money).toEqual(new Money(10, Currency.EUR))
  })

  it('should add another money when currency is the same', () => {
    const money = new Money(5, Currency.USD)

    const sum = money.add(new Money(5, Currency.USD))

    expect(sum).toEqual(new Money(10, Currency.USD))
  })

  it('should not add another money when currency is different', () => {
    const money = new Money(5, Currency.USD)

    const moneyAddition = (): Money => money.add(new Money(5, Currency.EUR))

    expect(moneyAddition).toThrow('Can not add USD with EUR')
  })

  it('should be divided by a number', () => {
    const money = new Money(4002, Currency.KRW)

    const divided = money.divide(4)

    expect(divided).toEqual(new Money(1000.5, Currency.KRW))
  })

  it('should not be divided by 0', () => {
    const money = new Money(4002, Currency.KRW)

    const division = (): Money => money.divide(0)

    expect(division).toThrow('Impossible to divide by 0')
  })
})
