import { z } from "zod";
import { BigNumber } from "bignumber.js";

export const coinsSchema = z.array(
  z.object({
    id: z.string(),
    symbol: z.string(),
    name: z.string(),
    platforms: z.record(z.string().nullable()).optional(),
  })
);

const losslessNumber = z.instanceof(BigNumber);

export const coinMarketSchema = z.object({
  id: z.string(),
  symbol: z.string(),
  name: z.string(),
  image: z.string(),
  current_price: losslessNumber.nullable(),
  market_cap: losslessNumber.nullable(),
  market_cap_rank: losslessNumber.nullable(),
  fully_diluted_valuation: losslessNumber.nullable(),
  total_volume: losslessNumber.nullable(),
  high_24h: losslessNumber.nullable(),
  low_24h: losslessNumber.nullable(),
  price_change_24h: losslessNumber.nullable(),
  price_change_percentage_24h: losslessNumber.nullable(),
  market_cap_change_24h: losslessNumber.nullable(),
  market_cap_change_percentage_24h: losslessNumber.nullable(),
  circulating_supply: losslessNumber.nullable(),
  total_supply: losslessNumber.nullable(),
  max_supply: losslessNumber.nullable(),
  ath: losslessNumber.nullable(),
  ath_change_percentage: losslessNumber.nullable(),
  ath_date: z.coerce.date().nullable(),
  atl: losslessNumber.nullable(),
  atl_change_percentage: losslessNumber.nullable(),
  atl_date: z.coerce.date().nullable(),
  roi: z
    .object({
      times: losslessNumber.nullable(),
      currency: z.string().nullable(),
      percentage: losslessNumber.nullable(),
    })
    .nullable(),
  last_updated: z.coerce.date().nullable(),
  sparkline_in_7d: z
    .object({
      price: z.array(losslessNumber),
    })
    .nullish(),
  price_change_percentage_14d_in_currency: losslessNumber.nullish(),
  price_change_percentage_1h_in_currency: losslessNumber.nullish(),
  price_change_percentage_1y_in_currency: losslessNumber.nullish(),
  price_change_percentage_200d_in_currency: losslessNumber.nullish(),
  price_change_percentage_24h_in_currency: losslessNumber.nullish(),
  price_change_percentage_30d_in_currency: losslessNumber.nullish(),
  price_change_percentage_7d_in_currency: losslessNumber.nullish(),
});

export const coinMarketsSchema = z.array(coinMarketSchema);

// Please, don't judge me on this 👍, I couldn't find any other way
export const tickersSchema = z.object({
  name: z.string(),
  tickers: z.array(
    z.object({
      base: z
        .string()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      target: z
        .string()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      market: z
        .object({
          name: z
            .string()
            .nullish()
            .transform((v) => v ?? null)
            .nullable(),
          identifier: z
            .string()
            .nullish()
            .transform((v) => v ?? null)
            .nullable(),
          has_trading_incentive: z
            .boolean()
            .nullish()
            .transform((v) => v ?? null)
            .nullable(),
          logo: z
            .string()
            .nullish()
            .transform((v) => v ?? null)
            .nullable(),
        })
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      last: losslessNumber
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      volume: losslessNumber
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      cost_to_move_up_usd: losslessNumber
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      cost_to_move_down_usd: losslessNumber
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      converted_last: z
        .object({
          btc: losslessNumber
            .nullish()
            .transform((v) => v ?? null)
            .nullable(),
          eth: losslessNumber
            .nullish()
            .transform((v) => v ?? null)
            .nullable(),
          usd: losslessNumber
            .nullish()
            .transform((v) => v ?? null)
            .nullable(),
        })
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      converted_volume: z.object({
        btc: losslessNumber
          .nullish()
          .transform((v) => v ?? null)
          .nullable(),
        eth: losslessNumber
          .nullish()
          .transform((v) => v ?? null)
          .nullable(),
        usd: losslessNumber
          .nullish()
          .transform((v) => v ?? null)
          .nullable(),
      }),
      trust_score: z
        .string()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      bid_ask_spread_percentage: losslessNumber
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      timestamp: z.coerce
        .date()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      last_traded_at: z.coerce
        .date()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      last_fetch_at: z.coerce
        .date()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      is_anomaly: z
        .boolean()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      is_stale: z
        .boolean()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      trade_url: z
        .string()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      token_info_url: z
        .string()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      coin_id: z
        .string()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      target_coin_id: z
        .string()
        .transform((v) => v ?? null)
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
    })
  ),
});

export const marketChartSchema = z.object({
  prices: z.array(z.tuple([losslessNumber, losslessNumber.nullable()])),
  market_caps: z.array(z.tuple([losslessNumber, losslessNumber.nullable()])),
  total_volumes: z.array(z.tuple([losslessNumber, losslessNumber.nullable()])),
});
