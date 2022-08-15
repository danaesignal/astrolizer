import * as data from "../../data";
import { cache } from ".";
import { yearSrog } from ".";

export function srogRelationship(key: string[], cache: cache) {
  const clientRecord = cache[`${key[0]}_dates_dayDate`]
    ? cache[`${key[0]}_dates_dayDate`]
    : data.dates.search({ query: key[0], range: "dayDate" });
  const yearRecord = cache[`${key[1]}_dates_dayDate`]
    ? cache[`${key[1]}_dates_dayDate`]
    : data.dates.search({ query: key[1], range: "dayDate" });

  if (clientRecord && yearRecord) {
    cache[`${key[0]}_dates_dayDate`] = clientRecord;
    cache[`${key[1]}_dates_dayDate`] = yearRecord;

    const srogRelationshipKey = `${clientRecord.yearSrog}${yearRecord.yearSrog}`;

    const record = cache[`${srogRelationshipKey}_relationships_elemCombo`]
      ? cache[`${srogRelationshipKey}_relationships_elemCombo`]
      : data.relationships.search({
          query: srogRelationshipKey,
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
