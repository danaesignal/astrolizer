import * as data from "../../data";
import { cache } from ".";
import { dayBody } from ".";

export function dayLueRelationship(key: string[], cache: cache) {
  const lueRelationshipKey = `${dayBody(key[0], cache)}${dayBody(
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
