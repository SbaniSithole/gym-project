import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  if (req.method === "GET") {
    const plans = await prisma.plans.findMany();

    return res.send(plans);
  } else if (req.method === "POST") {
    res.status(201).send("POST");
  }
}
