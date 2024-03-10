import prisma from "../../lib/prisma";
import { conditionWithStartDateAndEndDate } from "../../utils/datetime/conditionWithStartDateAndEndDate";
import { builder } from "../builder";

builder.prismaObject("reservation", {
  fields: (t) => ({
    id: t.field({
      type: "BigInt",
      resolve: (reservation) => Number(reservation.id),
    }),
    createdAt: t.field({
      type: "DateTime",
      resolve: (reservation) => reservation.created_at,
    }),
    dateDeparture: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (reservation) => reservation.date_departure,
    }),
    memo: t.field({
      type: "String",
      nullable: true,
      resolve: (reservation) => reservation.memo,
    }),
    numPeople: t.field({
      type: "Int",
      nullable: true,
      resolve: (reservation) => reservation.num_people,
    }),
    numTeam: t.field({
      type: "Int",
      nullable: true,
      resolve: (reservation) => reservation.num_team,
    }),
    status: t.field({
      type: "String",
      nullable: true,
      resolve: (reservation) => reservation.status,
    }),
    updatedAt: t.field({
      type: "DateTime",
      resolve: (reservation) => reservation.updated_at,
    }),
    customer: t.relation("customer", {
      nullable: true,
    }),
    manager: t.relation("manager", {
      nullable: true,
    }),
    product: t.relation("product", {
      nullable: true,
    }),
    noteCheckout: t.field({
      type: "String",
      nullable: true,
      resolve: (reservation) => reservation.note_checkout,
    }),
    doneReceipt: t.field({
      type: "Boolean",
      nullable: true,
      resolve: (reservation) => reservation.done_receipt,
    }),
    doneInvoice: t.field({
      type: "Boolean",
      nullable: true,
      resolve: (reservation) => reservation.done_invoice,
    }),
    isCard: t.field({
      type: "Boolean",
      nullable: true,
      resolve: (reservation) => reservation.is_card,
    }),
    priceCustom: t.field({
      type: "Float",
      nullable: true,
      resolve: (reservation) => reservation.price_custom,
    }),
    costCustom: t.field({
      type: "Float",
      nullable: true,
      resolve: (reservation) => reservation.cost_custom,
    }),
    priceAddon: t.field({
      type: "Float",
      nullable: true,
      resolve: (reservation) => reservation.price_addon,
    }),
    priceAddonSub: t.field({
      type: "Float",
      nullable: true,
      resolve: (reservation) => reservation.price_addon_sub,
    }),
    priceAddonMemo: t.field({
      type: "String",
      nullable: true,
      resolve: (reservation) => reservation.price_addon_memo,
    }),
    priceAddonSubMemo: t.field({
      type: "String",
      nullable: true,
      resolve: (reservation) => reservation.price_addon_sub_memo,
    }),
    daysDay: t.field({
      type: "Int",
      nullable: true,
      resolve: (reservation) => reservation.days_day,
    }),
    daysNight: t.field({
      type: "Int",
      nullable: true,
      resolve: (reservation) => reservation.days_night,
    }),
    smsReservation: t.field({
      type: "String",
      nullable: true,
      resolve: (reservation) => reservation.sms_reservation,
    }),
    smsReservationSub: t.field({
      type: "String",
      nullable: true,
      resolve: (reservation) => reservation.sms_reservation_sub,
    }),
    smsConfirmation: t.field({
      type: "String",
      nullable: true,
      resolve: (reservation) => reservation.sms_confirmation,
    }),
    smsCheckout: t.field({
      type: "String",
      nullable: true,
      resolve: (reservation) => reservation.sms_checkout,
    }),
  }),
});

