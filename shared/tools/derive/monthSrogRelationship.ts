import * as data from "../../data";
import { cache } from ".";
import { monthLifeForce } from ".";

export async function monthSrogRelationship(
  key: string[],
  cache: cache
): Promise<string> {
  const srogRelationshipKey = `${monthLifeForce(key[0], cache)}${monthLifeForce(
    key[1],
    cache
  )}`;

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
