import prisma from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject("manager", {
  fields: (t) => ({
    id: t.field({
      type: "BigInt",
      resolve: (manager) => Number(manager.id),
    }),
    name: t.field({
      type: "String",
      resolve: (manager) => manager.name,
    }),
    phone: t.field({
      type: "String",
      nullable: true,
      resolve: (manager) => manager.phone,
    }),
    email: t.field({
      type: "String",
      resolve: (manager) => manager.email,
    }),
    role: t.field({
      type: "String",
      nullable: true,
      resolve: (manager) => manager.role,
    }),
  }),
});

builder.queryField("managerList", (t) =>
  t.prismaConnection({
    type: "manager",
    cursor: "id",
    resolve: (query, _parent, _args, _ctx, _info) => {
      const result = prisma.manager.findMany({ ...query });
      return result;
    },
  })
);

builder.queryField("managerById", (t) =>
  t.prismaField({
    type: "manager",
    args: {
      id: t.arg.id(),
    },
    resolve: (query, _parent, _args, _ctx, _info): any => {
      const { id } = _args;

      return prisma.manager.findUnique({
        ...query,
        where: { id: Number(id) as any },
      });
    },
  })
);

builder.mutationField("createManager", (t) =>
  t.prismaField({
    type: "manager",
    args: {
      name: t.arg.string(),
      phone: t.arg.string(),
      email: t.arg.string(),
      role: t.arg.string(),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      const { name, phone, email, role } = _args;

      return prisma.manager.create({
        ...query,
        data: {
          name: name || "",
          phone: phone || "",
          email: email || "",
          role: role || "GUEST",
          password: "",
        },
      });
    },
  })
);

builder.mutationField("updateManagerById", (t) =>
  t.prismaField({
    type: "manager",
    args: {
      id: t.arg.id(),
      name: t.arg.string(),
      phone: t.arg.string(),
      email: t.arg.string(),
      role: t.arg.string(),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      const { id, name, phone, email, role } = _args;

      return prisma.manager.update({
        ...query,
        where: { id: Number(id) as any },
        data: {
          name: name || "",
          phone: phone || "",
          email: email || "",
          role: role || "GUEST",
          password: "",
        },
      });
    },
  })
);
