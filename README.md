# CoinGecko SDK

Don't use this for now, but if you live at the bleeding edge, look at this example:

```ts
import { GeckoClient } from "coingecko-node-sdk";
(async () => {
  const client = new GeckoClient();

  const coins = await client.coins.list();

  console.log(coins);
})();
```
