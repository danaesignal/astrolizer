import * as data from "../../data";
import { cache } from ".";

export function yearBapPar(key: string, cache: cache): string {
  const bapParKey = (parseInt(key.slice(0, 4)) % 8).toString();
  const record = cache[`${key}_birthParkha_count`]
    ? cache[`${key}_birthParkha_count`]
    : data.birthParkha.search({ query: bapParKey, range: "count" });

  if (record) {
    cache[`${key}_birthParkha_count`] = record;
    return record["kye-Parkha"];
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}