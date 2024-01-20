import prisma from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject("savings_account", {
  fields: (t) => ({
    id: t.field({
      type: "BigInt",
      resolve: (savingsAccount) => Number(savingsAccount.id),
    }),
    name: t.field({
      type: "String",
      nullable: true,
      resolve: (savingsAccount) => savingsAccount.name,
    }),
    amount: t.field({
      type: "Float",
      nullable: true,
      resolve: (savingsAccount) => Number(savingsAccount.amount),
    }),
    createdAt: t.field({
      type: "DateTime",
      resolve: (savingsAccount) => savingsAccount.created_at,
    }),
    type: t.field({
      type: "String",
      resolve: (savingsAccount) => savingsAccount?.type || "",
    }),
    account: t.field({
      type: "String",
      nullable: true,
      resolve: (savingsAccount) => savingsAccount.account,
    }),
    balance: t.field({
      type: "Float",
      nullable: true,
      resolve: (savingsAccount) => Number(savingsAccount.balance),
    }),
    memo: t.field({
      type: "String",
      nullable: true,
      resolve: (savingsAccount) => savingsAccount.memo,
    }),
    reservationId: t.field({
      type: "BigInt",
      nullable: true,
      resolve: (savingsAccount) => Number(savingsAccount.reservation_id),
    }),
    reservation: t.relation("reservation", {
      nullable: true,
    }),
  }),
});

builder.queryField("savingsAccountList", (t) =>
  t.prismaConnection({
    type: "savings_account",
    cursor: "id",
    args: {
      name: t.arg.string(),
      amount: t.arg.float(),
      type: t.arg.string(),
      memo: t.arg.string(),
      reservationId: t.arg.int(),
    },
    resolve: (query, _parent, _args, _ctx: any, _info) => {
      return prisma.savings_account.findMany({
        ...query,
        where: {
          AND: [
            _args.name ? { name: { contains: _args.name } } : {},
            _args.amount ? { amount: { equals: _args.amount } } : {},
            _args.type ? { type: { equals: _args.type } } : {},
            _args.memo ? { memo: { contains: _args.memo } } : {},
            _args.reservationId
              ? { reservation_id: Number(_args.reservationId) }
              : {},
          ],
        },
        orderBy: {
          id: "desc",
        },
      });
    },
  })
);

builder.mutationField("updateSavingsAccountById", (t) =>
  t.prismaField({
    type: "savings_account",
    args: {
      id: t.arg.id(),
      name: t.arg.string(),
      amount: t.arg.float(),
      type: t.arg.string(),
      memo: t.arg.string(),
      reservationId: t.arg.int(),
    },
    nullable: true,
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.savings_account.update({
        where: { id: Number(_args.id) },
        data: {
          name: _args.name || undefined,
          amount: _args.amount || undefined,
          type: _args.type || undefined,
          memo: _args.memo,
          reservation_id: Number(_args.reservationId),
        },
      });
      return result;
    },
  })
);
