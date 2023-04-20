// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Authenticate } from "../../../shared/tools/authenticate";
import { getToken } from "next-auth/jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const { username, oldPassword, newPassword, newPasswordConfirm } = body;
  try {
    const token = await getToken({ req });
    if (token && token.role === "admin") {
      if (username && oldPassword && newPassword && newPasswordConfirm) {
        if (newPassword !== newPasswordConfirm) {
          res.status(400).send({
            code: 400,
            message:
              "Malformed or improper request. Please check your input and try again.",
            payload: {},
          });
        }
        console.log(username, oldPassword);
        const auth = new Authenticate({ username, password: oldPassword });
        let user = await auth.retrieveUser();

        if (user) {
          user.password = newPassword;
          user = await Authenticate.updateUser(user);

          res.status(200).send({
            code: 200,
            message: "Operation completed successfully.",
            payload: {
              username: user.username,
            },
          });
        }
      } else {
        res.status(400).send({
          code: 400,
          message:
            "Malformed or improper request. Please check your input and try again.",
          payload: {},
        });
      }
    } else {
      res.status(403).send({
        code: 403,
        message:
          "Insufficient authorization. Please ensure you are logged in on an account with the correct access level.",
        payload: { authLevel: token?.role },
      });
    }
  } catch (err) {
    console.log(err);
    let message =
      "Malformed or improper request. Please check your input and try again.";
    if (err instanceof Error) message = err.message;
    res.status(400).send({
      code: 400,
      message,
      payload: { username, oldPassword, newPassword, newPasswordConfirm },
    });
  }
}
