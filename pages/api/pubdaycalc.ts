// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  PublicDayCalc,
  PublicDayCalcRequest,
} from "../../shared/tools/buildReport/publicDayCalc";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const { calcDate, calcTime } = body;

  const publicDayCalcReportRequest: PublicDayCalcRequest = {
    calcDate,
    calcTime,
  };

  try {
    const publicDayCalcReport = new PublicDayCalc(publicDayCalcReportRequest);
    const publicDayCalcReportJSON = await publicDayCalcReport.generateReport();
    res.status(200).send({
      code: 200,
      message: "Request was successful",
      payload: {
        dayCalc: publicDayCalcReportJSON,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      code: 400,
      message:
        "Malformed or improper request. Please check your input and try again.",
      payload: {
        request: publicDayCalcReportRequest,
      },
    });
  }
}
