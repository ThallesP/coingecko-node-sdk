import { z } from "zod";
import { LosslessNumber } from "lossless-json";

export const coinsSchema = z.array(
  z.object({
    id: z.string(),
    symbol: z.string(),
    name: z.string(),
    platforms: z.record(z.string().nullable()).optional(),
  })
);

const bigNumbers = z.instanceof(LosslessNumber).or(z.number()).nullable();

export const coinMarketSchema = z.object({
  id: z.string(),
  symbol: z.string(),
  name: z.string(),
  image: z.string(),
  current_price: z.number().nullable(),
  market_cap: z.number().nullable(),
  market_cap_rank: z.number().nullable(),
  fully_diluted_valuation: bigNumbers,
  total_volume: z.number().nullable(),
  high_24h: z.number().nullable(),
  low_24h: z.number().nullable(),
  price_change_24h: z.number().nullable(),
  price_change_percentage_24h: z.number().nullable(),
  market_cap_change_24h: z.number().nullable(),
  market_cap_change_percentage_24h: z.number().nullable(),
  circulating_supply: bigNumbers,
  total_supply: bigNumbers,
  max_supply: bigNumbers,
  ath: z.number().nullable(),
  ath_change_percentage: z.number(),
  ath_date: z.coerce.date().nullable(),
  atl: z.number().nullable(),
  atl_change_percentage: bigNumbers,
  atl_date: z.coerce.date().nullable(),
  roi: z
    .object({
      times: z.number().nullable(),
      currency: z.string(),
      percentage: z.number().nullable(),
    })
    .nullable(),
  last_updated: z.coerce.date().nullable(),
  sparkline_in_7d: z
    .object({
      price: z.array(z.number()),
    })
    .nullish(),
  price_change_percentage_24h_in_currency: z.number().nullish(),
  price_change_percentage_30d_in_currency: z.number().nullish(),
  price_change_percentage_7d_in_currency: z.number().nullish(),
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
      last: z
        .number()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      volume: z
        .number()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      cost_to_move_up_usd: z
        .number()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      cost_to_move_down_usd: z
        .number()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      converted_last: z
        .object({
          btc: z
            .number()
            .nullish()
            .transform((v) => v ?? null)
            .nullable(),
          eth: z
            .number()
            .nullish()
            .transform((v) => v ?? null)
            .nullable(),
          usd: z
            .number()
            .nullish()
            .transform((v) => v ?? null)
            .nullable(),
        })
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      converted_volume: z.object({
        btc: z
          .number()
          .nullish()
          .transform((v) => v ?? null)
          .nullable(),
        eth: z
          .number()
          .nullish()
          .transform((v) => v ?? null)
          .nullable(),
        usd: z
          .number()
          .nullish()
          .transform((v) => v ?? null)
          .nullable(),
      }),
      trust_score: z
        .string()
        .nullish()
        .transform((v) => v ?? null)
        .nullable(),
      bid_ask_spread_percentage: z
        .number()
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
  prices: z.array(z.array(z.number(), z.number())),
  market_caps: z.array(z.array(z.number(), z.number())),
  total_volumes: z.array(z.array(z.number(), z.number())),
});
