import { BigNumber } from "bignumber.js";

export interface Market {
  name: string | null;
  identifier: string | null;
  has_trading_incentive: boolean | null;
}

export type TickerProps = {
  base: string | null;
  target: string | null;
  market: Market | null;
  last: BigNumber | null;
  volume: BigNumber | null;
  converted_last: {
    [key: string]: BigNumber;
  } | null;
  converted_volume: {
    [key: string]: BigNumber;
  } | null;
  cost_to_move_up_usd: BigNumber | null;
  cost_to_move_down_usd: BigNumber | null;
  trust_score: string | null;
  bid_ask_spread_percentage: BigNumber | null;
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
  last: BigNumber | null;
  volume: BigNumber | null;
  converted_last: {
    [key: string]: BigNumber | null;
  } | null;
  converted_volume: {
    [key: string]: BigNumber | null;
  } | null;
  cost_to_move_up_usd: BigNumber | null;
  cost_to_move_down_usd: BigNumber | null;
  trust_score: string | null;
  bid_ask_spread_percentage: BigNumber | null;
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
