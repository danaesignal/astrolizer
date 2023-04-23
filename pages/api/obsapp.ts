// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ObsApp, ObsAppRequest } from "../../shared/tools/buildReport/obsApp";
import { getToken } from "next-auth/jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const {
    dateOfBirth,
    motherYearOfBirth,
    timeOfBirth,
    calcDate,
    calcTime,
    gender,
  } = body;

  const reportRequest: ObsAppRequest = {
    dateOfBirth,
    motherYearOfBirth,
    timeOfBirth,
    calcDate,
    calcTime,
    gender,
  };

  try {
    console.log(reportRequest);
    const report = new ObsApp(reportRequest);
    const reportJSON = await report.generateReport();
    res.status(200).send({
      code: 200,
      message: "Request was successful",
      payload: reportJSON,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      code: 400,
      message:
        "Malformed or improper request. Please check your input and try again.",
      payload: reportRequest,
    });
  }
}
