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

  async generateReport() {
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
    const birthYear = dateOfBirth.slice(0, 4);
    const count = (
      parseInt(birthYear) -
      parseInt(motherYearOfBirth) +
      1
    ).toString();

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
      {
        label: "Year Gender",
        content: await derive.yearGender(dateOfBirth, cache),
      },
      { label: "Year", content: await derive.year(dateOfBirth, cache) },
      { label: "Age", content: age },
      { label: "Month", content: await derive.month(dateOfBirth, cache) },
      { label: "KyeMe", content: await derive.yearKyeMe(dateOfBirth, cache) },
      { label: "KyePar", content: await derive.kyePar(count, cache) },
      { label: "Day", content: await derive.day(dateOfBirth, cache) },
      {
        label: "BapMe",
        content: await derive.yearBapMe(dateOfBirth, age, gender, cache),
      },
      { label: "BapPar", content: await derive.yearBapPar(age, gender, cache) },
      {
        label: "Hour",
        content: await derive.hour([timeOfBirth, dateOfBirth], cache),
      }
    );

    sectionTwo.push(
      { label: "Client Sign", content: await derive.year(dateOfBirth, cache) },
      { label: "Year Sign", content: await derive.year(calcDate, cache) },
      {
        label: "LogMen Sign",
        content: await derive.logMenSign(age, gender, dateOfBirth, cache),
      },
      {
        label: "BapMe Sign",
        content: await derive.bapMeSign(dateOfBirth, age, gender, cache),
      },
      {
        label: "Parkha Sign",
        content: await derive.yearBapPar(age, gender, cache),
      },
      {
        label: "Dutsod Sign",
        content: await derive.hour([calcTime, calcDate], cache),
      },
      {
        label: "Client Srog",
        content: await derive.yearSrog(dateOfBirth, cache),
      },
      { label: "Year Srog", content: await derive.yearSrog(calcDate, cache) },
      {
        label: "Srog Relationship",
        content: await derive.srogRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "LogMen Srog",
        content: await derive.logMenSrog(age, gender, dateOfBirth, cache),
      },
      {
        label: "LogMen Srog Relationship",
        content: await derive.lmSrogRelationship(
          age,
          gender,
          dateOfBirth,
          cache
        ),
      },
      {
        label: "BapMe Srog",
        content: await derive.bapMeElement(dateOfBirth, age, gender, cache),
      },
      {
        label: "BapMe Srog Relationship",
        content: await derive.bapMeSrogRelationship(
          dateOfBirth,
          age,
          gender,
          cache
        ),
      },
      {
        label: "Parkha Srog Relationship",
        content: await derive.parkhaSrogRelationship(
          dateOfBirth,
          age,
          gender,
          cache
        ),
      },
      {
        label: "Dargud Srog",
        content: await derive.dargudSrog(dateOfBirth, cache),
      },
      {
        label: "Dutsod Srog",
        content: await derive.dutsodSrog([calcTime, calcDate], cache),
      },
      {
        label: "Client Lue",
        content: await derive.yearLue(dateOfBirth, cache),
      },
      { label: "Year Lue", content: await derive.yearLue(calcDate, cache) },
      {
        label: "Lue Relationship",
        content: await derive.lueRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "LogMen Lue",
        content: await derive.logMenLue(age, gender, dateOfBirth, cache),
      },
      {
        label: "LogMen Lue Relationship",
        content: await derive.lmLueRelationship(
          age,
          gender,
          dateOfBirth,
          cache
        ),
      },
      {
        label: "BapMe Lue",
        content: await derive.bapMeElement(dateOfBirth, age, gender, cache),
      },
      {
        label: "BapMe Lue Relationship",
        content: await derive.bapMeLueRelationship(
          dateOfBirth,
          age,
          gender,
          cache
        ),
      },
      {
        label: "Parkha Lue Relationship",
        content: await derive.parkhaLueRelationship(
          dateOfBirth,
          age,
          gender,
          cache
        ),
      },
      {
        label: "Dargud Lue",
        content: await derive.dargudLue(dateOfBirth, cache),
      },
      {
        label: "Dutsod Lue",
        content: await derive.dutsodLue([calcTime, calcDate], cache),
      },
      {
        label: "Client Wang",
        content: await derive.yearWang(dateOfBirth, cache),
      },
      { label: "Year Wang", content: await derive.yearWang(calcDate, cache) },
      {
        label: "Wang Relationship",
        content: await derive.wangRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "LogMen Wang",
        content: await derive.logMenWang(age, gender, dateOfBirth, cache),
      },
      {
        label: "LogMen Wang Relationship",
        content: await derive.lmWangRelationship(
          age,
          gender,
          dateOfBirth,
          cache
        ),
      },
      {
        label: "BapMe Wang",
        content: await derive.bapMeElement(dateOfBirth, age, gender, cache),
      },
      {
        label: "BapMe Wang Relationship",
        content: await derive.bapMeWangRelationship(
          dateOfBirth,
          age,
          gender,
          cache
        ),
      },
      {
        label: "Parkha Wang Relationship",
        content: await derive.parkhaWangRelationship(
          dateOfBirth,
          age,
          gender,
          cache
        ),
      },
      {
        label: "Dargud Wang",
        content: await derive.dargudWang(dateOfBirth, cache),
      },
      {
        label: "Dutsod Wang",
        content: await derive.dutsodWang([calcTime, calcDate], cache),
      },
      {
        label: "Client Lung",
        content: await derive.yearLung(dateOfBirth, cache),
      },
      { label: "Year Lung", content: await derive.yearLung(calcDate, cache) },
      {
        label: "Lung Relationship",
        content: await derive.lungRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "LogMen Lung",
        content: await derive.logMenLung(age, gender, dateOfBirth, cache),
      },
      {
        label: "LogMen Lung Relationship",
        content: await derive.lmLungRelationship(
          age,
          gender,
          dateOfBirth,
          cache
        ),
      },
      {
        label: "BapMe Lung",
        content: await derive.bapMeElement(dateOfBirth, age, gender, cache),
      },
      {
        label: "BapMe Lung Relationship",
        content: await derive.bapMeLungRelationship(
          dateOfBirth,
          age,
          gender,
          cache
        ),
      },
      {
        label: "Parkha Lung Relationship",
        content: await derive.parkhaLungRelationship(
          dateOfBirth,
          age,
          gender,
          cache
        ),
      },
      {
        label: "Dargud Lung",
        content: await derive.dargudLung([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Dutsod Lung",
        content: await derive.dutsodLung([calcTime, calcDate], cache),
      }
    );

    report.push(sectionOne);
    report.push(sectionTwo);

    return report;
  }
}
