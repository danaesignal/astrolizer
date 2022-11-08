// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Natal, NatalRequest } from "../../shared/tools/buildReport/natal";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const { dateOfBirth, motherYearOfBirth, timeOfBirth } = body;

  const reportRequest: NatalRequest = {
    dateOfBirth,
    timeOfBirth,
    motherYearOfBirth,
  };

  try {
    const report = new Natal(reportRequest);
    const reportJSON = await report.generateReport();
    res.status(200).send({
      code: 200,
      message: "Request was successful",
      payload: reportJSON,
    });
  } catch {
    res.status(400).send({
      code: 400,
      message:
        "Malformed or improper request. Please check your input and try again.",
      payload: reportRequest,
    });
  }
}
