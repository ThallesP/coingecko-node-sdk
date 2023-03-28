import { HttpError } from "../errors/HttpError.js";
import { sleep } from "../utils/sleep.js";
import fetch, { RequestInfo, RequestInit, Response } from "node-fetch";

type GeckoRequestManagerProps = {
  baseURL: string;
  timeoutMS: number;
  autoRetry?: true | { maxAttempts: number };
  extraHTTPOptions?: RequestInit;
};

export class GeckoRequestManager {
  constructor(private props: GeckoRequestManagerProps) {}

  async get(endpoint: string, request?: RequestInit) {
    const response = await this.#request(
      `${this.props.baseURL}${endpoint}`,
      request
    );

    return response;
  }

  async #retry(
    input: RequestInfo,
    response: Response,
    init?: RequestInit
  ): Promise<Response> {
    if (!this.props.autoRetry)
      throw new HttpError(response.status, await response.text());

    let maxAttempts = 3;

    if (typeof this.props.autoRetry == "object") {
      maxAttempts = this.props.autoRetry.maxAttempts;
    }

    let retryResponse = response;
    for (let i = 0; i < maxAttempts; i++) {
      if (
        retryResponse.status === 429 &&
        retryResponse.headers.get("Retry-After")
      )
        await sleep(1000 * Number(retryResponse.headers.get("Retry-After")));

      retryResponse = await this.#fetch(input, init);

      if (this.#shouldRetry(retryResponse.status)) continue;

      return retryResponse;
    }

    throw new HttpError(response.status, await response.text());
  }

  #shouldRetry(statusCode: number): boolean {
    switch (statusCode) {
      case 429:
        return true;
      case 503:
        return true;
      default:
        return false;
    }
  }

  async #request(input: RequestInfo, init?: RequestInit) {
    let response = await this.#fetch(input, init);

    if (this.#shouldRetry(response.status))
      response = await this.#retry(input, response, init);

    return response;
  }

  async #fetch(input: RequestInfo, init?: RequestInit) {
    const controller = new AbortController();

    setTimeout(() => {
      controller.abort(
        `CoinGecko request timed out after ${this.props.timeoutMS}ms!`
      );
    }, this.props.timeoutMS);

    return fetch(input, {
      ...init,
      signal: controller.signal,
      ...this.props.extraHTTPOptions,
    }).catch((err) => {
      if (controller.signal.aborted) {
        throw new Error(controller.signal.reason);
      }
      throw err;
    });
  }
}
