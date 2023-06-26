export interface MarketChartSnapshot {
  value: string | null;
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
