import * as data from "../../data";
import { cache } from ".";
import { dayLuck } from ".";

export async function dayLungRelationship(
  key: string[],
  cache: cache
): Promise<string> {
  const lungRelationshipKey = `${dayLuck(key[0], cache)}${dayLuck(
    key[1],
    cache
  )}`;

  const record = cache[`${lungRelationshipKey}_relationships_elemCombo`]
    ? cache[`${lungRelationshipKey}_relationships_elemCombo`]
    : await data.relationships.search({
        query: lungRelationshipKey,
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
