import { BigNumber } from "bignumber.js";
import { CoinMarket } from "../../index.js";
import { coinMarketSchema } from "../validators/CoinsManager.validator.js";

export class CoinMarketMapper {
  static toCoinMarket(props: typeof coinMarketSchema._type): CoinMarket {
    const {
      circulating_supply,
      total_supply,
      max_supply,
      atl_change_percentage,
      fully_diluted_valuation,
      sparkline_in_7d,
      price_change_percentage_24h_in_currency,
      price_change_percentage_30d_in_currency,
      price_change_percentage_7d_in_currency,
    } = props;

    return new CoinMarket({
      ...props,
      sparkline_in_7d: sparkline_in_7d ?? null,
      circulating_supply:
        CoinMarketMapper.parseLosslessNumbers(circulating_supply),
      total_supply: CoinMarketMapper.parseLosslessNumbers(total_supply),
      max_supply: CoinMarketMapper.parseLosslessNumbers(max_supply),
      atl_change_percentage: CoinMarketMapper.parseLosslessNumbers(
        atl_change_percentage
      ),
      fully_diluted_valuation: CoinMarketMapper.parseLosslessNumbers(
        fully_diluted_valuation
      ),
      price_change_percentage_24h_in_currency:
        price_change_percentage_24h_in_currency ?? null,
      price_change_percentage_30d_in_currency:
        price_change_percentage_30d_in_currency ?? null,
      price_change_percentage_7d_in_currency:
        price_change_percentage_7d_in_currency ?? null,
    });
  }

  static parseLosslessNumbers(
    losless: typeof coinMarketSchema._type.total_supply
  ): BigNumber | null {
    return losless == null ? null : BigNumber(losless.toString());
  }
}
