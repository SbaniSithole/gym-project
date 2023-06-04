import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  const { name, surname, email, password } = JSON.parse(req.body);

  const user = await prisma.users.findFirst({
    where: { email: email },
  });
  if (user !== null)
    return res.send({
      message: "User already exists",
      status: false,
      data: null,
    });

  // const hashPW = await bcrypt.hash(password, 10);
  // console.log(password);
  const newUser = await prisma.users.create({
    data: {
      name,
      surname,
      email,
      password,
    },
  });

  return res.send({ status: true, data: newUser });
}
