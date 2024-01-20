import prisma from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject("fax_history", {
  fields: (t) => ({
    id: t.field({
      type: "BigInt",
      resolve: (faxHistory) => Number(faxHistory.id),
    }),
    reservation_product: t.relation("reservation_product"),
    reservationProductID: t.field({
      type: "BigInt",
      resolve: (faxHistory) => Number(faxHistory.reservation_product_id),
    }),
    name: t.field({
      type: "String",
      nullable: true,
      resolve: (faxHistory) => faxHistory.name,
    }),
    createdAt: t.field({
      type: "DateTime",
      resolve: (faxHistory) => faxHistory.created_at,
    }),
  }),
});

builder.mutationField("createFaxHistory", (t) =>
  t.prismaField({
    type: "fax_history",
    args: {
      reservationProductId: t.arg.id(),
      name: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.fax_history.create({
        ...query,
        data: {
          reservation_product_id: Number(_args.reservationProductId),
          name: _args.name,
          created_at: new Date(Date.now()).toISOString(),
        },
      });
      return result;
    },
  })
);
