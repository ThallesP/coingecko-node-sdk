export interface Market {
  name?: string;
  identifier?: string;
  has_trading_incentive?: boolean;
}

export type TickerProps = {
  base?: string;
  target?: string;
  market?: Market;
  last?: number;
  volume?: number;
  converted_last?: {
    [key: string]: number;
  };
  converted_volume?: {
    [key: string]: number;
  };
  cost_to_move_up_usd?: number;
  cost_to_move_down_usd?: number;
  trust_score?: string;
  bid_ask_spread_percentage?: number;
  timestamp?: Date;
  last_traded_at?: Date;
  last_fetch_at?: Date;
  is_anomaly?: boolean;
  is_stale?: boolean;
  trade_url?: string;
  token_info_url?: null;
  coin_id?: string;
  target_coin_id?: string;
};

export class Ticker {
  constructor(props: TickerProps) {
    Object.assign(this, props);
  }

  base?: string;
  target?: string;
  market?: Market;
  last?: number;
  volume?: number;
  converted_last?: {
    [key: string]: number;
  };
  converted_volume?: {
    [key: string]: number;
  };
  cost_to_move_up_usd?: number;
  cost_to_move_down_usd?: number;
  trust_score?: string;
  bid_ask_spread_percentage?: number;
  timestamp?: Date;
  last_traded_at?: Date;
  last_fetch_at?: Date;
  is_anomaly?: boolean;
  is_stale?: boolean;
  trade_url?: string;
  token_info_url?: null;
  coin_id?: string;
  target_coin_id?: string;
}
