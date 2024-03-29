import * as data from "../../../db/definitions";
import { cache } from ".";
import { dayLifeForce } from ".";

export async function daySrogRelationship(
  key: string[],
  cache: cache
): Promise<string> {
  const srogRelationshipKey = `${await dayLifeForce(
    key[0],
    cache
  )}${await dayLifeForce(key[1], cache)}`;

  const record = cache[`${srogRelationshipKey}_relationships_elemCombo`]
    ? cache[`${srogRelationshipKey}_relationships_elemCombo`]
    : await data.relationships.search({
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
