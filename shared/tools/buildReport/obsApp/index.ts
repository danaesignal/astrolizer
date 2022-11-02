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

  generateReport() {
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
      { label: "DoB", content: dateOfBirth },
      { label: "ToB", content: timeOfBirth },
      { label: "CalcDate", content: calcDate },
      { label: "Present Time", content: calcTime },
      {
        label: "MoYOB",
        content: motherYearOfBirth,
      },
      { label: "Gender", content: gender },
      { label: "Year Gender", content: derive.yearGender(dateOfBirth, cache) },
      { label: "Year", content: derive.year(dateOfBirth, cache) },
      { label: "Age", content: age },
      { label: "Month", content: derive.month(dateOfBirth, cache) },
      { label: "KyeMe", content: derive.yearKyeMe(dateOfBirth, cache) },
      { label: "KyePar", content: derive.kyePar(timeOfBirth, cache) },
      { label: "Day", content: derive.day(dateOfBirth, cache) },
      {
        label: "BapMe",
        content: derive.yearBapMe(dateOfBirth, age, gender, cache),
      },
      { label: "BapPar", content: derive.yearBapPar(dateOfBirth, cache) },
      {
        label: "Hour",
        content: derive.hour([timeOfBirth, dateOfBirth], cache),
      }
    );

    sectionTwo.push(
      { label: "Client Sign", content: derive.year(dateOfBirth, cache) },
      { label: "Year Sign", content: derive.year(calcDate, cache) },
      {
        label: "LogMen Sign",
        content: derive.logMenSign(age, gender, dateOfBirth, cache),
      },
      {
        label: "BapMe Sign",
        content: derive.bapMeSign(dateOfBirth, age, gender, cache),
      },
      { label: "Parkha Sign", content: derive.yearBapPar(dateOfBirth, cache) },
      {
        label: "Dutsod Sign",
        content: derive.hour([calcTime, calcDate], cache),
      },
      { label: "Client Srog", content: derive.yearSrog(dateOfBirth, cache) },
      { label: "Year Srog", content: derive.yearSrog(calcDate, cache) },
      {
        label: "Srog Relationship",
        content: derive.srogRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "LogMen Srog",
        content: derive.logMenSrog(age, gender, dateOfBirth, cache),
      },
      {
        label: "LogMen Srog Relationship",
        content: derive.lmSrogRelationship(age, gender, dateOfBirth, cache),
      },
      {
        label: "BapMe Srog",
        content: derive.bapMeElement(dateOfBirth, age, gender, cache),
      },
      {
        label: "BapMe Srog Relationship",
        content: derive.bapMeSrogRelationship(dateOfBirth, age, gender, cache),
      },
      {
        label: "Parkha Srog Relationship",
        content: derive.parkhaSrogRelationship(dateOfBirth, cache),
      },
      { label: "Dargud Srog", content: derive.dargudSrog(dateOfBirth, cache) },
      {
        label: "Dutsod Srog",
        content: derive.dutsodSrog([calcTime, calcDate], cache),
      },
      { label: "Client Lue", content: derive.yearLue(dateOfBirth, cache) },
      { label: "Year Lue", content: derive.yearLue(calcDate, cache) },
      {
        label: "Lue Relationship",
        content: derive.lueRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "LogMen Lue",
        content: derive.logMenLue(age, gender, dateOfBirth, cache),
      },
      {
        label: "LogMen Lue Relationship",
        content: derive.lmLueRelationship(age, gender, dateOfBirth, cache),
      },
      {
        label: "BapMe Lue",
        content: derive.bapMeElement(dateOfBirth, age, gender, cache),
      },
      {
        label: "BapMe Lue Relationship",
        content: derive.bapMeLueRelationship(dateOfBirth, age, gender, cache),
      },
      {
        label: "Parkha Lue Relationship",
        content: derive.parkhaLueRelationship(dateOfBirth, cache),
      },
      { label: "Dargud Lue", content: derive.dargudLue(dateOfBirth, cache) },
      {
        label: "Dutsod Lue",
        content: derive.dutsodLue([calcTime, calcDate], cache),
      },
      { label: "Client Wang", content: derive.yearWang(dateOfBirth, cache) },
      { label: "Year Wang", content: derive.yearWang(calcDate, cache) },
      {
        label: "Wang Relationship",
        content: derive.wangRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "LogMen Wang",
        content: derive.logMenWang(age, gender, dateOfBirth, cache),
      },
      {
        label: "LogMen Wang Relationship",
        content: derive.lmWangRelationship(age, gender, dateOfBirth, cache),
      },
      {
        label: "BapMe Wang",
        content: derive.bapMeElement(dateOfBirth, age, gender, cache),
      },
      {
        label: "BapMe Wang Relationship",
        content: derive.bapMeWangRelationship(dateOfBirth, age, gender, cache),
      },
      {
        label: "Parkha Wang Relationship",
        content: derive.parkhaWangRelationship(dateOfBirth, cache),
      },
      { label: "Dargud Wang", content: derive.dargudWang(dateOfBirth, cache) },
      {
        label: "Dutsod Wang",
        content: derive.dutsodWang([calcTime, calcDate], cache),
      },
      { label: "Client Lung", content: derive.yearLung(dateOfBirth, cache) },
      { label: "Year Lung", content: derive.yearLung(calcDate, cache) },
      {
        label: "Lung Relationship",
        content: derive.lungRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "LogMen Lung",
        content: derive.logMenLung(age, gender, dateOfBirth, cache),
      },
      {
        label: "LogMen Lung Relationship",
        content: derive.lmLungRelationship(age, gender, dateOfBirth, cache),
      },
      {
        label: "BapMe Lung",
        content: derive.bapMeElement(dateOfBirth, age, gender, cache),
      },
      {
        label: "BapMe Lung Relationship",
        content: derive.bapMeLungRelationship(dateOfBirth, age, gender, cache),
      },
      {
        label: "Parkha Lung Relationship",
        content: derive.parkhaLungRelationship(dateOfBirth, cache),
      },
      {
        label: "Dargud Lung",
        content: derive.dargudLung([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Dutsod Lung",
        content: derive.dutsodLung([calcTime, calcDate], cache),
      }
    );

    report.push(sectionOne);
    report.push(sectionTwo);

    return report;
  }
}
