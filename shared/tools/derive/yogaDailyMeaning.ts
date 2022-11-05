import * as data from "../../data";
import { cache, yoga } from ".";

export async function yogaDailyMeaning(
  key: string,
  cache: cache
): Promise<string> {
  const yogaKey = await yoga(key, cache);

  const record = cache[`${yogaKey}_yogas_yogas`]
    ? cache[`${yogaKey}_yogas_yogas`]
    : await data.yogas.search({ query: yogaKey, range: "yogas" });

  if (record) {
    cache[`${yogaKey}_yogas_yogas`] = record;
    return `${record.dailyMeaning}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
