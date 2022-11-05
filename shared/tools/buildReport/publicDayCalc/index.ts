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

  async generateReport() {
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
        content: await derive.lunarMansion(calcDate, cache),
      },
      {
        label: "Lunar Mansion Interpretation",
        content: await derive.lunarMansionInterp(calcDate, cache),
      },
      {
        label: "Lunar Date",
        content: await derive.lunarDate(calcDate, cache),
      },
      {
        label: "Conjunction",
        content: await derive.conjunction(calcDate, cache),
      },
      {
        label: "Conjunction Text",
        content: await derive.conjunctionText(calcDate, cache),
      },
      {
        label: "Weekday",
        content: await derive.weekday(calcDate, cache),
      },
      { label: "Yoga", content: await derive.yoga(calcDate, cache) },
      {
        label: "Yoga Daily Meaning",
        content: await derive.yogaDailyMeaning(calcDate, cache),
      },
      {
        label: "Lunar Day Type",
        content: await derive.lunarDayType(calcDate, cache),
      },
      {
        label: "Weekday Combination",
        content: await derive.weekdayCombination(calcDate, cache),
      },
      {
        label: "Lunar Day Character",
        content: await derive.lunarDayCharacter(calcDate, cache),
      },
      {
        label: "Lunar Day Travel",
        content: await derive.lunarDayTravel(calcDate, cache),
      }
    );

    sectionThree.push(
      { label: "Date Year Sign", content: await derive.year(calcDate, cache) },
      {
        label: "Date Year Srog",
        content: await derive.yearSrog(calcDate, cache),
      },
      {
        label: "Date Year Lue",
        content: await derive.yearLue(calcDate, cache),
      },
      {
        label: "Date Year Wang",
        content: await derive.yearWang(calcDate, cache),
      },
      {
        label: "Date Year Lung",
        content: await derive.yearLung(calcDate, cache),
      }
    );

    sectionFour.push(
      {
        label: "Date Month Sign",
        content: await derive.month(calcDate, cache),
      },
      {
        label: "Date Month Srog",
        content: await derive.monthLifeForce(calcDate, cache),
      },
      {
        label: "Date Month Lue",
        content: await derive.monthBody(calcDate, cache),
      },
      {
        label: "Date Month Wang",
        content: await derive.monthPower(calcDate, cache),
      },
      {
        label: "Date Month Lung",
        content: await derive.monthLuck(calcDate, cache),
      }
    );

    sectionFive.push(
      { label: "Date Day Sign", content: await derive.day(calcDate, cache) },
      {
        label: "Date Day Srog",
        content: await derive.dayLifeForce(calcDate, cache),
      },
      { label: "Date Day Lue", content: await derive.dayBody(calcDate, cache) },
      {
        label: "Date Day Wang",
        content: await derive.dayPower(calcDate, cache),
      },
      { label: "Date Day Lung", content: await derive.dayLuck(calcDate, cache) }
    );

    sectionSix.push(
      {
        label: "Date Hour Sign",
        content: await derive.hour([calcTime, calcDate], cache),
      },
      {
        label: "Date Hour Srog",
        content: await derive.hourLifeForce([calcTime, calcDate], cache),
      },
      {
        label: "Date Hour Lue",
        content: await derive.hourBody([calcTime, calcDate], cache),
      },
      {
        label: "Date Hour Wang",
        content: await derive.hourPower([calcTime, calcDate], cache),
      },
      {
        label: "Date Hour Lung",
        content: await derive.hourLuck([calcTime, calcDate], cache),
      }
    );

    sectionSeven.push(
      {
        label: "Date Day Mewa",
        content: await derive.dayMewa(calcDate, cache),
      },
      {
        label: "Date Day Parkha",
        content: await derive.dayParkha(calcDate, cache),
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
