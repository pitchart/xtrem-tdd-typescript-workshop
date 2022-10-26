import { Currency } from './Currency';

export class ExchangeRate {
  private readonly _from: Currency;
  private readonly _to: Currency;
  private readonly _rate: number;
  public get rate(): number {
    return this._rate;
  }

  constructor(from: Currency, to: Currency, rate: number) {
    this._from = from;
    this._to = to;
    this._rate = rate;
  }

  get from (): Currency {
    return this._from
  }

  get to (): Currency {
    return this._to
  }
}
