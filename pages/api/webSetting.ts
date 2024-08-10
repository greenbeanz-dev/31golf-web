import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

BigInt.prototype["toJSON"] = function () {
  return this.toString();
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const prisma = new PrismaClient();
      const allPopupList = await prisma.web_setting.findMany({
        where: {
          type: {
            in: ["POPUP", "BANNER_LEFT", "BANNER_MAIN"],
          },
        },
      });

      res.status(200).json(
        allPopupList.map((item) => {
          return {
            ...item,
            id: item.id.toString(),
            display_begin: item.display_begin?.toLocaleString(),
            display_end: item.display_end?.toLocaleDateString(),
          };
        })
      );
    } catch (e) {
      res.status(500).json({ statusCode: 500, message: (e as any).message });
    }
  }

  if (req.method === "POST") {
    try {
      const prisma = new PrismaClient();

      const { image, type, url, display_begin, display_end } = req.body;

      // delete other popup
      await prisma.web_setting.deleteMany({
        where: {
          type: type,
        },
      });

      const createdUser = await prisma.web_setting.create({
        data: {
          image,
          type,
          url,
          display_begin,
          display_end,
        },
      });

      res.status(200).json(createdUser);
    } catch (e) {
      res.status(500).json({ statusCode: 500, message: (e as any).message });
    }
  }

  if (req.method === "DELETE") {
    try {
      const params = req.query;
      const { id } = params;
      const prisma = new PrismaClient();
      const deletedItem = await prisma.web_setting.delete({
        where: {
          id: Number(id),
        },
      });

      res.status(200).json(deletedItem);
    } catch (e) {
      res.status(500).json({ statusCode: 500, message: (e as any).message });
    }
  }
}
