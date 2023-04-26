import { Currency } from './Currency'

export class Money {
  readonly amount: number
  readonly currency: Currency

  constructor (amount: number, currency: Currency) {
    if (amount < 0) throw new Error('Money can not have a negative amount')
    this.amount = amount
    this.currency = currency
  }

  times (time: number): Money {
    return new Money(this.amount * time, this.currency)
  }

  add (money: Money): Money {
    if (this.currency !== money.currency) throw new Error(`Can not add ${this.currency} with ${money.currency}`)
    return new Money(this.amount + money.amount, this.currency)
  }

  divide (divider: number): Money {
    if (divider === 0) throw new Error('Impossible to divide by 0')
    return new Money(this.amount / divider, this.currency)
  }
}
