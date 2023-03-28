import { GeckoClient } from "./../clients/GeckoClient.js";

(async () => {
  const client = new GeckoClient({ autoRetry: true });

  const coins = await client.coins.markets({ vs_currency: "usd" });

  console.log(coins.length);
})();
