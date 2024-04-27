import { AuthOptions } from "next-auth";
import {  getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize() {
        return null;
      },
    })
  ]
}

export async function loginIsRequiredServer() {
  const session = await getServerSession(nextAuthConfig);
  if (!session) return redirect("/login");
}