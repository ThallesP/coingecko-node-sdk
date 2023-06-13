import { HttpError } from "../errors/HttpError.js";
import { Coin } from "../structures/Coin.js";
import { CoinsManagerProps } from "./CoinsManager.js";
import { GeckoRequestManager } from "./GeckoRequestManager.js";

export class ContractsManager {
  #request: GeckoRequestManager;

  constructor({ requestManager }: CoinsManagerProps) {
    this.#request = requestManager;
  }

  async coinByContract(name: string, address: string): Promise<Coin | null> {
    const response = await this.#request.get(
      `/coins/${name}/contract/${address}`
    );

    if (response.status === 404) return null;

    if (!response.ok)
      throw new HttpError(response.status, await response.text());

    return (await response.json()) as Coin;
  }
}
