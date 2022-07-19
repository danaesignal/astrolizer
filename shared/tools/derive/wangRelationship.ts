import * as data from "../../data";
import { cache } from ".";
import { yearWang } from ".";

export function wangRelationship(key: string[], cache: cache) {
  const clientRecord = cache[`${key[0]}_dates_yearWang`]
    ? cache[`${key[0]}_dates_yearWang`]
    : data.dates.search({ query: key[0], range: "yearWang" });
  const yearRecord = cache[`${key[1]}_dates_yearWang`]
    ? cache[`${key[1]}_dates_yearWang`]
    : data.dates.search({ query: key[1], range: "yearWang" });

  if (clientRecord && yearRecord) {
    cache[`${key[0]}_dates_yearWang}`] = clientRecord;
    cache[`${key[1]}_dates_yearWang}`] = yearRecord;

    const wangRelationshipKey = `${clientRecord.yearWang}${yearRecord.yearWang}`;

    const record = cache[`${wangRelationshipKey}_relationships_elemCombo`]
      ? cache[`${wangRelationshipKey}_relationships_elemCombo`]
      : data.relationships.search({
          query: wangRelationshipKey,
          range: "elemCombo",
        });

    if (record) {
      return `${record.elemDeu}`;
    } else {
      throw new Error(
        "Lookup failed. This should not happen, please contact support."
      );
    }
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
