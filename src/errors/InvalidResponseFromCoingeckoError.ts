export class InvalidResponseFromCoingeckoError extends Error {
  constructor(detailedError: string) {
    super(`We got an invalid response from coingecko. Err: ${detailedError}`);
  }
}
