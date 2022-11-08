import * as data from "../../../db/definitions";
import { cache } from ".";
import { hourBody } from ".";

export async function hourLueRelationship(
  client: string[],
  year: string[],
  cache: cache
) {
  const lueRelationshipKey = `${await hourBody(client, cache)}${await hourBody(
    year,
    cache
  )}`;

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
