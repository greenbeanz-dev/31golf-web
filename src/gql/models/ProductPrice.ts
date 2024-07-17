import prisma from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject("product_price", {
  fields: (t) => ({
    id: t.field({
      type: "BigInt",
      resolve: (productPrice) => Number(productPrice.id),
    }),
    productId: t.field({
      type: "BigInt",
      nullable: true,
      resolve: (productPrice) => Number(productPrice.product_id),
    }),
    product: t.relation("product"),
    date: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (productPrice) => productPrice.date,
    }),
    price: t.exposeFloat("price", { nullable: true }),
    cost: t.exposeFloat("cost", { nullable: true }),
    memo: t.field({
      type: "String",
      nullable: true,
      resolve: (productPrice) => productPrice.memo,
    }),
  }),
});

builder.queryField("productPriceList", (t) =>
  t.prismaConnection({
    type: "product_price",
    cursor: "id",
    args: {
      productId: t.arg.int(),
    },
    defaultSize: 100,
    maxSize: 1000,
    resolve: (query, _parent, _args, _ctx, _info) => {
      return prisma.product_price.findMany({
        ...query,
        where: {
          product_id: Number(_args.productId),
        },
      });
    },
  })
);

builder.mutationField("createProductPrice", (t) =>
  t.prismaField({
    type: "product_price",
    args: {
      productId: t.arg.int(),
      date: t.arg.string(),
      price: t.arg.float(),
      cost: t.arg.float(),
      memo: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.product_price.create({
        ...query,
        data: {
          product_id: Number(_args.productId),
          date: _args.date,
          price: _args.price,
          cost: _args.cost,
          memo: _args.memo,
        },
      });
      return result;
    },
  })
);

builder.mutationField("updateProductPrice", (t) =>
  t.prismaField({
    type: "product_price",
    args: {
      id: t.arg.id(),
      date: t.arg.string(),
      price: t.arg.float(),
      cost: t.arg.float(),
      memo: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.product_price.update({
        ...query,
        where: {
          id: Number(_args.id),
        },
        data: {
          date: _args.date,
          price: _args.price,
          cost: _args.cost,
          memo: _args.memo,
        },
      });
      return result;
    },
  })
);

builder.mutationField("deleteProductPrice", (t) =>
  t.prismaField({
    type: "product_price",
    args: {
      id: t.arg.id({
        required: true,
      }),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.product_price.delete({
        ...query,
        where: {
          id: Number(_args.id),
        },
      });
      return result;
    },
  })
);
