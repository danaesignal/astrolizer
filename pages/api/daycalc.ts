// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Natal, NatalRequest } from "../../shared/tools/buildReport/natal";
import {
  DayCalc,
  DayCalcRequest,
} from "../../shared/tools/buildReport/dayCalc";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);
  const { dateOfBirth, motherYearOfBirth, timeOfBirth, calcDate, calcTime } =
    body;

  const natalReportRequest: NatalRequest = {
    dateOfBirth,
    timeOfBirth,
    motherYearOfBirth,
  };

  const dayCalcReportRequest: DayCalcRequest = {
    dateOfBirth,
    timeOfBirth,
    motherYearOfBirth,
    calcDate,
    calcTime,
  };

  try {
    const natalReport = new Natal(natalReportRequest);
    const dayCalcReport = new DayCalc(dayCalcReportRequest);
    const natalReportJSON = natalReport.generateReport();
    const dayCalcReportJSON = dayCalcReport.generateReport();
    res.status(200).send({
      code: 200,
      message: "Request was successful",
      payload: {
        natal: natalReportJSON,
        dayCalc: dayCalcReportJSON,
      },
    });
  } catch {
    res.status(400).send({
      code: 400,
      message:
        "Malformed or improper request. Please check your input and try again.",
      payload: {
        natal: natalReportRequest,
        dayCalc: dayCalcReportRequest,
      },
    });
  }
}
