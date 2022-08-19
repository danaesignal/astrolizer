import * as data from "../../data";
import { cache, lunarDate } from ".";

export function lunarDayCharacter(key: string, cache: cache) {
  const lunarDay = lunarDate(key, cache);
  const record = cache[`${lunarDay}_lunarDays_lunarDay`]
    ? cache[`${lunarDay}_lunarDays_lunarDay`]
    : data.lunarDays.search({ query: lunarDay, range: "lunarDay" });

  if (record) {
    cache[`${lunarDay}_lunarDays_lunarDay`] = record;
    return `${record.character}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
