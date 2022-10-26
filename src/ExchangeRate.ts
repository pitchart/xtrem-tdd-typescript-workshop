import { Currency } from './Currency';

export class ExchangeRate {
  private readonly from: Currency;
  private readonly to: Currency;
  private readonly _rate: number;
  public get rate(): number {
    return this._rate;
  }

  constructor(from: Currency, to: Currency, rate: number) {
    this.from = from;
    this.to = to;
    this._rate = rate;
  }
}
