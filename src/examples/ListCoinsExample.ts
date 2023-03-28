import { GeckoClient } from "./../clients/GeckoClient.js";
(async () => {
  const client = new GeckoClient();

  const coins = await client.coins.list();

  console.log(coins.length);
})();
