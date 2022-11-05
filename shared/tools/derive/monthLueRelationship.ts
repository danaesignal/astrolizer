import * as data from "../../data";
import { cache } from ".";
import { monthBody } from ".";

export async function monthLueRelationship(
  key: string[],
  cache: cache
): Promise<string> {
  const lueRelationshipKey = `${await monthBody(
    key[0],
    cache
  )}${await monthBody(key[1], cache)}`;

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
