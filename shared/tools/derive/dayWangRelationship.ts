import * as data from "../../../db/definitions";
import { cache } from ".";
import { dayPower } from ".";

export async function dayWangRelationship(
  key: string[],
  cache: cache
): Promise<string> {
  const wangRelationshipKey = `${await dayPower(key[0], cache)}${await dayPower(
    key[1],
    cache
  )}`;

  const record = cache[`${wangRelationshipKey}_relationships_elemCombo`]
    ? cache[`${wangRelationshipKey}_relationships_elemCombo`]
    : await data.relationships.search({
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