builder.queryField("reservationList", (t) =>
  t.prismaConnection({
    type: "reservation",
    cursor: "id",
    args: {
      customerName: t.arg.string(),
      customerPhone: t.arg.string(),
      productName: t.arg.string(),
      memo: t.arg.string(),
      reservationStatusList: t.arg.stringList(),
      managerId: t.arg.id(),
      dateDepartureStartAt: t.arg.string(),
      dateDepartureEndAt: t.arg.string(),
      createdAtStartAt: t.arg.string(),
      createdAtEndAt: t.arg.string(),
      sortColumn: t.arg.string(),
      sortType: t.arg.string(),
    },
    resolve: (query, _parent, _args, _ctx: any, _info) => {
      const dateDepartureCondition = conditionWithStartDateAndEndDate(
        _args.dateDepartureStartAt,
        _args.dateDepartureEndAt
      );
      const createdAtCondition = conditionWithStartDateAndEndDate(
        _args.createdAtStartAt,
        _args.createdAtEndAt
      );

      return prisma.reservation.findMany({
        ...query,
        where: {
          AND: [
            _args.customerName
              ? {
                  customer: {
                    name: {
                      contains: _args.customerName,
                    },
                  },
                }
              : {},
            _args.customerPhone
              ? {
                  customer: {
                    phone: {
                      contains: _args.customerPhone,
                    },
                  },
                }
              : {},
            dateDepartureCondition
              ? {
                  date_departure: dateDepartureCondition,
                }
              : {},
            createdAtCondition
              ? {
                  created_at: createdAtCondition,
                }
              : {},

            // 이까지는 괜찮음
            _args.productName
              ? {
                  product: {
                    name: {
                      contains: _args.productName,
                    },
                  },
                }
              : {},
            _args.managerId
              ? {
                  manager: {
                    id: Number(_args.managerId),
                  },
                }
              : {},
            _args.reservationStatusList &&
            _args.reservationStatusList.length > 0
              ? {
                  status: {
                    in: _args.reservationStatusList,
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

        orderBy: [
          {
            ...(!_args.sortColumn
              ? {
                  date_departure: "desc",
                }
              : {
                  [`${_args.sortColumn}`]:
                    _args.sortType === "desc" ? "desc" : "asc",
                }),
          },
          {
            id: "desc",
          },
        ],

        include: {
          customer: true,
          manager: true,
          product: true,
        },
      });
    },
  })
);

builder.queryField("reservationById", (t) =>
  t.prismaField({
    type: "reservation",
    args: {
      id: t.arg.id(),
    },
    resolve: async (query, _parent, _args, _ctx, _info): Promise<any> => {
      const { id } = _args;
      const reservation = await prisma.reservation.findUnique({
        ...query,
        where: { id: Number(id) },
      });
      console.log("reservation", reservation);
      return reservation;
    },
  })
);

builder.mutationField("createReservationByWeb", (t) =>
  t.prismaField({
    type: "reservation",
    args: {
      dateDeparture: t.arg.string(),
      numPeople: t.arg.int(),
      numTeam: t.arg.int(),
      status: t.arg.string(),
      customerId: t.arg.int(),
      productId: t.arg.int(),
      daysDay: t.arg.int(),
      daysNight: t.arg.int(),
      priceCustom: t.arg.float(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.reservation.create({
        ...query,
        data: {
          date_departure: _args.dateDeparture,
          num_people: _args.numPeople,
          num_team: _args.numTeam,
          status: null,
          customer_id: _args.customerId,
          product_id: _args.productId,
          days_day: _args.daysDay,
          days_night: _args.daysNight,
          price_custom: _args.priceCustom,
          created_at: new Date(Date.now()).toISOString(),
          updated_at: new Date(Date.now()).toISOString(),
        },
      });
      return result;
    },
  })
);

builder.mutationField("updateReservationById", (t) =>
  t.prismaField({
    type: "reservation",
    args: {
      id: t.arg.id(),
      dateDeparture: t.arg.string(),
      memo: t.arg.string(),
      numPeople: t.arg.int(),
      numTeam: t.arg.int(),
      status: t.arg.string(),
      customerId: t.arg.int(),
      managerId: t.arg.int(),
      productId: t.arg.int(),
      noteCheckout: t.arg.string(),
      doneReceipt: t.arg.boolean(),
      doneInvoice: t.arg.boolean(),
      isCard: t.arg.boolean(),
      priceCustom: t.arg.float(),
      costCustom: t.arg.float(),
      priceAddon: t.arg.float(),
      priceAddonSub: t.arg.float(),
      priceAddonMemo: t.arg.string(),
      priceAddonSubMemo: t.arg.string(),
      daysDay: t.arg.int(),
      daysNight: t.arg.int(),
      smsReservation: t.arg.string(),
      smsReservationSub: t.arg.string(),
      smsConfirmation: t.arg.string(),
      smsCheckout: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.reservation.update({
        where: {
          id: Number(_args.id),
        },
        data: {
          date_departure: _args.dateDeparture,
          memo: _args.memo,
          num_people: _args.numPeople,
          num_team: _args.numTeam,
          status: _args.status,
          customer_id: _args.customerId,
          manager_id: _args.managerId,
          product_id: _args.productId,
          note_checkout: _args.noteCheckout,
          done_receipt: _args.doneReceipt,
          done_invoice: _args.doneInvoice,
          is_card: _args.isCard,
          price_custom: _args.priceCustom,
          cost_custom: _args.costCustom,
          price_addon: _args.priceAddon,
          price_addon_sub: _args.priceAddonSub,
          price_addon_memo: _args.priceAddonMemo,
          price_addon_sub_memo: _args.priceAddonSubMemo,
          days_day: _args.daysDay,
          days_night: _args.daysNight,
          sms_reservation: _args.smsReservation,
          sms_reservation_sub: _args.smsReservationSub,
          sms_confirmation: _args.smsConfirmation,
          sms_checkout: _args.smsCheckout,
          updated_at: new Date(Date.now()).toISOString(),
        },
      });
      return result;
    },
  })
);

builder.mutationField("deleteReservationById", (t) =>
  t.prismaField({
    type: "reservation",
    args: {
      id: t.arg.id({
        required: true,
      }),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const deletedReservation = await prisma.reservation.delete({
        where: {
          id: Number(_args.id),
        },
      });
      return deletedReservation;
    },
  })
);
