import "dotenv/config";
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "PUBLIC_",
  server: {
    MOCK_API_CALLS: z
      .enum(["true", "false"])
      .transform((value) => value === "true")
      .default("true"),
  },
  client: {},
  runtimeEnv: process.env,
});
