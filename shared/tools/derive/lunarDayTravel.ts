import * as data from "../../../db/definitions";
import { cache, lunarDate } from ".";

export async function lunarDayTravel(
  key: string,
  cache: cache
): Promise<string> {
  const lunarDay = await lunarDate(key, cache);
  const record = cache[`${lunarDay}_lunarDays_lunarDay`]
    ? cache[`${lunarDay}_lunarDays_lunarDay`]
    : await data.lunarDays.search({ query: lunarDay, range: "lunarDay" });

  if (record) {
    cache[`${lunarDay}_lunarDays_lunarDay`] = record;
    return `${record.travel}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
