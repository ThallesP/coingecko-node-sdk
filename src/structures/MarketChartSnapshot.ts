import { BigNumber } from "bignumber.js";

export interface MarketChartSnapshot {
  value: BigNumber | null;
  date: Date;
}

export type MarketChartSnapshotProps = {
  volumeSnapshots: MarketChartSnapshot[];
  priceSnapshots: MarketChartSnapshot[];
  marketCapSnapshots: MarketChartSnapshot[];
};

export class MarketChartSnapshots {
  constructor(props: MarketChartSnapshotProps) {
    Object.assign(this, props);
  }

  volumeSnapshots: MarketChartSnapshot[];
  priceSnapshots: MarketChartSnapshot[];
  marketCapSnapshots: MarketChartSnapshot[];
}
