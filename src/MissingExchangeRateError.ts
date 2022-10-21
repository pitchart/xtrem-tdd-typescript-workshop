import { Currency } from './Currency'

export class MissingExchangeRateError extends Error {
  constructor (from: Currency, to: Currency) {
    super(from + '-> ' + to)
  }

  message: string
}
