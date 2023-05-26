import { MarketChartSnapshot } from "../../structures/MarketChartSnapshot.js";
import { marketChartSchema } from "../validators/CoinsManager.validator.js";

export class MarketChartMapper {
  static toMarketChart({ prices }: typeof marketChartSchema._type) {
    return prices.map(
      ([timestamp, price]) =>
        new MarketChartSnapshot({ price, date: new Date(timestamp) })
    );
  }
}
