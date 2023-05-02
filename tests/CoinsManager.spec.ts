import nock from "nock";
import { beforeEach, describe, it, expect, beforeAll } from "vitest";
import { CoinsManager } from "../src/managers/CoinsManager.js";
import { GeckoRequestManager } from "../src/managers/GeckoRequestManager.js";
import { env } from "./env.js";

let requestManager: GeckoRequestManager;
let coinsManager: CoinsManager;
describe("CoinsManager", () => {
  beforeAll(async () => {
    if (env.MOCK_API_CALLS) {
      nock("https://api.coingecko.com/api/v3")
        .get(/\/coins\/list/i)
        .replyWithFile(200, __dirname + "/mockData/coins.json", {
          "Content-Type": "application/json",
        });
    }
  });

  beforeEach(() => {
    requestManager = new GeckoRequestManager({
      baseURL: "https://api.coingecko.com/api/v3",
      timeoutMS: 30 * 1000,
      autoRetry: true,
    });
    coinsManager = new CoinsManager({ requestManager });
  });

  it("should be able to list all coins", async () => {
    const coins = await coinsManager.list({
      include: {
        platform: true,
      },
    });

    expect(coins.length).toBeGreaterThan(10);
    expect(coins[0].platforms).toBeDefined();
  });
});
