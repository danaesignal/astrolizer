import * as data from "../../../db/definitions";
import { cache } from ".";
import { monthLifeForce } from ".";

export async function monthSrogRelationship(
  key: string[],
  cache: cache
): Promise<string> {
  const srogRelationshipKey = `${await monthLifeForce(
    key[0],
    cache
  )}${await monthLifeForce(key[1], cache)}`;

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
