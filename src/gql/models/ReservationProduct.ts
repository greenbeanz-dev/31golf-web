import prisma from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject("reservation_product", {
  fields: (t) => ({
    id: t.field({
      type: "BigInt",
      resolve: (reservationProduct) => Number(reservationProduct.id),
    }),
    product: t.relation("product"),
    reservation: t.relation("reservation"),
    reservationId: t.field({
      type: "BigInt",
      resolve: (reservationProduct) =>
        Number(reservationProduct.reservation_id),
    }),
    productId: t.field({
      type: "BigInt",
      resolve: (reservationProduct) => Number(reservationProduct.product_id),
    }),
    faxType: t.field({
      type: "String",
      nullable: true,
      resolve: (reservationProduct) => reservationProduct.fax_type,
    }),
    row01: t.field({
      type: "String",
      nullable: true,
      resolve: (reservationProduct) => reservationProduct.row_01,
    }),
    row02: t.field({
      type: "String",
      nullable: true,
      resolve: (reservationProduct) => reservationProduct.row_02,
    }),
    row03: t.field({
      type: "String",
      nullable: true,
      resolve: (reservationProduct) => reservationProduct.row_03,
    }),
    row04: t.field({
      type: "String",
      nullable: true,
      resolve: (reservationProduct) => reservationProduct.row_04,
    }),
    row05: t.field({
      type: "String",
      nullable: true,
      resolve: (reservationProduct) => reservationProduct.row_05,
    }),
    row06: t.field({
      type: "String",
      nullable: true,
      resolve: (reservationProduct) => reservationProduct.row_06,
    }),
    row07: t.field({
      type: "String",
      nullable: true,
      resolve: (reservationProduct) => reservationProduct.row_07,
    }),
    row08: t.field({
      type: "String",
      nullable: true,
      resolve: (reservationProduct) => reservationProduct.row_08,
    }),
    row09: t.field({
      type: "String",
      nullable: true,
      resolve: (reservationProduct) => reservationProduct.row_09,
    }),
    row10: t.field({
      type: "String",
      nullable: true,
      resolve: (reservationProduct) => reservationProduct.row_10,
    }),
    row11: t.field({
      type: "String",
      nullable: true,
      resolve: (reservationProduct) => reservationProduct.row_11,
    }),
  }),
});

builder.queryField("reservationProductList", (t) =>
  t.prismaConnection({
    type: "reservation_product",
    cursor: "id",
    args: {
      reservationId: t.arg.id(),
      productId: t.arg.id(),
    },
    resolve: async (query, _parent, _args, _ctx, _info): Promise<any> => {
      return prisma.reservation_product.findMany({
        ...query,
        where: {
          AND: [
            _args.reservationId
              ? {
                  reservation_id: Number(_args.reservationId),
                }
              : {},
            _args.productId
              ? {
                  product_id: Number(_args.productId),
                }
              : {},
          ],
        },
      });
    },
  })
);

builder.queryField("productListByReservationId", (t) =>
  t.prismaConnection({
    type: "reservation_product",
    cursor: "id",
    args: {
      reservationId: t.arg.id(),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      const result = prisma.reservation_product.findMany({
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

builder.mutationField("createReservationProduct", (t) =>
  t.prismaField({
    type: "reservation_product",
    args: {
      reservationId: t.arg.id(),
      productId: t.arg.id(),
    },
    resolve: async (query, _parent, _args, _ctx, _info): Promise<any> => {
      return prisma.reservation_product.create({
        ...query,
        data: {
          reservation_id: Number(_args.reservationId),
          product_id: Number(_args.productId),
        },
      });
    },
  })
);

builder.mutationField("updateReservationProduct", (t) =>
  t.prismaField({
    type: "reservation_product",
    args: {
      id: t.arg.id(),
      faxType: t.arg.string(),
      row01: t.arg.string(),
      row02: t.arg.string(),
      row03: t.arg.string(),
      row04: t.arg.string(),
      row05: t.arg.string(),
      row06: t.arg.string(),
      row07: t.arg.string(),
      row08: t.arg.string(),
      row09: t.arg.string(),
      row10: t.arg.string(),
      row11: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.reservation_product.update({
        ...query,
        where: {
          id: Number(_args.id),
        },
        data: {
          fax_type: _args.faxType,
          row_01: _args.row01,
          row_02: _args.row02,
          row_03: _args.row03,
          row_04: _args.row04,
          row_05: _args.row05,
          row_06: _args.row06,
          row_07: _args.row07,
          row_08: _args.row08,
          row_09: _args.row09,
          row_10: _args.row10,
          row_11: _args.row11,
        },
      });
      return result;
    },
  })
);

builder.mutationField("deleteReservationProduct", (t) =>
  t.prismaField({
    type: "reservation_product",
    args: {
      id: t.arg.id(),
    },
    resolve: async (query, _parent, _args, _ctx, _info): Promise<any> => {
      return prisma.reservation_product.delete({
        ...query,
        where: {
          id: Number(_args.id),
        },
      });
    },
  })
);

builder.queryField("reservationProductById", (t) =>
  t.prismaField({
    type: "reservation_product",
    args: {
      id: t.arg.id(),
    },
    resolve: (query, _parent, _args, _ctx, _info): any => {
      const { id } = _args;
      return prisma.reservation_product.findUnique({
        ...query,
        where: { id: Number(id) as any },
      });
    },
  })
);
