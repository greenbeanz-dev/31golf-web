import prisma from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject("message_history", {
  fields: (t) => ({
    id: t.field({
      type: "BigInt",
      resolve: (messageHistory) => Number(messageHistory.id),
    }),
    content: t.field({
      type: "String",
      nullable: true,
      resolve: (messageHistory) => messageHistory.content,
    }),
    type: t.field({
      type: "String",
      nullable: true,
      resolve: (messageHistory) => messageHistory.type,
    }),
    status: t.field({
      type: "String",
      nullable: true,
      resolve: (messageHistory) => messageHistory.status,
    }),
    sendDate: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (messageHistory) => messageHistory.send_date,
    }),
    reservationId: t.field({
      type: "BigInt",
      nullable: true,
      resolve: (messageHistory) => Number(messageHistory.reservation_id),
    }),
    // reservation: t.relation("reservation"),
  }),
});

builder.queryField("messageHistoryList", (t) =>
  t.prismaConnection({
    type: "message_history",
    cursor: "id",
    args: {
      reservationId: t.arg.id(),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      const messageHistory = prisma.message_history.findMany({
        ...query,
        where: {
          ...(_args.reservationId && {
            reservation_id: Number(_args.reservationId),
          }),
        },
      });
      return messageHistory;
    },
  })
);
