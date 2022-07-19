import * as data from "../../data";
import { cache } from ".";
import { yearLue } from ".";

export function lueRelationship(key: string[], cache: cache) {
  const clientRecord = cache[`${key[0]}_dates_yearLue`]
    ? cache[`${key[0]}_dates_yearLue`]
    : data.dates.search({ query: key[0], range: "yearLue" });
  const yearRecord = cache[`${key[1]}_dates_yearLue`]
    ? cache[`${key[1]}_dates_yearLue`]
    : data.dates.search({ query: key[1], range: "yearLue" });

  if (clientRecord && yearRecord) {
    cache[`${key[0]}_dates_yearLue`] = clientRecord;
    cache[`${key[1]}_dates_yearLue`] = yearRecord;

    const lueRelationshipKey = `${clientRecord.yearLue}${yearRecord.yearLue}`;

    const record = cache[`${lueRelationshipKey}_relationships_elemCombo`]
      ? cache[`${lueRelationshipKey}_relationships_elemCombo`]
      : data.relationships.search({
          query: lueRelationshipKey,
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
