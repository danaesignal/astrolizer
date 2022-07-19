import * as data from "../../data";
import { cache } from ".";

export function kyePar(key: string, cache: cache): string {
  const kyeParKey = parseInt(key) % 8;
  const record = cache[`${key}_birthParkha_count`]
    ? cache[`${key}_birthParkha_count`]
    : data.birthParkha.search({ query: kyeParKey.toString(), range: "count" });

  if (record) {
    cache[`${key}_birthParkha_count`] = record;
    return record["kye-Parkha"];
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
