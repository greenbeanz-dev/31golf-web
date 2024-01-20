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
    city: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.city,
    }),
    country: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.country,
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
    state: t.field({
      type: "String",
      nullable: true,
      resolve: (course) => course.state,
    }),
    updatedAt: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (course) => course.updated_at,
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
      city: t.arg.string(),
      country: t.arg.string(),
      fax: t.arg.string(),
      partnerName: t.arg.string(),
      phone: t.arg.string(),
      state: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.course.create({
        ...query,
        data: {
          name: _args.name,
          address: _args.address,
          city: _args.city,
          country: _args.country,
          fax: _args.fax,
          partner_name: _args.partnerName,
          phone: _args.phone,
          state: _args.state,
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
      city: t.arg.string(),
      country: t.arg.string(),
      fax: t.arg.string(),
      partnerName: t.arg.string(),
      phone: t.arg.string(),
      state: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.course.update({
        where: {
          id: Number(_args.id),
        },
        data: {
          name: _args.name,
          address: _args.address,
          city: _args.city,
          country: _args.country,
          fax: _args.fax,
          partner_name: _args.partnerName,
          phone: _args.phone,
          state: _args.state,
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
