import { Currency } from '../src/Currency'
import { MoneyCalculator } from '../src/MoneyCalculator'

class Money {
  constructor(private readonly amount: number, private readonly currency: Currency) {
  }
  add(money: Money) {
    return new Money(this.amount + money.amount, money.currency);
  }
  
}

describe('Money', function () {
  test('5 USD + 10 USD = 15 USD', () => {
    expect(MoneyCalculator.Add(5, Currency.USD, 10)).toEqual(15)
  })
  
  test('5 USD + 10 USD = 15 USD', () => {
    const money = new Money(5, Currency.USD);
    const result = money.add(new Money(10, Currency.USD));

    expect(result).toEqual(new Money(15, Currency.USD));
  })

  test('10 EUR x 2 = 20 EUR', () => {
    expect(MoneyCalculator.Times(10, Currency.EUR, 2)).toEqual(20)
  })

  test('4002 KRW / 4 = 1000.5 KRW', () => {
    expect(MoneyCalculator.Divide(4002, Currency.KRW, 4)).toBe(1000.5)
  })
})
