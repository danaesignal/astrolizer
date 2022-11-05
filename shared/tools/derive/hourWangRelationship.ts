import * as data from "../../data";
import { cache } from ".";
import { hourPower } from ".";

export async function hourWangRelationship(
  client: string[],
  year: string[],
  cache: cache
) {
  const lueRelationshipKey = `${await hourPower(
    client,
    cache
  )}${await hourPower(year, cache)}`;

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
}
