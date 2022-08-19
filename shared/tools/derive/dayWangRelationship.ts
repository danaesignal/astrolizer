import * as data from "../../data";
import { cache } from ".";
import { dayPower } from ".";

export function dayWangRelationship(key: string[], cache: cache) {
  const wangRelationshipKey = `${dayPower(key[0], cache)}${dayPower(
    key[1],
    cache
  )}`;

  const record = cache[`${wangRelationshipKey}_relationships_elemCombo`]
    ? cache[`${wangRelationshipKey}_relationships_elemCombo`]
    : data.relationships.search({
        query: wangRelationshipKey,
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
