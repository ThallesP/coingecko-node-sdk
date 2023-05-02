export type BaseCoinProps = {
  id: string;
  symbol: string;
  name: string;
  platforms?: {
    [key: string]: string | null;
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
    [key: string]: string | null;
  };
}
