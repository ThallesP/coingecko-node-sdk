import { LosslessNumber } from "lossless-json";

export interface MarketChartSnapshot {
  value: LosslessNumber | null;
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
