import prisma from "../../lib/prisma";
import { findCustomerByPhone } from "../../utils/customer/findCustomerByPhone";
import normalizePhoneDigits from "../../utils/format/normalizePhoneDigits";
import { builder } from "../builder";

builder.prismaObject("customer", {
  fields: (t) => ({
    id: t.field({
      type: "BigInt",
      resolve: (customer) => Number(customer.id),
    }),
    createdAt: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (customer) => customer.created_at,
    }),
    updatedAt: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (customer) => customer.updated_at,
    }),
    name: t.field({
      type: "String",
      resolve: (customer) => customer.name,
    }),
    phone: t.field({
      type: "String",
      nullable: true,
      resolve: (customer) => customer.phone,
    }),
    email: t.field({
      type: "String",
      nullable: true,
      resolve: (customer) => customer.email,
    }),
    memo: t.field({
      type: "String",
      nullable: true,
      resolve: (customer) => customer.memo,
    }),
    fax: t.field({
      type: "String",
      nullable: true,
      resolve: (customer) => customer.fax,
    }),
    isVillain: t.field({
      type: "Boolean",
      nullable: true,
      resolve: (customer) => customer.is_villain,
    }),
    provider: t.field({
      type: "String",
      nullable: true,
      resolve: (customer) => customer.provider,
    }),
  }),
});

builder.queryField("customerList", (t) =>
  t.prismaConnection({
    type: "customer",
    cursor: "id",
    args: {
      name: t.arg.string(),
      phone: t.arg.string(),
      email: t.arg.string(),
      memo: t.arg.string(),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      return prisma.customer.findMany({
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
            _args.phone
              ? {
                  phone: {
                    contains: _args.phone,
                  },
                }
              : {},
            _args.email
              ? {
                  email: {
                    contains: _args.email,
                  },
                }
              : {},
            _args.memo
              ? {
                  memo: {
                    contains: _args.memo,
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

builder.mutationField("createCustomer", (t) =>
  t.prismaField({
    type: "customer",
    args: {
      name: t.arg.string(),
      phone: t.arg.string(),
      email: t.arg.string(),
      memo: t.arg.string(),
      fax: t.arg.string(),
      isVillain: t.arg.boolean(),
      provider: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.customer.create({
        ...query,
        data: {
          name: _args.name || "",
          phone: _args.phone,
          email: _args.email,
          memo: _args.memo,
          fax: _args.fax,
          is_villain: _args.isVillain,
          provider: _args.provider,
          created_at: new Date(Date.now()).toISOString(),
          updated_at: new Date(Date.now()).toISOString(),
        },
      });
      return result;
    },
  })
);

builder.mutationField("findOrCreateCustomer", (t) =>
  t.prismaField({
    type: "customer",
    args: {
      name: t.arg.string(),
      phone: t.arg.string(),
      email: t.arg.string(),
      memo: t.arg.string(),
      fax: t.arg.string(),
      isVillain: t.arg.boolean(),
      provider: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const normalizedPhone = normalizePhoneDigits(_args.phone ?? "");
      const existing = normalizedPhone
        ? await findCustomerByPhone(normalizedPhone)
        : null;

      if (existing) {
        return existing;
      }

      return prisma.customer.create({
        ...query,
        data: {
          name: _args.name || "",
          phone: normalizedPhone || _args.phone,
          email: _args.email,
          memo: _args.memo,
          fax: _args.fax,
          is_villain: _args.isVillain,
          provider: _args.provider,
          created_at: new Date(Date.now()).toISOString(),
          updated_at: new Date(Date.now()).toISOString(),
        },
      });
    },
  })
);

builder.mutationField("updateCustomerById", (t) =>
  t.prismaField({
    type: "customer",
    args: {
      id: t.arg.id(),
      name: t.arg.string(),
      phone: t.arg.string(),
      email: t.arg.string(),
      memo: t.arg.string(),
      fax: t.arg.string(),
      isVillain: t.arg.boolean(),
      provider: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.customer.update({
        ...query,
        where: {
          id: Number(_args.id),
        },
        data: {
          name: _args.name || "",
          phone: _args.phone,
          email: _args.email,
          memo: _args.memo,
          fax: _args.fax,
          is_villain: _args.isVillain,
          updated_at: new Date(Date.now()).toISOString(),
          provider: _args.provider,
        },
      });
      return result;
    },
  })
);

builder.mutationField("deleteCustomerById", (t) =>
  t.prismaField({
    type: "customer",
    args: {
      id: t.arg.id({
        required: true,
      }),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const deletedCustomer = await prisma.customer.delete({
        where: {
          id: Number(_args.id),
        },
      });
      return deletedCustomer;
    },
  })
);

builder.queryField("customerById", (t) =>
  t.prismaField({
    type: "customer",
    args: {
      id: t.arg.id(),
    },
    resolve: async (query, _parent, _args, _ctx, _info): Promise<any> => {
      const { id } = _args;
      const customer = await prisma.customer.findUnique({
        ...query,
        where: { id: Number(id) },
      });
      return customer;
    },
  })
);
