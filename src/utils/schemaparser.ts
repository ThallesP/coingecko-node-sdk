import { parse } from "lossless-json";
import type { Response } from "node-fetch";
import { InvalidResponseFromCoingeckoError } from "../errors/InvalidResponseFromCoingeckoError.js";
import { Big } from "big.js";

export async function parseSchemaFromResponse<T>(
	schema: Zod.ZodTypeAny,
	response: Response,
): Promise<T> {
	try {
		const jsonData = parse(await response.text(), undefined, (value: string) =>
			new Big(value).toFixed(),
		);

		const data = await schema.parseAsync(jsonData).catch((err) => {
			throw new InvalidResponseFromCoingeckoError(
				`Response body is not a valid schema. Schema parse error: ${err}`,
			);
		});

		return data;
	} catch (error) {
		throw new InvalidResponseFromCoingeckoError(
			`Response body is not a valid JSON. Received err: ${error}`,
		);
	}
}
