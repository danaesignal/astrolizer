import * as data from "../../data";
import {
  cache,
  yearLifeForce,
  yearBody,
  yearPower,
  yearLuck,
  monthLifeForce,
  monthBody,
  monthPower,
  monthLuck,
  dayLifeForce,
  dayBody,
  dayPower,
  dayLuck,
  hourLifeForce,
  hourBody,
  hourPower,
  hourLuck,
} from ".";

export function elementPercent(key: string[], element: string, cache: cache) {
  const dob = key[1];
  const elements = [
    yearLifeForce(dob, cache),
    yearBody(dob, cache),
    yearPower(dob, cache),
    yearLuck(dob, cache),
    monthLifeForce(dob, cache),
    monthBody(dob, cache),
    monthPower(dob, cache),
    monthLuck(dob, cache),
    dayLifeForce(dob, cache),
    dayBody(dob, cache),
    dayPower(dob, cache),
    dayLuck(dob, cache),
    hourLifeForce(key, cache),
    hourBody(key, cache),
    hourPower(key, cache),
    hourLuck(key, cache),
  ];
  const found = [];

  for (let current of elements) {
    if (current === element) found.push(current);
  }

  return `${(found.length / elements.length) * 100}%`;
}
