export type BaseCoinProps = {
  id: string;
  symbol: string;
  name: string;
  platforms?: {
    [key: string]: string;
  };
};

export class BaseCoin {
  constructor(baseCoinProps: BaseCoinProps) {
    Object.assign(this, baseCoinProps);
  }

  id: string;
  symbol: string;
  name: string;
  platforms?: {
    [key: string]: string;
  };
}
