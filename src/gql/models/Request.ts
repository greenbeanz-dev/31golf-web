import prisma from "../../lib/prisma";
import { builder } from "../builder";

builder.prismaObject("request", {
  fields: (t) => ({
    id: t.field({
      type: "BigInt",
      resolve: (request) => Number(request.id),
    }),
    createdAt: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (request) => request.created_at,
    }),
    dateArrival: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (request) => request.date_arrival,
    }),
    dateDeparture: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (request) => request.date_departure,
    }),
    memo: t.field({
      type: "String",
      nullable: true,
      resolve: (request) => request.memo,
    }),
    numPeople: t.field({
      type: "Int",
      nullable: true,
      resolve: (request) => request.num_people,
    }),
    numTeam: t.field({
      type: "Int",
      nullable: true,
      resolve: (request) => request.num_team,
    }),
    requestContent: t.field({
      type: "String",
      nullable: true,
      resolve: (request) => request.request_content,
    }),
    updatedAt: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (request) => request.updated_at,
    }),
    customerId: t.field({
      type: "BigInt",
      nullable: true,
      resolve: (request) => Number(request.customer_id),
    }),
    customer: t.relation("customer"),
    isReservation: t.field({
      type: "Boolean",
      nullable: true,
      resolve: (request) => request.is_reservation,
    }),
    isCanceled: t.field({
      type: "Boolean",
      nullable: true,
      resolve: (request) => request.is_canceled,
    }),
    dateOperation: t.field({
      type: "String",
      nullable: true,
      resolve: (request) => request.date_operation,
    }),
    golfCourse: t.field({
      type: "String",
      nullable: true,
      resolve: (request) => request.golf_course,
    }),
    rowStyle: t.field({
      type: "String",
      nullable: true,
      resolve: (request) => request.row_style,
    }),
    isWeb: t.field({
      type: "Boolean",
      nullable: true,
      resolve: (request) => request.is_web,
    }),
  }),
});

builder.queryField("requestList", (t) =>
  t.prismaConnection({
    type: "request",
    cursor: "id",
    args: {
      createdAt: t.arg.string(),
      dateArrival: t.arg.string(),
      memo: t.arg.string(),
      numPeople: t.arg.int(),
      numTeam: t.arg.int(),
      customerName: t.arg.string(),
      customerPhone: t.arg.string(),
      requestContent: t.arg.string(),
      dateOperation: t.arg.string(),
      golfCourse: t.arg.string(),
      rowStyle: t.arg.string(),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      const request = prisma.request.findMany({
        ...query,
        orderBy: {
          id: "desc",
        },
      });
      return request;
    },
  })
);

builder.queryField("requestById", (t) =>
  t.prismaField({
    type: "request",
    args: {
      id: t.arg.id(),
    },
    resolve: async (query, _parent, _args, _ctx, _info): Promise<any> => {
      const { id } = _args;
      const request = await prisma.request.findUnique({
        ...query,
        where: {
          id: Number(id),
        },
      });
      console.log("request", request);
      return request;
    },
  })
);

builder.mutationField("createRequest", (t) =>
  t.prismaField({
    type: "request",
    args: {
      dateArrival: t.arg.string(),
      dateDeparture: t.arg.string(),
      memo: t.arg.string(),
      numPeople: t.arg.int(),
      numTeam: t.arg.int(),
      requestContent: t.arg.string(),
      customerId: t.arg.int(),
      isReservation: t.arg.boolean(),
      isCanceled: t.arg.boolean(),
      dateOperation: t.arg.string(),
      golfCourse: t.arg.string(),
      isWeb: t.arg.boolean(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.request.create({
        ...query,
        data: {
          date_arrival: _args.dateArrival,
          date_departure: _args.dateDeparture,
          memo: _args.memo,
          num_people: _args.numPeople,
          num_team: _args.numTeam,
          request_content: _args.requestContent,
          customer_id: _args.customerId,
          is_reservation: _args.isReservation,
          is_canceled: _args.isCanceled,
          date_operation: _args.dateOperation,
          golf_course: _args.golfCourse,
          created_at: new Date(Date.now()).toISOString(),
          updated_at: new Date(Date.now()).toISOString(),
          is_web: _args.isWeb,
        },
      });

      return result;
    },
  })
);

builder.mutationField("updateRequestById", (t) =>
  t.prismaField({
    type: "request",
    args: {
      id: t.arg.id(),
      dateArrival: t.arg.string(),
      dateDeparture: t.arg.string(),
      memo: t.arg.string(),
      numPeople: t.arg.int(),
      numTeam: t.arg.int(),
      requestContent: t.arg.string(),
      customerId: t.arg.int(),
      isReservation: t.arg.boolean(),
      isCanceled: t.arg.boolean(),
      dateOperation: t.arg.string(),
      golfCourse: t.arg.string(),
      rowStyle: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.request.update({
        where: {
          id: Number(_args.id),
        },
        data: {
          date_arrival: _args.dateArrival,
          date_departure: _args.dateDeparture,
          memo: _args.memo,
          num_people: _args.numPeople,
          num_team: _args.numTeam,
          request_content: _args.requestContent,
          customer_id: _args.customerId,
          is_reservation: _args.isReservation,
          is_canceled: _args.isCanceled,
          date_operation: _args.dateOperation,
          golf_course: _args.golfCourse,
          updated_at: new Date(Date.now()).toISOString(),
          row_style: _args.rowStyle,
        },
      });
      return result;
    },
  })
);

builder.mutationField("deleteRequestById", (t) =>
  t.prismaField({
    type: "request",
    args: {
      id: t.arg.id({
        required: true,
      }),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const deletedRequest = await prisma.request.delete({
        where: {
          id: Number(_args.id),
        },
      });
      return deletedRequest;
    },
  })
);
