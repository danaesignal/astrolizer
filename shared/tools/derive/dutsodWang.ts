import * as data from "../../../db/definitions";
import { cache, hour } from ".";

export async function dutsodWang(key: string[], cache: cache): Promise<string> {
  const calcDate = key[1];
  const dutsodHour = await hour(key, cache);

  const recordOne = cache[`${calcDate}_dates_dayDate`]
    ? cache[`${calcDate}_dates_dayDate`]
    : await data.dates.search({ query: calcDate, range: "dayDate" });
  const recordTwo = cache[`${dutsodHour}_gektsi2020_combined`]
    ? cache[`${dutsodHour}_gektsi2020_combined`]
    : await data.gektsi2020.search({
        query: dutsodHour,
        range: "combined",
      });

  if (recordOne && recordTwo) {
    cache[`${calcDate}_dates_dayDate`] = recordOne;
    cache[`${dutsodHour}_gektsi2020_combined`] = recordTwo;

    return `${recordOne.yearWang} ${recordTwo.wangrdel}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
