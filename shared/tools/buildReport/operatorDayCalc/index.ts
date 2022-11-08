import * as derive from "../../derive";

export type OperatorDayCalcRequest = {
  dateOfBirth: number;
  timeOfBirth: number;
  motherYearOfBirth: number;
  calcDate: number;
  calcTime: number;
};
export class OperatorDayCalc {
  private input;

  constructor(request: OperatorDayCalcRequest) {
    this.input = {
      dateOfBirth: request.dateOfBirth.toString(),
      timeOfBirth: request.timeOfBirth.toString(),
      motherYearOfBirth: request.motherYearOfBirth.toString(),
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
    const sectionEight: { [key: string]: string }[] = [];
    const sectionNine: { [key: string]: string }[] = [];
    const sectionTen: { [key: string]: string }[] = [];
    const { dateOfBirth, timeOfBirth, motherYearOfBirth, calcDate, calcTime } =
      this.input;
    const birthYear = dateOfBirth.slice(0, 4);
    const count = (
      parseInt(birthYear) -
      parseInt(motherYearOfBirth) +
      1
    ).toString();

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
      {
        label: "Client Year Sign",
        content: await derive.year(dateOfBirth, cache),
      },
      {
        label: "Client Year Srog",
        content: await derive.yearSrog(dateOfBirth, cache),
      },
      {
        label: "Client Year Lue",
        content: await derive.yearLue(dateOfBirth, cache),
      },
      {
        label: "Client Year Wang",
        content: await derive.yearWang(dateOfBirth, cache),
      },
      {
        label: "Client Year Lung",
        content: await derive.yearLung(dateOfBirth, cache),
      },
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
      },
      {
        label: "Year Srog Relationship",
        content: await derive.srogRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "Year Lue Relationship",
        content: await derive.lueRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "Year Wang Relationship",
        content: await derive.wangRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "Year Lung Relationship",
        content: await derive.lungRelationship([dateOfBirth, calcDate], cache),
      }
    );

