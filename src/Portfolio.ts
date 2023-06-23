import { Currency } from './Currency'
import { Bank } from './Bank'
import { Money } from './Money'
import { Throwable, Either, Try } from 'funfix-core'

export class Portfolio {
  private readonly moneys: Money[] = []

  add (money: Money): void {
    this.moneys.push(money)
  }

  evaluate (currency: Currency, bank: Bank): Either<Throwable, Money> {
    return this.moneys
      .map((money: Money): Either<Throwable, Money> => {
        return bank.Convert(money, currency)
      })
      .reduce((acc: Either<Throwable, Money>, currentValue: Either<Throwable, Money>): Either<Throwable, Money> => {
        return this.addMoneys(acc, currentValue)
      }, Either.right(new Money(0, currency)))
  }

  private addMoneys (acc: Either<Throwable, Money>, currentValue: Either<Throwable, Money>): Either<Throwable, Money> {
    return acc.flatMap((money: Money) =>
      currentValue.flatMap(currentMoney =>
        Try.of(() => currentMoney.add(money)).toEither()
      )
    )
  }
}
