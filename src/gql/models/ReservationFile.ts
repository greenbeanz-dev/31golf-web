import prisma from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject("reservation_file", {
  fields: (t) => ({
    id: t.field({
      type: "BigInt",
      resolve: (reservationFile) => Number(reservationFile.id),
    }),
    reservation: t.relation("reservation"),
    reservationId: t.field({
      type: "BigInt",
      resolve: (reservationFile) => Number(reservationFile.reservation_id),
    }),
    name: t.field({
      type: "String",
      nullable: true,
      resolve: (reservationFile) => reservationFile.name,
    }),
    url: t.field({
      type: "String",
      nullable: true,
      resolve: (reservationFile) => reservationFile.url,
    }),
  }),
});

builder.queryField("fileListByReservationId", (t) =>
  t.prismaConnection({
    type: "reservation_file",
    cursor: "id",
    args: {
      reservationId: t.arg.id(),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      const result = prisma.reservation_file.findMany({
        ...query,
        where: {
          AND: [
            _args.reservationId
              ? {
                  reservation_id: Number(_args.reservationId),
                }
              : {},
          ],
        },
      });
      return result;
    },
  })
);

builder.mutationField("createReservationFile", (t) =>
  t.prismaField({
    type: "reservation_file",
    args: {
      reservationId: t.arg.id(),
      name: t.arg.string(),
      url: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx, _info): Promise<any> => {
      return prisma.reservation_file.create({
        ...query,
        data: {
          reservation_id: Number(_args.reservationId),
          name: _args.name,
          url: _args.url,
        },
      });
    },
  })
);

builder.mutationField("deleteReservationFile", (t) =>
  t.prismaField({
    type: "reservation_file",
    args: {
      id: t.arg.id(),
    },
    resolve: async (query, _parent, _args, _ctx, _info): Promise<any> => {
      return prisma.reservation_file.delete({
        ...query,
        where: {
          id: Number(_args.id),
        },
      });
    },
  })
);
