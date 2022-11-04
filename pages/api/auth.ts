// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);

  try {
    // Process the login and return a JWT if successful
    res.status(200).send({
      code: 200,
      message: "",
      payload: undefined,
    });
  } catch {
    // Return an appropriate error message on unsuccessful login
    res.status(400).send({
      code: 400,
      message: "",
      payload: undefined,
    });
  }
}
