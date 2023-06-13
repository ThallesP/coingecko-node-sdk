export class CoinNotFoundError extends Error {
  constructor(public coinName?: string) {
    if (coinName) super(`Coin not found with name: ${coinName}`);
    else super(`Coin not found`);
  }
}
