// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { users as db } from "../../db/definitions/users";
import { users, upsertRequest } from "../../shared/interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Process the login and return a JWT if successful
    const prospectiveUpsert: upsertRequest<users> = {
      record: { user: "danae josephine williams" },
      position: { query: "dj", range: "user" },
    };
    await db.upsert(prospectiveUpsert);
    const data = await db.findAll();

    res.status(200).send({
      code: 200,
      message: "Success",
      payload: data,
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
