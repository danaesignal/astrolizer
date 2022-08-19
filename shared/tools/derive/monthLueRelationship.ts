import * as data from "../../data";
import { cache } from ".";
import { monthBody } from ".";

export function monthLueRelationship(key: string[], cache: cache) {
  const lueRelationshipKey = `${monthBody(key[0], cache)}${monthBody(
    key[1],
    cache
  )}`;

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
}
