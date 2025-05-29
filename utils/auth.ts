import { getSession } from "next-auth/react";
import { NextApiRequest } from "next";

export async function ensureAdmin(req: NextApiRequest) {
  const session = await getSession({ req });
  if (!session || session.user.role !== "admin") {
    throw new Error("Unauthorized");
  }
  return session;
}
