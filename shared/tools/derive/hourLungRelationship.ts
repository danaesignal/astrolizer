import * as data from "../../data";
import { cache } from ".";
import { hourLuck } from ".";

export async function hourLungRelationship(
  client: string[],
  year: string[],
  cache: cache
) {
  const lueRelationshipKey = `${hourLuck(client, cache)}${hourLuck(
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
