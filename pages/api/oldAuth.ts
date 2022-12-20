// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { users as db } from "../../db/definitions/users";
import { users, upsertRequest } from "../../shared/interfaces";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Process the login and return a JWT if successful
    const jwtBody = {
      accountId: "users-account-id",
    };
    const secret = "token-secret"; // use something more secure
    const options = {
      expiresIn: "1hr",
    };
    const token = jwt.sign(jwtBody, secret, options);

    res.send({
      statusCode: 200,
      body: {
        message: "Authentication succeeded",
      },
      headers: {
        "Set-Cookie": `accessToken=${token}; HttpOnly; Max-Age=86400; Path=/`,
      },
    });
  } catch (err) {
    // Return an appropriate error message on unsuccessful login
    res.status(400).send({
      code: 400,
      message: "Something went wrong.",
      payload: undefined,
    });
  }
}
