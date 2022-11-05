import * as data from "../../data";
import { cache } from ".";
import { monthLuck } from ".";

export async function monthLungRelationship(
  key: string[],
  cache: cache
): Promise<string> {
  const lungRelationshipKey = `${await monthLuck(
    key[0],
    cache
  )}${await monthLuck(key[1], cache)}`;

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
