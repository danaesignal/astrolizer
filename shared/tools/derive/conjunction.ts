import * as data from "../../data";
import { cache, lunarMansion, weekday } from ".";

export async function conjunction(key: string, cache: cache): Promise<string> {
  const day = await (await weekday(key, cache)).toLowerCase();
  const mansion = await lunarMansion(key, cache);

  const record = cache[`${mansion}_conjunctions_${day}`]
    ? cache[`${mansion}_conjunctions_${day}`]
    : await data.conjunctions.search({ query: mansion, range: day });

  if (record) {
    cache[`${mansion}_conjunctions_${day}`] = record;
    return `${record.conjunction}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
