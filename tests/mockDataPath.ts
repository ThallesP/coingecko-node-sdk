import { fileURLToPath } from "node:url";

export function mockDataPath(filename: string) {
  return fileURLToPath(new URL(`./mockData/${filename}`, import.meta.url));
}
