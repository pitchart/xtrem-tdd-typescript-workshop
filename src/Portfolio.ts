import { Currency } from "./Currency";
import { Bank } from "./Bank";
import {Money} from "./Money";
import { Throwable } from "funfix-core";
import { Either, Try } from "funfix-core";

export class Portfolio {
  private readonly moneys: Money[] = []

  add(money: Money): void {
    this.moneys.push(money)
  }

  evaluate (currency: Currency, bank: Bank): Either<Throwable, Money> {
    return this.moneys
      .map((money: Money): Either<Throwable, Money> => {
        return bank.Convert(money, currency)
      })
      .reduce((acc: Either<Throwable, Money>, currentValue: Either<Throwable, Money>): Either<Throwable, Money> => {
        if (currentValue.isLeft()) return currentValue;
        // if (acc.isLeft()) return acc;

        return acc.flatMap((money: Money) => Try.of(() => money.add(currentValue.get())).toEither())
      }, Either.right(new Money(0, currency)))
  }
}
