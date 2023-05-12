import { Currency } from "../src/Currency";
import { Portfolio } from "../src/Portfolio";
import { Bank } from "../src/Bank";
import { Money } from "../src/Money";

describe("Portfolio", function () {
  describe("Contains list of amount in different currencies", function () {
    let portfolio;
    let bank: Bank;

    beforeEach(() => {
      portfolio = new Portfolio();
      bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2);
    });

    test("empty portfolio evaluate to 0 EUR", () => {
      expect(portfolio.evaluate(Currency.EUR, bank)).toEqual(new Money(0, Currency.EUR));
    });

    test("portfolio with 5 EUR evaluate to 5 EUR", () => {
      portfolio.add(new Money(5, Currency.EUR));
      expect(portfolio.evaluate(Currency.EUR, bank)).toEqual(new Money(5, Currency.EUR));
    });

    test("portfolio with 5 EUR and 5 EUR evaluate to 10 EUR", () => {
      portfolio.add(new Money(5, Currency.EUR));
      portfolio.add(new Money(5, Currency.EUR));
      expect(portfolio.evaluate(Currency.EUR, bank)).toEqual(new Money(10,Currency.EUR));
    });
  });
  describe("we can evaluate the total amount of portfolio in a given currency", () => {
    let portfolio: Portfolio;
    let bank: Bank;

    beforeEach(() => {
      portfolio = new Portfolio();
      bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2);
      bank.AddExchangeRate(Currency.EUR, Currency.KRW, 1344);
      bank.AddExchangeRate(Currency.USD, Currency.KRW, 1100);
    });
    test("portfolio with 5 USD and 10 EUR evaluate to 17 USD", () => {
      portfolio.add(new Money(5, Currency.USD));
      portfolio.add(new Money(10, Currency.EUR));

      expect(portfolio.evaluate(Currency.USD, bank)).toEqual(new Money(17,Currency.USD));
    });

    test("portfolio with 1 USD and 1100 KRW evaluate to 2200 KRW", () => {
        portfolio.add(new Money(1, Currency.USD));
        portfolio.add(new Money(1100, Currency.KRW));

        expect(portfolio.evaluate(Currency.KRW, bank)).toEqual(new Money(2200, Currency.KRW));
    })

    test("portfolio with 5 USD and 10 EUR evaluate to 18940 KRW", () => {
        portfolio.add(new Money(5, Currency.USD));
        portfolio.add(new Money(10, Currency.EUR));

        expect(portfolio.evaluate(Currency.KRW, bank)).toEqual(new Money(18940, Currency.KRW));
    })
  });
});
