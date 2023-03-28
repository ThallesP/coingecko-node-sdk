export class CoinNotFoundError extends Error {
  constructor(public coinName: string) {
    super(`Coin not found - ${coinName}`);
  }
}
