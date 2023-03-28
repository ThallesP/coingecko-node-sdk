import { BigNumber } from "bignumber.js";
import { CoinMarket } from "../../index.js";

export class CoinMarketMapper {
  static toCoinMarket(props: any): CoinMarket {
    const {
      circulating_supply,
      total_supply,
      max_supply,
      atl_change_percentage,
      fully_diluted_valuation,
    } = props;

    return new CoinMarket({
      ...props,
      circulating_supply: circulating_supply && BigNumber(circulating_supply),
      total_supply: total_supply && BigNumber(total_supply),
      max_supply: max_supply && BigNumber(max_supply),
      atl_change_percentage:
        atl_change_percentage && BigNumber(atl_change_percentage),
      fully_diluted_valuation:
        fully_diluted_valuation && BigNumber(fully_diluted_valuation),
    });
  }
}
