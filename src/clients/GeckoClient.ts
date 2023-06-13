import { RequestInit } from "node-fetch";
import { CoinsManager } from "../managers/CoinsManager.js";
import { GeckoRequestManager } from "../managers/GeckoRequestManager.js";
import { ContractsManager } from "../managers/ContractsManager.js";

type GeckoClientProps = {
  /* Maybe useful for Pro users*/
  baseURL?: string;

  /**
   * The request timeout. It is a truly timeout, you can rely on this.
   * Default: 30 seconds
   */
  timeoutMS?: number;

  autoRetry?: true | { maxAttempts: number };

  extraHTTPOptions?: Omit<RequestInit, "signal">; // Omit signal due to internal working of timeout
};

export class GeckoClient {
  #requestManager: GeckoRequestManager;

  constructor({
    baseURL = "https://api.coingecko.com/api/v3",
    timeoutMS = 30 * 1000,
    autoRetry,
    extraHTTPOptions,
  }: GeckoClientProps = {}) {
    this.#requestManager = new GeckoRequestManager({
      baseURL,
      timeoutMS,
      autoRetry,
      extraHTTPOptions,
    });

    this.coins = new CoinsManager({ requestManager: this.#requestManager });
    this.contracts = new ContractsManager({
      requestManager: this.#requestManager,
    });
  }

  coins: CoinsManager;
  contracts: ContractsManager;
}
