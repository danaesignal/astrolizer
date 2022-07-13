import { time } from "console";
import * as data from "../../../data";
import { yearsElements } from "../../../data";
import * as derive from "../../derive";

export type ObsAppRequest = {
  dateOfBirth: number;
  timeOfBirth: number;
  calcDate: number;
  calcTime: number;
  motherYearOfBirth: number;
  gender: string;
};
export class ObsApp {
  private input;

  constructor(request: ObsAppRequest) {
    this.input = {
      dateOfBirth: request.dateOfBirth.toString(),
      timeOfBirth: request.timeOfBirth.toString(),
      calcDate: request.calcDate.toString(),
      calcTime: request.calcTime.toString(),
      motherYearOfBirth: request.motherYearOfBirth.toString(),
      gender: request.gender,
    };
  }

  buildReport() {
    const cache: derive.cache = {};
    const report: { [key: string]: string }[][] = [];
    const sectionOne: { [key: string]: string }[] = [];
    const sectionTwo: { [key: string]: string }[] = [];
    const {
      dateOfBirth,
      timeOfBirth,
      calcDate,
      calcTime,
      motherYearOfBirth,
      gender,
    } = this.input;
    const age = derive.age([dateOfBirth, calcDate]);

    sectionOne.push(
      { label: "Date of Birth", content: dateOfBirth },
      { label: "Time of Birth", content: timeOfBirth },
      { label: "Calculation Date", content: calcDate },
      { label: "Calculation Time", content: calcTime },
      {
        label: "Mother's Year of Birth",
        content: motherYearOfBirth,
      },
      { label: "Gender", content: gender },
      { label: "Year Gender", content: derive.yearGender(dateOfBirth, cache) },
      { label: "Year", content: derive.year(dateOfBirth, cache) },
      { label: "Month", content: derive.month(dateOfBirth, cache) },
      { label: "Day", content: derive.day(dateOfBirth, cache) },
      {
        label: "Hour",
        content: derive.hour([timeOfBirth, dateOfBirth], cache),
      },
      { label: "Age", content: age },
      { label: "KyeMe", content: derive.yearKyeMe(dateOfBirth, cache) },
      { label: "KyePar", content: derive.kyePar(timeOfBirth, cache) },
      {
        label: "BapMe",
        content: derive.yearBapMe(dateOfBirth, age, gender, cache),
      },
      { label: "BapPar", content: derive.yearBapPar(dateOfBirth, cache) }
    );

    report.push(sectionOne);
  }
}
