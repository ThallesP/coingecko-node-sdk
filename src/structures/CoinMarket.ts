export interface Roi {
  times: string | null;
  currency: string | null;
  percentage: string | null;
}

export interface SparklineIn7d {
  price: string[];
}

export type CoinMarketProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: string | null;
  market_cap: string | null;
  market_cap_rank: string | null;
  fully_diluted_valuation: string | null;
  total_volume: string | null;
  high_24h: string | null;
  low_24h: string | null;
  price_change_24h: string | null;
  price_change_percentage_24h: string | null;
  market_cap_change_24h: string | null;
  market_cap_change_percentage_24h: string | null;
  circulating_supply: string | null;
  total_supply: string | null;
  max_supply: string | null;
  ath: string | null;
  ath_change_percentage: string | null;
  ath_date: Date | null;
  atl: string | null;
  atl_change_percentage: string | null;
  atl_date: Date | null;
  roi: Roi | null;
  last_updated: Date | null;
  sparkline_in_7d: SparklineIn7d | null;
  price_change_percentage_1h_in_currency: string | null;
  price_change_percentage_24h_in_currency: string | null;
  price_change_percentage_30d_in_currency: string | null;
  price_change_percentage_7d_in_currency: string | null;
  price_change_percentage_14d_in_currency: string | null;
  price_change_percentage_200d_in_currency: string | null;
  price_change_percentage_1y_in_currency: string | null;
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
  current_price: string | null;
  market_cap: string | null;
  market_cap_rank: string | null;
  fully_diluted_valuation: string | null;
  total_volume: string | null;
  high_24h: string | null;
  low_24h: string | null;
  price_change_24h: string | null;
  price_change_percentage_24h: string | null;
  market_cap_change_24h: string | null;
  market_cap_change_percentage_24h: string | null;
  circulating_supply: string | null;
  total_supply: string | null;
  max_supply: string | null;
  ath: string | null;
  ath_change_percentage: string;
  ath_date: Date | null;
  atl: string | null;
  atl_change_percentage: string | null;
  atl_date: Date | null;
  roi: Roi | null;
  last_updated: Date | null;
  sparkline_in_7d: SparklineIn7d | null;
  price_change_percentage_14d_in_currency: string | null;
  price_change_percentage_1h_in_currency: string | null;
  price_change_percentage_1y_in_currency: string | null;
  price_change_percentage_200d_in_currency: string | null;
  price_change_percentage_24h_in_currency: string | null;
  price_change_percentage_30d_in_currency: string | null;
  price_change_percentage_7d_in_currency: string | null;
}
