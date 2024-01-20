import prisma from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject("transaction", {
  fields: (t) => ({
    id: t.field({
      type: "BigInt",
      resolve: (transaction) => Number(transaction.id),
    }),
    createdAt: t.field({
      type: "DateTime",
      resolve: (transaction) => transaction.created_at,
    }),
    reservationId: t.field({
      type: "BigInt",
      nullable: true,
      resolve: (transaction) => Number(transaction.reservation_id),
    }),
    type: t.field({
      type: "String",
      resolve: (transaction) => transaction?.type || "",
    }),
    method: t.field({
      type: "String",
      resolve: (transaction) => transaction?.method || "",
    }),
    amount: t.exposeFloat("amount"),
    account: t.field({
      type: "String",
      nullable: true,
      resolve: (transaction) => transaction.account,
    }),
    memo: t.field({
      type: "String",
      nullable: true,
      resolve: (transaction) => transaction.memo,
    }),
    savingsAccountId: t.field({
      type: "BigInt",
      nullable: true,
      resolve: (transaction) => Number(transaction.savings_account_id),
    }),
  }),
});

builder.queryField("transactionList", (t) =>
  t.prismaConnection({
    type: "transaction",
    cursor: "id",
    args: {
      reservationId: t.arg.id(),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      const transaction = prisma.transaction.findMany({
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
      return transaction;
    },
  })
);

builder.mutationField("CreateTransaction", (t) =>
  t.prismaField({
    type: "transaction",
    args: {
      account: t.arg.string(),
      memo: t.arg.string(),
      method: t.arg.string(),
      type: t.arg.string(),
      reservationId: t.arg.int(),
      amount: t.arg.float(),
      savingsAccountId: t.arg.int(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.transaction.create({
        ...query,
        data: {
          account: _args.account,
          amount: Number(_args.amount),
          reservation_id: _args.reservationId,
          memo: _args.memo,
          method: _args.method,
          type: _args.type,
          savings_account_id: _args.savingsAccountId,
          created_at: new Date(Date.now()).toISOString(),
        },
      });
      return result;
    },
  })
);

builder.mutationField("deleteTransactionById", (t) =>
  t.prismaField({
    type: "transaction",
    args: {
      id: t.arg.id({
        required: true,
      }),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const deletedTransaction = await prisma.transaction.delete({
        where: {
          id: Number(_args.id),
        },
      });
      return deletedTransaction;
    },
  })
);
