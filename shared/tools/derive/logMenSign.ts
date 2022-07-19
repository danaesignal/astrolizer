import * as data from "../../data";
import { cache, yearWang } from ".";

export function logMenSign(
  age: string,
  gender: string,
  dateOfBirth: string,
  cache: cache
): string {
  const clientWang = yearWang(dateOfBirth, cache);
  const keyOne = (parseInt(age) % 10).toString() + gender[0];
  const keyTwo = (parseInt(age) % 12).toString() + gender[0];

  const recordOne = cache[`${keyOne}_logMen_logMen`]
    ? cache[`${keyOne}_logMen_one`]
    : data.logMen.search({ query: keyOne, range: "logMen" });
  const recordTwo = cache[`${keyTwo}_logMen_logMen`]
    ? cache[`${keyOne}_logMen_logMen`]
    : data.logMen.search({ query: keyOne, range: "logMen" });

  if (recordOne && recordTwo) {
    cache[`${keyOne}_logMen_logMen`] = recordOne;
    cache[`${keyTwo}_logMen_logMen`] = recordTwo;
    const resultOne = recordOne[`LM${clientWang}`];
    const resultTwo = recordTwo.lMSign;

    return `${resultOne} ${resultTwo}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
