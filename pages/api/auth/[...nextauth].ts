import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { Authenticate } from "../../../shared/tools/authenticate";
import { JWT } from "next-auth/jwt";
import { NextAuthOptions, Session, User } from "next-auth";
import { users } from "../../../shared/interfaces";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const username = credentials?.username;
        const password = credentials?.password;

        const auth = new Authenticate({ username, password });

        const user = await auth.retrieveUser();

        if (user) {
          return {
            id: user.uid,
            userName: user.username,
            name: user.displayName,
            role: user.role,
          };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
