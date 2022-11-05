import * as data from "../../data";
import { cache } from ".";
import { monthPower } from ".";

export async function monthWangRelationship(
  key: string[],
  cache: cache
): Promise<string> {
  const wangRelationshipKey = `${await monthPower(
    key[0],
    cache
  )}${await monthPower(key[1], cache)}`;

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
