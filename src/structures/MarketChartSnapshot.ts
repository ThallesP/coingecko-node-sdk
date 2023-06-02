export interface MarketChartSnapshot {
  value: number | null;
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
