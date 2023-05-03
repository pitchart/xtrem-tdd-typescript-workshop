import { Currency } from '../src/Currency'
import { Portfolio } from '../src/Portfolio'

describe('Portfolio', function () {
    describe('Contains list of amount in different currencies', function () {
        test('empty portfolio evaluate to 0 EUR', () => {
            const portfolio = new Portfolio();
            expect(portfolio.evaluate(Currency.EUR)).toEqual([0, Currency.EUR])
        })

        test('portfolio with 5 EUR evaluate to 5 EUR', () => {
            const portfolio = new Portfolio();
            portfolio.add(5, Currency.EUR);
            expect(portfolio.evaluate(Currency.EUR)).toEqual([5, Currency.EUR])
        })
    })
 
})