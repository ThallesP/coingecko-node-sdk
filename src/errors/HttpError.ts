export class HttpError extends Error {
  constructor(public statusCode: number, public data: unknown) {
    super(`Invalid ${statusCode} status code`);
  }
}