    sectionFour.push(
      {
        label: "Client Month Sign",
        content: await derive.month(dateOfBirth, cache),
      },
      {
        label: "Client Month Srog",
        content: await derive.monthLifeForce(dateOfBirth, cache),
      },
      {
        label: "Client Month Lue",
        content: await derive.monthBody(dateOfBirth, cache),
      },
      {
        label: "Client Month Wang",
        content: await derive.monthPower(dateOfBirth, cache),
      },
      {
        label: "Client Month Lung",
        content: await derive.monthLuck(dateOfBirth, cache),
      },
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
      },
      {
        label: "Month Srog Relationship",
        content: await derive.monthSrogRelationship(
          [dateOfBirth, calcDate],
          cache
        ),
      },
      {
        label: "Month Lue Relationship",
        content: await derive.monthLueRelationship(
          [dateOfBirth, calcDate],
          cache
        ),
      },
      {
        label: "Month Wang Relationship",
        content: await derive.monthWangRelationship(
          [dateOfBirth, calcDate],
          cache
        ),
      },
      {
        label: "Month Lung Relationship",
        content: await derive.monthLungRelationship(
          [dateOfBirth, calcDate],
          cache
        ),
      }
    );

    sectionFive.push(
      {
        label: "Client Day Sign",
        content: await derive.day(dateOfBirth, cache),
      },
      {
        label: "Client Day Srog",
        content: await derive.dayLifeForce(dateOfBirth, cache),
      },
      {
        label: "Client Day Lue",
        content: await derive.dayBody(dateOfBirth, cache),
      },
      {
        label: "Client Day Wang",
        content: await derive.dayPower(dateOfBirth, cache),
      },
      {
        label: "Client Day Lung",
        content: await derive.dayLuck(dateOfBirth, cache),
      },
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
      {
        label: "Date Day Lung",
        content: await derive.dayLuck(calcDate, cache),
      },
      {
        label: "Day Srog Relationship",
        content: await derive.daySrogRelationship(
          [dateOfBirth, calcDate],
          cache
        ),
      },
      {
        label: "Day Lue Relationship",
        content: await derive.dayLueRelationship(
          [dateOfBirth, calcDate],
          cache
        ),
      },
      {
        label: "Day Wang Relationship",
        content: await derive.dayWangRelationship(
          [dateOfBirth, calcDate],
          cache
        ),
      },
      {
        label: "Day Lung Relationship",
        content: await derive.dayLungRelationship(
          [dateOfBirth, calcDate],
          cache
        ),
      }
    );

    sectionSix.push(
      {
        label: "Client Hour Sign",
        content: await derive.hour([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Client Hour Srog",
        content: await derive.hourLifeForce([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Client Hour Lue",
        content: await derive.hourBody([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Client Hour Wang",
        content: await derive.hourPower([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Client Hour Lung",
        content: await derive.hourLuck([timeOfBirth, dateOfBirth], cache),
      },
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
      },
      {
        label: "Hour Srog Relationship",
        content: await derive.hourSrogRelationship(
          [timeOfBirth, dateOfBirth],
          [calcTime, calcDate],
          cache
        ),
      },
      {
        label: "Hour Lue Relationship",
        content: await derive.hourLueRelationship(
          [timeOfBirth, dateOfBirth],
          [calcTime, calcDate],
          cache
        ),
      },
      {
        label: "Hour Wang Relationship",
        content: await derive.hourWangRelationship(
          [timeOfBirth, dateOfBirth],
          [calcTime, calcDate],
          cache
        ),
      },
      {
        label: "Hour Lung Relationship",
        content: await derive.hourLungRelationship(
          [timeOfBirth, dateOfBirth],
          [calcTime, calcDate],
          cache
        ),
      }
    );

    sectionSeven.push(
      {
        label: "Client Day Mewa",
        content: await derive.dayMewa(dateOfBirth, cache),
      },
      {
        label: "Client Day Parkha",
        content: await derive.dayParkha(dateOfBirth, cache),
      },
      {
        label: "Date Day Mewa",
        content: await derive.dayMewa(calcDate, cache),
      },
      {
        label: "Date Day Parkha",
        content: await derive.dayParkha(calcDate, cache),
      }
    );

    sectionEight.push(
      { label: "Best Day", content: await derive.bestDay(dateOfBirth, cache) },
      { label: "Good Day", content: await derive.goodDay(dateOfBirth, cache) },
      { label: "Worst Day", content: await derive.worstDay(dateOfBirth, cache) }
    );
    sectionNine.push(
      { label: "Basis", content: await derive.basis(dateOfBirth, cache) },
      { label: "Power", content: await derive.power(dateOfBirth, cache) },
      { label: "Success", content: await derive.success(dateOfBirth, cache) },
      { label: "Obstacle", content: await derive.obstacle(dateOfBirth, cache) },
      {
        label: "Disturbance",
        content: await derive.disturbance(dateOfBirth, cache),
      },
      { label: "Enemy", content: await derive.enemy(dateOfBirth, cache) }
    );
    sectionTen.push(
      { label: "Lue Star", content: await derive.lueStar(dateOfBirth, cache) },
      {
        label: "Srog Star",
        content: await derive.srogStar(dateOfBirth, cache),
      },
      {
        label: "Wang Star",
        content: await derive.wangStar(dateOfBirth, cache),
      },
      { label: "Kek Star", content: await derive.kekStar(dateOfBirth, cache) },
      {
        label: "Demon Star",
        content: await derive.demonStar(dateOfBirth, cache),
      },
      {
        label: "Destruction Star",
        content: await derive.destructionStar(dateOfBirth, cache),
      }
    );

    report.push(sectionOne);
    report.push(sectionTwo);
    report.push(sectionThree);
    report.push(sectionFour);
    report.push(sectionFive);
    report.push(sectionSix);
    report.push(sectionSeven);
    report.push(sectionEight);
    report.push(sectionNine);
    report.push(sectionTen);

    return report;
  }
}
