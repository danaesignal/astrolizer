import * as data from "../../data";
import { cache } from ".";
import { dayLifeForce } from ".";

export function daySrogRelationship(key: string[], cache: cache) {
  const srogRelationshipKey = `${dayLifeForce(key[0], cache)}${dayLifeForce(
    key[1],
    cache
  )}`;

  const record = cache[`${srogRelationshipKey}_relationships_elemCombo`]
    ? cache[`${srogRelationshipKey}_relationships_elemCombo`]
    : data.relationships.search({
        query: srogRelationshipKey,
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
