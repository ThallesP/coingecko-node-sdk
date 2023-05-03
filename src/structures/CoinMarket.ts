import { BigNumber } from "bignumber.js";

export interface Roi {
  times: number | null;
  currency: string;
  percentage: number | null;
}

export interface SparklineIn7d {
  price: number[];
}

export type CoinMarketProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number | null;
  market_cap: number | null;
  market_cap_rank: number | null;
  fully_diluted_valuation: BigNumber | null;
  total_volume: number | null;
  high_24h: number | null;
  low_24h: number | null;
  price_change_24h: number | null;
  price_change_percentage_24h: number | null;
  market_cap_change_24h: number | null;
  market_cap_change_percentage_24h: number | null;
  circulating_supply: BigNumber | null;
  total_supply: BigNumber | null;
  max_supply: BigNumber | null;
  ath: number | null;
  ath_change_percentage: number;
  ath_date: Date | null;
  atl: number | null;
  atl_change_percentage: BigNumber | null;
  atl_date: Date | null;
  roi: Roi | null;
  last_updated: Date | null;
  sparkline_in_7d: SparklineIn7d | null;
  price_change_percentage_24h_in_currency: number | null;
  price_change_percentage_30d_in_currency: number | null;
  price_change_percentage_7d_in_currency: number | null;
};

export class CoinMarket {
  constructor(props: CoinMarketProps) {
    Object.assign(this, {
      ...props,
      sparkline_in_7d: props.sparkline_in_7d ?? null,
      price_change_percentage_24h_in_currency:
        props.price_change_percentage_24h_in_currency ?? null,
      price_change_percentage_30d_in_currency:
        props.price_change_percentage_30d_in_currency ?? null,
      price_change_percentage_7d_in_currency:
        props.price_change_percentage_7d_in_currency ?? null,
    });
  }

  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number | null;
  market_cap: number | null;
  market_cap_rank: number | null;
  fully_diluted_valuation: BigNumber | null;
  total_volume: number | null;
  high_24h: number | null;
  low_24h: number | null;
  price_change_24h: number | null;
  price_change_percentage_24h: number | null;
  market_cap_change_24h: number | null;
  market_cap_change_percentage_24h: number | null;
  circulating_supply: BigNumber | null;
  total_supply: BigNumber | null;
  max_supply: BigNumber | null;
  ath: number | null;
  ath_change_percentage: number;
  ath_date: Date | null;
  atl: number | null;
  atl_change_percentage: BigNumber | null;
  atl_date: Date | null;
  roi: Roi | null;
  last_updated: Date | null;
  sparkline_in_7d: SparklineIn7d | null;
  price_change_percentage_24h_in_currency: number | null;
  price_change_percentage_30d_in_currency: number | null;
  price_change_percentage_7d_in_currency: number | null;
}
