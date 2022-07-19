import * as data from "../../data";
import { cache } from ".";
import { yearSrog } from ".";

export function srogRelationship(key: string[], cache: cache) {
  const clientRecord = cache[`${key[0]}_dates_yearSrog`]
    ? cache[`${key[0]}_dates_yearSrog`]
    : data.dates.search({ query: key[0], range: "yearSrog" });
  const yearRecord = cache[`${key[1]}_dates_yearSrog`]
    ? cache[`${key[1]}_dates_yearSrog`]
    : data.dates.search({ query: key[1], range: "yearSrog" });

  if (clientRecord && yearRecord) {
    cache[`${key[0]}_dates_yearSrog`] = clientRecord;
    cache[`${key[1]}_dates_yearSrog`] = yearRecord;

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
