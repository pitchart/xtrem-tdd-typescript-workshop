import { Currency } from './Currency'

export class MoneyCalculator {
  static Add = (amount: number, currency: Currency, amountAdded: number): number => amount + amountAdded
  static Times = (amount: number, currency: Currency, times: number): number => amount * times
  static Divide = (amount: number, currency: Currency, divisor: number): number => amount / divisor
}
