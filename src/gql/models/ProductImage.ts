import prisma from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject("product_image", {
  fields: (t) => ({
    id: t.field({
      type: "BigInt",
      resolve: (productImage) => Number(productImage.id),
    }),
    product: t.relation("product"),
    productId: t.field({
      type: "BigInt",
      resolve: (productImage) => Number(productImage.product_id),
    }),
    name: t.field({
      type: "String",
      nullable: true,
      resolve: (productImage) => productImage.name,
    }),
    url: t.field({
      type: "String",
      nullable: true,
      resolve: (productImage) => productImage.url,
    }),
  }),
});

builder.queryField("imageListByProductId", (t) =>
  t.prismaConnection({
    type: "product_image",
    cursor: "id",
    args: {
      productId: t.arg.id(),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      const result = prisma.product_image.findMany({
        ...query,
        where: {
          AND: [
            _args.productId
              ? {
                  product_id: Number(_args.productId),
                }
              : {},
          ],
        },
      });
      return result;
    },
  })
);

builder.mutationField("createProductImage", (t) =>
  t.prismaField({
    type: "product_image",
    args: {
      productId: t.arg.id(),
      name: t.arg.string(),
      url: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx, _info): Promise<any> => {
      return prisma.product_image.create({
        ...query,
        data: {
          product_id: Number(_args.productId),
          name: _args.name,
          url: _args.url,
        },
      });
    },
  })
);

builder.mutationField("deleteProductImage", (t) =>
  t.prismaField({
    type: "product_image",
    args: {
      id: t.arg.id(),
    },
    resolve: async (query, _parent, _args, _ctx, _info): Promise<any> => {
      return prisma.product_image.delete({
        ...query,
        where: {
          id: Number(_args.id),
        },
      });
    },
  })
);
