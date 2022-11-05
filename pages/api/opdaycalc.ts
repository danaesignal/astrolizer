// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Natal, NatalRequest } from "../../shared/tools/buildReport/natal";
import {
  OperatorDayCalc,
  OperatorDayCalcRequest,
} from "../../shared/tools/buildReport/operatorDayCalc";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const { dateOfBirth, motherYearOfBirth, timeOfBirth, calcDate, calcTime } =
    body;

  const natalReportRequest: NatalRequest = {
    dateOfBirth,
    timeOfBirth,
    motherYearOfBirth,
  };

  const operatorDayCalcReportRequest: OperatorDayCalcRequest = {
    dateOfBirth,
    timeOfBirth,
    motherYearOfBirth,
    calcDate,
    calcTime,
  };

  try {
    const natalReport = new Natal(natalReportRequest);
    const operatorDayCalcReport = new OperatorDayCalc(
      operatorDayCalcReportRequest
    );
    const natalReportJSON = await natalReport.generateReport();
    const operatorDayCalcReportJSON =
      await operatorDayCalcReport.generateReport();
    res.status(200).send({
      code: 200,
      message: "Request was successful",
      payload: {
        natal: natalReportJSON,
        dayCalc: operatorDayCalcReportJSON,
      },
    });
  } catch (error) {
    res.status(400).send({
      code: 400,
      message:
        "Malformed or improper request. Please check your input and try again.",
      payload: {
        natalRequest: natalReportRequest,
        requestRequest: operatorDayCalcReportRequest,
      },
    });
  }
}
