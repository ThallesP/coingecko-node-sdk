export type MarketChartSnapshotProps = {
  price: number;
  date: Date;
};

export class MarketChartSnapshot {
  constructor(props: MarketChartSnapshotProps) {
    this.price = props.price;
    this.date = props.date;
  }

  price: number;
  date: Date;
}
