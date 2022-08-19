import * as data from "../../data";
import { cache } from ".";
import { hourBody } from ".";

export function hourSrogRelationship(
  client: string[],
  year: string[],
  cache: cache
) {
  const lueRelationshipKey = `${hourBody(client, cache)}${hourBody(
    year,
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
