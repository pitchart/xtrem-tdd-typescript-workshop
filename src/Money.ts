import { Currency } from './Currency'

export class Money {
  constructor (readonly amount: number, readonly currency: Currency) {
  }

  add (money: Money): Money {
    if (this.currency !== money.currency) {
      throw new Error('je sais pas')
    }
    return new Money(this.amount + money.amount, money.currency)
  }

  times (number: number): Money {
    return new Money(this.amount * number, this.currency)
  }

  divide (number: number): Money {
    return new Money(this.amount / number, this.currency)
  }
}
