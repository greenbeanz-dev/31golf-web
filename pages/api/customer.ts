import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const prisma = new PrismaClient();
      const { id } = req.query;

      if (!id) {
        return res
          .status(400)
          .json({ statusCode: 400, message: "ID parameter is missing" });
      }

      const user = await prisma.customer.findUnique({
        where: {
          id: Number(id.toString()),
        },
      });
      if (!user) {
        return res
          .status(404)
          .json({ statusCode: 404, message: "User not found" });
      }

      return res.status(200).json({
        id: Number(user.id.toString()),
        name: user.name,
        email: user.email,
        phone: user.phone,
        verification_code: user.verification_code,
      });
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ statusCode: 500, message: "Internal Server Error" });
    }
  }
}
