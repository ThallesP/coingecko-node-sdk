import { BigNumber } from "bignumber.js";

export interface Roi {
  times: BigNumber | null;
  currency: string | null;
  percentage: BigNumber | null;
}

export interface SparklineIn7d {
  price: BigNumber[];
}

export type CoinMarketProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: BigNumber | null;
  market_cap: BigNumber | null;
  market_cap_rank: BigNumber | null;
  fully_diluted_valuation: BigNumber | null;
  total_volume: BigNumber | null;
  high_24h: BigNumber | null;
  low_24h: BigNumber | null;
  price_change_24h: BigNumber | null;
  price_change_percentage_24h: BigNumber | null;
  market_cap_change_24h: BigNumber | null;
  market_cap_change_percentage_24h: BigNumber | null;
  circulating_supply: BigNumber | null;
  total_supply: BigNumber | null;
  max_supply: BigNumber | null;
  ath: BigNumber | null;
  ath_change_percentage: BigNumber | null;
  ath_date: Date | null;
  atl: BigNumber | null;
  atl_change_percentage: BigNumber | null;
  atl_date: Date | null;
  roi: Roi | null;
  last_updated: Date | null;
  sparkline_in_7d: SparklineIn7d | null;
  price_change_percentage_1h_in_currency: BigNumber | null;
  price_change_percentage_24h_in_currency: BigNumber | null;
  price_change_percentage_30d_in_currency: BigNumber | null;
  price_change_percentage_7d_in_currency: BigNumber | null;
  price_change_percentage_14d_in_currency: BigNumber | null;
  price_change_percentage_200d_in_currency: BigNumber | null;
  price_change_percentage_1y_in_currency: BigNumber | null;
};

export class CoinMarket {
  constructor(props: CoinMarketProps) {
    const {
      price_change_percentage_1h_in_currency,
      price_change_percentage_24h_in_currency,
      price_change_percentage_30d_in_currency,
      price_change_percentage_7d_in_currency,
      price_change_percentage_14d_in_currency,
      price_change_percentage_200d_in_currency,
      price_change_percentage_1y_in_currency,
      sparkline_in_7d,
    } = props;

    Object.assign(this, {
      ...props,
      sparkline_in_7d: sparkline_in_7d ?? null,
      // This is sad, i wish i could do some code to avoid this
      price_change_percentage_24h_in_currency:
        price_change_percentage_24h_in_currency ?? null,
      price_change_percentage_7d_in_currency:
        price_change_percentage_7d_in_currency ?? null,
      price_change_percentage_30d_in_currency:
        price_change_percentage_30d_in_currency ?? null,
      price_change_percentage_1h_in_currency:
        price_change_percentage_1h_in_currency ?? null,
      price_change_percentage_14d_in_currency:
        price_change_percentage_14d_in_currency ?? null,
      price_change_percentage_200d_in_currency:
        price_change_percentage_200d_in_currency ?? null,
      price_change_percentage_1y_in_currency:
        price_change_percentage_1y_in_currency ?? null,
    });
  }

  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: BigNumber | null;
  market_cap: BigNumber | null;
  market_cap_rank: BigNumber | null;
  fully_diluted_valuation: BigNumber | null;
  total_volume: BigNumber | null;
  high_24h: BigNumber | null;
  low_24h: BigNumber | null;
  price_change_24h: BigNumber | null;
  price_change_percentage_24h: BigNumber | null;
  market_cap_change_24h: BigNumber | null;
  market_cap_change_percentage_24h: BigNumber | null;
  circulating_supply: BigNumber | null;
  total_supply: BigNumber | null;
  max_supply: BigNumber | null;
  ath: BigNumber | null;
  ath_change_percentage: BigNumber;
  ath_date: Date | null;
  atl: BigNumber | null;
  atl_change_percentage: BigNumber | null;
  atl_date: Date | null;
  roi: Roi | null;
  last_updated: Date | null;
  sparkline_in_7d: SparklineIn7d | null;
  price_change_percentage_14d_in_currency: BigNumber | null;
  price_change_percentage_1h_in_currency: BigNumber | null;
  price_change_percentage_1y_in_currency: BigNumber | null;
  price_change_percentage_200d_in_currency: BigNumber | null;
  price_change_percentage_24h_in_currency: BigNumber | null;
  price_change_percentage_30d_in_currency: BigNumber | null;
  price_change_percentage_7d_in_currency: BigNumber | null;
}
