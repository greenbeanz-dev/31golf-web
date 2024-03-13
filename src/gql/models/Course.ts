import prisma from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject("course", {
  fields: (t) => ({
    id: t.field({
      type: "BigInt",
      resolve: (course) => Number(course.id),
    }),
    address: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.address,
    }),
    createdAt: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (course) => course.created_at,
    }),
    fax: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.fax,
    }),
    name: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.name,
    }),
    partnerName: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.partner_name,
    }),
    phone: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.phone,
    }),
    updatedAt: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (course) => course.updated_at,
    }),
    category1: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.category_1,
    }),
    category2: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.category_2,
    }),
    category3: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.category_3,
    }),
    priceCheck: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.price_check,
    }),
    contact: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.contact,
    }),
    reservationCheck: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.reservation_check,
    }),
    confirmCheck: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.confirm_check,
    }),
    memo: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.memo,
    }),
  }),
});

builder.queryField("courseList", (t) =>
  t.prismaConnection({
    type: "course",
    cursor: "id",
    args: {
      name: t.arg.string(),
      address: t.arg.string(),
      category1: t.arg.string(),
      category2: t.arg.string(),
      category3: t.arg.string(),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      return prisma.course.findMany({
        ...query,
        where: {
          AND: [
            _args.name
              ? {
                  name: {
                    contains: _args.name,
                  },
                }
              : {},
            _args.address
              ? {
                  address: {
                    contains: _args.address,
                  },
                }
              : {},
            _args.category1
              ? {
                  category_1: {
                    contains: _args.category1,
                  },
                }
              : {},
            _args.category2
              ? {
                  category_2: {
                    contains: _args.category2,
                  },
                }
              : {},
            _args.category3
              ? {
                  category_3: {
                    contains: _args.category3,
                  },
                }
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

builder.mutationField("createCourse", (t) =>
  t.prismaField({
    type: "course",
    args: {
      name: t.arg.string(),
      address: t.arg.string(),
      fax: t.arg.string(),
      partnerName: t.arg.string(),
      phone: t.arg.string(),
      category1: t.arg.string(),
      category2: t.arg.string(),
      category3: t.arg.string(),
      priceCheck: t.arg.string(),
      contact: t.arg.string(),
      reservationCheck: t.arg.string(),
      confirmCheck: t.arg.string(),
      memo: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.course.create({
        ...query,
        data: {
          name: _args.name,
          address: _args.address,
          fax: _args.fax,
          partner_name: _args.partnerName,
          phone: _args.phone,
          category_1: _args.category1,
          category_2: _args.category2,
          category_3: _args.category3,
          price_check: _args.priceCheck,
          contact: _args.contact,
          reservation_check: _args.reservationCheck,
          confirm_check: _args.confirmCheck,
          memo: _args.memo,
          created_at: new Date(Date.now()).toISOString(),
          updated_at: new Date(Date.now()).toISOString(),
        },
      });
      return result;
    },
  })
);

builder.mutationField("updateCourseById", (t) =>
  t.prismaField({
    type: "course",
    args: {
      id: t.arg.id(),
      name: t.arg.string(),
      address: t.arg.string(),
      fax: t.arg.string(),
      partnerName: t.arg.string(),
      phone: t.arg.string(),
      category1: t.arg.string(),
      category2: t.arg.string(),
      category3: t.arg.string(),
      priceCheck: t.arg.string(),
      contact: t.arg.string(),
      reservationCheck: t.arg.string(),
      confirmCheck: t.arg.string(),
      memo: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.course.update({
        where: {
          id: Number(_args.id),
        },
        data: {
          name: _args.name,
          address: _args.address,
          fax: _args.fax,
          partner_name: _args.partnerName,
          phone: _args.phone,
          category_1: _args.category1,
          category_2: _args.category2,
          category_3: _args.category3,
          price_check: _args.priceCheck,
          contact: _args.contact,
          reservation_check: _args.reservationCheck,
          confirm_check: _args.confirmCheck,
          memo: _args.memo,
          updated_at: new Date(Date.now()).toISOString(),
        },
      });
      return result;
    },
  })
);

builder.mutationField("deleteCourseById", (t) =>
  t.prismaField({
    type: "course",
    args: {
      id: t.arg.id({
        required: true,
      }),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.course.delete({
        where: {
          id: Number(_args.id),
        },
      });
      return result;
    },
  })
);
