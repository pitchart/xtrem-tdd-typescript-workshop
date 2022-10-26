import { Currency } from './Currency';
import { MoneyError } from "./MoneyError";

export class Money {
  divide(times: number): Money {
    return new Money(this.amount / times, this.currency);
  }

  multiply(times: number): Money {
    return new Money(this.amount * times, this.currency);
  }

  add(anotherMoney: Money): Money {
    if (this.currency !== anotherMoney.currency) {
      throw new MoneyError(this.currency, anotherMoney.currency);
    }
    return new Money(anotherMoney.amount + this.amount, this.currency);
  }


  private readonly _amount: number;
  public get amount(): number {
    return this._amount;
  }

  private readonly _currency: Currency;
  public get currency(): Currency {
    return this._currency;
  }
  
  constructor(amount: number, currency: Currency) {
    this._amount = amount;
    this._currency = currency;
  }
}
