import * as data from "../../data";
import { cache, yoga } from ".";

export function yogaNatalMeaning(key: string, cache: cache) {
  const yogaKey = yoga(key, cache);

  const record = cache[`${yogaKey}_yogas_yogas`]
    ? cache[`${yogaKey}_yogas_yogas`]
    : data.yogas.search({ query: yogaKey, range: "yogas" });

  if (record) {
    cache[`${yogaKey}_yogas_yogas`] = record;
    return `${record.natalMeaning}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
