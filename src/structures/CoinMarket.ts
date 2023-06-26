import { LosslessNumber } from "lossless-json";

export interface Roi {
  times: LosslessNumber | null;
  currency: string | null;
  percentage: LosslessNumber | null;
}

export interface SparklineIn7d {
  price: LosslessNumber[];
}

export type CoinMarketProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: LosslessNumber | null;
  market_cap: LosslessNumber | null;
  market_cap_rank: LosslessNumber | null;
  fully_diluted_valuation: LosslessNumber | null;
  total_volume: LosslessNumber | null;
  high_24h: LosslessNumber | null;
  low_24h: LosslessNumber | null;
  price_change_24h: LosslessNumber | null;
  price_change_percentage_24h: LosslessNumber | null;
  market_cap_change_24h: LosslessNumber | null;
  market_cap_change_percentage_24h: LosslessNumber | null;
  circulating_supply: LosslessNumber | null;
  total_supply: LosslessNumber | null;
  max_supply: LosslessNumber | null;
  ath: LosslessNumber | null;
  ath_change_percentage: LosslessNumber | null;
  ath_date: Date | null;
  atl: LosslessNumber | null;
  atl_change_percentage: LosslessNumber | null;
  atl_date: Date | null;
  roi: Roi | null;
  last_updated: Date | null;
  sparkline_in_7d: SparklineIn7d | null;
  price_change_percentage_1h_in_currency: LosslessNumber | null;
  price_change_percentage_24h_in_currency: LosslessNumber | null;
  price_change_percentage_30d_in_currency: LosslessNumber | null;
  price_change_percentage_7d_in_currency: LosslessNumber | null;
  price_change_percentage_14d_in_currency: LosslessNumber | null;
  price_change_percentage_200d_in_currency: LosslessNumber | null;
  price_change_percentage_1y_in_currency: LosslessNumber | null;
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
  current_price: LosslessNumber | null;
  market_cap: LosslessNumber | null;
  market_cap_rank: LosslessNumber | null;
  fully_diluted_valuation: LosslessNumber | null;
  total_volume: LosslessNumber | null;
  high_24h: LosslessNumber | null;
  low_24h: LosslessNumber | null;
  price_change_24h: LosslessNumber | null;
  price_change_percentage_24h: LosslessNumber | null;
  market_cap_change_24h: LosslessNumber | null;
  market_cap_change_percentage_24h: LosslessNumber | null;
  circulating_supply: LosslessNumber | null;
  total_supply: LosslessNumber | null;
  max_supply: LosslessNumber | null;
  ath: LosslessNumber | null;
  ath_change_percentage: LosslessNumber;
  ath_date: Date | null;
  atl: LosslessNumber | null;
  atl_change_percentage: LosslessNumber | null;
  atl_date: Date | null;
  roi: Roi | null;
  last_updated: Date | null;
  sparkline_in_7d: SparklineIn7d | null;
  price_change_percentage_14d_in_currency: LosslessNumber | null;
  price_change_percentage_1h_in_currency: LosslessNumber | null;
  price_change_percentage_1y_in_currency: LosslessNumber | null;
  price_change_percentage_200d_in_currency: LosslessNumber | null;
  price_change_percentage_24h_in_currency: LosslessNumber | null;
  price_change_percentage_30d_in_currency: LosslessNumber | null;
  price_change_percentage_7d_in_currency: LosslessNumber | null;
}
