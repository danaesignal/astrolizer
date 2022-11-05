import * as data from "../../data";
import { cache } from ".";
import { yearLue } from ".";

export async function lueRelationship(
  key: string[],
  cache: cache
): Promise<string> {
  const clientRecord = cache[`${key[0]}_dates_dayDate`]
    ? cache[`${key[0]}_dates_dayDate`]
    : await data.dates.search({ query: key[0], range: "dayDate" });
  const yearRecord = cache[`${key[1]}_dates_dayDate`]
    ? cache[`${key[1]}_dates_dayDate`]
    : await data.dates.search({ query: key[1], range: "dayDate" });

  if (clientRecord && yearRecord) {
    cache[`${key[0]}_dates_dayDate`] = clientRecord;
    cache[`${key[1]}_dates_dayDate`] = yearRecord;

    const lueRelationshipKey = `${clientRecord.yearLue}${yearRecord.yearLue}`;

    const record = cache[`${lueRelationshipKey}_relationships_elemCombo`]
      ? cache[`${lueRelationshipKey}_relationships_elemCombo`]
      : await data.relationships.search({
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
