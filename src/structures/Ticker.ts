export interface Market {
  name: string | null;
  identifier: string | null;
  has_trading_incentive: boolean | null;
  logo?: string | null;
}

export type TickerProps = {
  base: string | null;
  target: string | null;
  market: Market | null;
  last: string | null;
  volume: string | null;
  converted_last: {
    [key: string]: string;
  } | null;
  converted_volume: {
    [key: string]: string;
  } | null;
  cost_to_move_up_usd: string | null;
  cost_to_move_down_usd: string | null;
  trust_score: "green" | "red" | "yellow" | "gray" | null;
  bid_ask_spread_percentage: string | null;
  timestamp: Date | null;
  last_traded_at: Date | null;
  last_fetch_at: Date | null;
  is_anomaly: boolean | null;
  is_stale: boolean | null;
  trade_url: string | null;
  token_info_url: string | null;
  coin_id: string | null;
  target_coin_id: string | null;
};

export class Ticker {
  constructor(props: TickerProps) {
    Object.assign(this, props);
  }

  base: string | null;
  target: string | null;
  market: Market | null;
  last: string | null;
  volume: string | null;
  converted_last: {
    [key: string]: string | null;
  } | null;
  converted_volume: {
    [key: string]: string | null;
  } | null;
  cost_to_move_up_usd: string | null;
  cost_to_move_down_usd: string | null;
  trust_score: "green" | "red" | "yellow" | "gray" | null;
  bid_ask_spread_percentage: string | null;
  timestamp: Date | null;
  last_traded_at: Date | null;
  last_fetch_at: Date | null;
  is_anomaly: boolean | null;
  is_stale: boolean | null;
  trade_url: string | null;
  token_info_url: string | null;
  coin_id: string | null;
  target_coin_id: string | null;
}
