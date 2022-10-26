import { Currency } from '../src/Currency'
import { MoneyCalculator } from '../src/MoneyCalculator'

describe('Money Calculator', function () {
  it('should add money in the same currency', () => {
    expect(MoneyCalculator.Add(5, Currency.USD, 10)).toBe(15)
  })

  it('should multiply money in the same currency', () => {
    expect(MoneyCalculator.Times(10, Currency.EUR, 2)).toBe(20)
  })

  it('should divide money in the same currency', () => {
    expect(MoneyCalculator.Divide(4002, Currency.KRW, 4)).toBe(1000.5)
  })
})
