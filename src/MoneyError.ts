import { Currency } from '../src/Currency';


export class MoneyError extends Error {
  constructor(currency: Currency, anotherCurrency: Currency) {
    super(`unable to add ${currency} and ${anotherCurrency}`);
  }
}
