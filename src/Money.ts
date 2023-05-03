import { Currency } from './Currency'

export class Money {
  constructor (private readonly amount: number, private readonly currency: Currency) {
  }

  add (money: Money) {
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
