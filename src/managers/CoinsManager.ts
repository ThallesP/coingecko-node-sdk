import { CoinNotFoundError } from "../errors/CoinNotFoundError.js";
import { CoinMarket } from "../structures/CoinMarket.js";
import { Ticker } from "../structures/Ticker.js";
import { BaseCoin } from "./../structures/BaseCoin.js";
import { GeckoRequestManager } from "./GeckoRequestManager.js";
import { CoinMarketMapper } from "./mappers/CoinMarketMapper.js";

export type CoinsManagerProps = {
  requestManager: GeckoRequestManager;
};
export type Periods = "1h" | "24h" | "7d" | "14d" | "30d" | "200d" | "1y";

export type ListCoinsProps = {
  include?: {
    platform?: boolean;
  };
};

export type ListMarketsProps = {
  vs_currency: string;

  include?: {
    sparkline?: boolean;
    price_change_percentage: Periods[];
  };
  page?: number;
  per_page?: number;
};

export type GetTickersProps = {
  coin_id: string;
  include?: {
    depth?: boolean;
    include_exchange_logo?: boolean;
  };
};

export class CoinsManager {
  #request: GeckoRequestManager;

  constructor({ requestManager }: CoinsManagerProps) {
    this.#request = requestManager;
  }

  async list(props?: ListCoinsProps): Promise<BaseCoin[]> {
    const params = new URLSearchParams();
    if (props && props.include) {
      const { platform } = props.include;

      if (platform)
        params.append("include_platform", String(props.include.platform));
    }

    const response = await this.#request.get("/coins/list?" + params);

    const data = (await response.json()) as BaseCoin[];

    return data.map((coin) => new BaseCoin(coin));
  }

  async markets({
    vs_currency,
    include,
    per_page = 100,
    page = 1,
  }: ListMarketsProps): Promise<CoinMarket[]> {
    const params = new URLSearchParams();
    params.append("vs_currency", vs_currency);

    if (include) {
      const { price_change_percentage, sparkline } = include;

      if (sparkline) params.append("sparkline", String(sparkline));

      if (price_change_percentage)
        params.append(
          "price_change_percentage",
          price_change_percentage.join(",")
        );

      params.append("per_page", String(per_page));
      params.append("page", String(page));
    }

    const response = await this.#request.get("/coins/markets?" + params);

    if (!response) throw new CoinNotFoundError(vs_currency);

    const data = (await response.json()) as CoinMarket[];

    return data.map(CoinMarketMapper.toCoinMarket);
  }

  async tickers({
    coin_id,
    include,
  }: GetTickersProps): Promise<Ticker[] | null> {
    const params = new URLSearchParams();

    if (include) {
      const { depth, include_exchange_logo } = include;
      if (depth) params.append("depth", String(depth));

      if (include_exchange_logo)
        params.append("include_exchange_logo", String(include_exchange_logo));
    }

    const response = await this.#request.get(
      `/coins/${coin_id}/tickers?` + params
    );

    if (response.status === 404) return null;

    const data = (await response.json()) as { name: string; tickers: Ticker[] };

    return data.tickers;
  }
}
