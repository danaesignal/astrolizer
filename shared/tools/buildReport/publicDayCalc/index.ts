import * as derive from "../../derive";

export type PublicDayCalcRequest = {
  calcDate: number;
  calcTime: number;
};
export class PublicDayCalc {
  private input;

  constructor(request: PublicDayCalcRequest) {
    this.input = {
      calcDate: request.calcDate.toString(),
      calcTime: request.calcTime.toString(),
    };
  }

  generateReport() {
    const cache: derive.cache = {};
    const report: { [key: string]: string }[][] = [];
    const sectionOne: { [key: string]: string }[] = [];
    const sectionTwo: { [key: string]: string }[] = [];
    const sectionThree: { [key: string]: string }[] = [];
    const sectionFour: { [key: string]: string }[] = [];
    const sectionFive: { [key: string]: string }[] = [];
    const sectionSix: { [key: string]: string }[] = [];
    const sectionSeven: { [key: string]: string }[] = [];
    const { calcDate, calcTime } = this.input;

    sectionOne.push(
      { label: "Calc Date", content: calcDate },
      { label: "Calc Hour", content: calcTime }
    );

    sectionTwo.push(
      {
        label: "Lunar Mansion",
        content: derive.lunarMansion(calcDate, cache),
      },
      {
        label: "Lunar Mansion Interpretation",
        content: derive.lunarMansionInterp(calcDate, cache),
      },
      {
        label: "Lunar Date",
        content: derive.lunarDate(calcDate, cache),
      },
      { label: "Conjunction", content: derive.conjunction(calcDate, cache) },
      {
        label: "Conjunction Text",
        content: derive.conjunctionText(calcDate, cache),
      },
      {
        label: "Weekday",
        content: derive.weekday(calcDate, cache),
      },
      { label: "Yoga", content: derive.yoga(calcDate, cache) },
      {
        label: "Yoga Daily Meaning",
        content: derive.yogaDailyMeaning(calcDate, cache),
      },
      {
        label: "Lunar Day Type",
        content: derive.lunarDayType(calcDate, cache),
      },
      {
        label: "Weekday Combination",
        content: derive.weekdayCombination(calcDate, cache),
      },
      {
        label: "Lunar Day Character",
        content: derive.lunarDayCharacter(calcDate, cache),
      },
      {
        label: "Lunar Day Travel",
        content: derive.lunarDayTravel(calcDate, cache),
      }
    );

    sectionThree.push(
      { label: "Date Year Sign", content: derive.year(calcDate, cache) },
      { label: "Date Year Srog", content: derive.yearSrog(calcDate, cache) },
      { label: "Date Year Lue", content: derive.yearLue(calcDate, cache) },
      { label: "Date Year Wang", content: derive.yearWang(calcDate, cache) },
      { label: "Date Year Lung", content: derive.yearLung(calcDate, cache) }
    );

    sectionFour.push(
      { label: "Date Month Sign", content: derive.month(calcDate, cache) },
      {
        label: "Date Month Srog",
        content: derive.monthLifeForce(calcDate, cache),
      },
      { label: "Date Month Lue", content: derive.monthBody(calcDate, cache) },
      { label: "Date Month Wang", content: derive.monthPower(calcDate, cache) },
      { label: "Date Month Lung", content: derive.monthLuck(calcDate, cache) }
    );

    sectionFive.push(
      { label: "Date Day Sign", content: derive.day(calcDate, cache) },
      {
        label: "Date Day Srog",
        content: derive.dayLifeForce(calcDate, cache),
      },
      { label: "Date Day Lue", content: derive.dayBody(calcDate, cache) },
      { label: "Date Day Wang", content: derive.dayPower(calcDate, cache) },
      { label: "Date Day Lung", content: derive.dayLuck(calcDate, cache) }
    );

    sectionSix.push(
      {
        label: "Date Hour Sign",
        content: derive.hour([calcTime, calcDate], cache),
      },
      {
        label: "Date Hour Srog",
        content: derive.hourLifeForce([calcTime, calcDate], cache),
      },
      {
        label: "Date Hour Lue",
        content: derive.hourBody([calcTime, calcDate], cache),
      },
      {
        label: "Date Hour Wang",
        content: derive.hourPower([calcTime, calcDate], cache),
      },
      {
        label: "Date Hour Lung",
        content: derive.hourLuck([calcTime, calcDate], cache),
      }
    );

    sectionSeven.push(
      {
        label: "Date Day Mewa",
        content: derive.dayMewa(calcDate, cache),
      },
      {
        label: "Date Day Parkha",
        content: derive.dayParkha(calcDate, cache),
      }
    );

    report.push(sectionOne);
    report.push(sectionTwo);
    report.push(sectionThree);
    report.push(sectionFour);
    report.push(sectionFive);
    report.push(sectionSix);
    report.push(sectionSeven);

    return report;
  }
}
