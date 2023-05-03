import { z } from "zod";
const t = {};

const schema = z.object({
  probably: z
    .string()
    .nullish()
    .transform((v) => v ?? null)
    .nullable(),
});

console.log(schema.parse(t));
