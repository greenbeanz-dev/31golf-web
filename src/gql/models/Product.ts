import prisma from "../../lib/prisma";
import { conditionWithStartDateAndEndDate } from "../../utils/datetime/conditionWithStartDateAndEndDate";
import { builder } from "../builder";

builder.prismaObject("product", {
  fields: (t) => ({
    id: t.field({
      type: "BigInt",
      resolve: (product) => Number(product.id),
    }),
    commissionCompany: t.exposeString("commission_company", {
      nullable: true,
    }),
    cost: t.exposeFloat("cost", { nullable: true }),
    createdAt: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (product) => product.created_at,
    }),
    dateDeparture: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (product) => product.date_departure,
    }),
    isBlock: t.field({
      type: "Boolean",
      nullable: true,
      resolve: (product) => product.is_block,
    }),
    price: t.exposeFloat("price", { nullable: true }),
    updatedAt: t.field({
      type: "DateTime",
      nullable: true,
      resolve: (product) => product.updated_at,
    }),
    managerId: t.field({
      type: "BigInt",
      nullable: true,
      resolve: (product) => Number(product.manager_id),
    }),
    name: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.name,
    }),
    memo: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.memo,
    }),
    note: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.note,
    }),
    teeOff: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.tee_off,
    }),
    blockStatus: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.block_status,
    }),
    blockName: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.block_name,
    }),
    fax: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.fax,
    }),
    isActive: t.field({
      type: "Boolean",
      nullable: true,
      resolve: (product) => product.is_active,
    }),
    isWeb: t.field({
      type: "Boolean",
      nullable: true,
      resolve: (product) => product.is_web,
    }),
    isBest: t.field({
      type: "Boolean",
      nullable: true,
      resolve: (product) => product.is_best,
    }),
    isMain: t.field({
      type: "Boolean",
      nullable: true,
      resolve: (product) => product.is_main,
    }),
    courseId: t.field({
      type: "BigInt",
      nullable: true,
      resolve: (product) => Number(product.course_id),
    }),
    course: t.relation("course", {
      nullable: true,
    }),
    category1: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.category_1,
    }),
    category2: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.category_2,
    }),
    category3: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.category_3,
    }),
    memoNotice: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.memo_notice,
    }),
    memoManager: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.memo_manager,
    }),
    memoEtc: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.memo_etc,
    }),
    type: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.type,
    }),
    inclusives: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.inclusives,
    }),
    exclusives: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.exclusives,
    }),
    summary: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.summary,
    }),
    schedulePc: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.schedule_pc,
    }),
    benefit: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.benefit,
    }),
    notice: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.notice,
    }),
    caution: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.caution,
    }),
    scheduleTablePc: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.schedule_table_pc,
    }),
    courseAddress: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.course_address,
    }),
    cancellationPolicy: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.cancellation_policy,
    }),
    thumbnailImage: t.field({
      type: "String",
      nullable: true,
      resolve: (product) => product.thumbnail_image,
    }),
    sort: t.field({
      type: "BigInt",
      nullable: true,
      resolve: (product) => Number(product.sort),
    }),
  }),
});

builder.queryField("productList", (t) =>
  t.prismaConnection({
    type: "product",
    cursor: "id",
    args: {
      dateDeparture: t.arg.string(),
      name: t.arg.string(),
      memo: t.arg.string(),
      isActive: t.arg.boolean(),
      isWeb: t.arg.boolean(),
      isBest: t.arg.boolean(),
      isMain: t.arg.boolean(),
      courseId: t.arg.int(),
      category1: t.arg.string(),
      category2: t.arg.string(),
      category3: t.arg.string(),
      memoNotice: t.arg.string(),
      memoManager: t.arg.string(),
      memoEtc: t.arg.string(),
      isSortType: t.arg.string(),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      const dateDepartureCondition = conditionWithStartDateAndEndDate(
        _args.dateDeparture,
        _args.dateDeparture
      );

      const sortType =
        _args.isSortType !== "추천순"
          ? ({
              name: "asc",
            } as const)
          : ({
              sort: "asc",
            } as const);

      return prisma.product.findMany({
        ...query,
        where: {
          AND: [
            { is_block: false },
            { is_active: true },
            { is_web: true },
            // _args.isActive !== null && _args.isActive !== undefined
            //   ? { is_active: _args.isActive }
            //   : {},
            // _args.isWeb !== null && _args.isWeb !== undefined
            //   ? { is_web: _args.isWeb }
            //   : {},
            _args.isBest !== null && _args.isBest !== undefined
              ? { is_best: _args.isBest }
              : {},
            _args.isMain !== null && _args.isMain !== undefined
              ? { is_main: _args.isMain }
              : {},
            dateDepartureCondition
              ? {
                  date_departure: dateDepartureCondition,
                }
              : {},
            _args.name
              ? {
                  name: {
                    contains: _args.name,
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
            _args.courseId
              ? {
                  course_id: Number(_args.courseId),
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
            _args.memoNotice
              ? {
                  memo_notice: {
                    contains: _args.memoNotice,
                  },
                }
              : {},
            _args.memoManager
              ? {
                  memo_manager: {
                    contains: _args.memoManager,
                  },
                }
              : {},
            _args.memoEtc
              ? {
                  memo_etc: {
                    contains: _args.memoEtc,
                  },
                }
              : {},
          ],
        },
        orderBy: [
          {
            ...sortType,
          },
        ],
      });
    },
  })
);

builder.queryField("blockList", (t) =>
  t.prismaConnection({
    type: "product",
    cursor: "id",
    args: {
      dateDeparture: t.arg.string(),
      name: t.arg.string(),
      memo: t.arg.string(),
      note: t.arg.string(),
      teeOff: t.arg.string(),
      blockStatusList: t.arg.stringList(),
      blockName: t.arg.string(),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      const dateDepartureCondition = conditionWithStartDateAndEndDate(
        _args.dateDeparture,
        _args.dateDeparture
      );
      return prisma.product.findMany({
        ...query,
        where: {
          AND: [
            {
              is_block: true,
            },
            {
              date_departure: {
                gte: new Date().toISOString(),
              },
            },
            dateDepartureCondition
              ? {
                  date_departure: dateDepartureCondition,
                }
              : {},
            _args.name
              ? {
                  name: {
                    contains: _args.name,
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
            _args.note
              ? {
                  note: {
                    contains: _args.note,
                  },
                }
              : {},
            _args.teeOff
              ? {
                  tee_off: {
                    contains: _args.teeOff,
                  },
                }
              : {},

            _args.blockStatusList && _args.blockStatusList.length > 0
              ? {
                  block_status: {
                    in: _args.blockStatusList,
                  },
                }
              : {},
            _args.blockName
              ? {
                  block_name: {
                    contains: _args.blockName,
                  },
                }
              : {},
          ],
        },
        orderBy: {
          date_departure: "asc",
        },
      });
    },
  })
);

builder.queryField("productById", (t) =>
  t.prismaField({
    type: "product",
    args: {
      id: t.arg.id(),
    },
    resolve: (query, _parent, _args, _ctx, _info): any => {
      const { id } = _args;
      return prisma.product.findUnique({
        ...query,
        where: { id: Number(id) as any },
      });
    },
  })
);

builder.mutationField("createProduct", (t) =>
  t.prismaField({
    type: "product",
    args: {
      commissionCompany: t.arg.string(),
      cost: t.arg.float(),
      dateDeparture: t.arg.string(),
      isBlock: t.arg.boolean(),
      price: t.arg.float(),
      managerId: t.arg.int(),
      name: t.arg.string(),
      memo: t.arg.string(),
      note: t.arg.string(),
      teeOff: t.arg.string(),
      blockStatus: t.arg.string(),
      blockName: t.arg.string(),
      fax: t.arg.string(),
      isActive: t.arg.boolean(),
      isWeb: t.arg.boolean(),
      isBest: t.arg.boolean(),
      isMain: t.arg.boolean(),
      courseId: t.arg.int(),
      category1: t.arg.string(),
      category2: t.arg.string(),
      category3: t.arg.string(),
      memoNotice: t.arg.string(),
      memoManager: t.arg.string(),
      memoEtc: t.arg.string(),
      type: t.arg.string(),
      inclusives: t.arg.string(),
      exclusives: t.arg.string(),
      summary: t.arg.string(),
      schedulePc: t.arg.string(),
      benefit: t.arg.string(),
      notice: t.arg.string(),
      caution: t.arg.string(),
      scheduleTablePc: t.arg.string(),
      courseAddress: t.arg.string(),
      cancellationPolicy: t.arg.string(),
      thumbnailImage: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.product.create({
        ...query,
        data: {
          commission_company: _args.commissionCompany,
          cost: _args.cost,
          date_departure: _args.dateDeparture,
          is_block: _args.isBlock || false,
          price: _args.price,
          manager_id: _args.managerId,
          name: _args.name,
          memo: _args.memo,
          note: _args.note,
          tee_off: _args.teeOff,
          block_status: _args.blockStatus,
          block_name: _args.blockName,
          fax: _args.fax,
          is_active: _args.isActive || false,
          is_web: _args.isWeb || false,
          is_best: _args.isBest || false,
          course_id: _args.courseId,
          category_1: _args.category1,
          category_2: _args.category2,
          category_3: _args.category3,
          memo_notice: _args.memoNotice,
          memo_manager: _args.memoManager,
          memo_etc: _args.memoEtc,
          type: _args.type,
          inclusives: _args.inclusives,
          exclusives: _args.exclusives,
          summary: _args.summary,
          schedule_pc: _args.schedulePc,
          benefit: _args.benefit,
          notice: _args.notice,
          caution: _args.caution,
          schedule_table_pc: _args.scheduleTablePc,
          course_address: _args.courseAddress,
          cancellation_policy: _args.cancellationPolicy,
          thumbnail_image: _args.thumbnailImage,
          created_at: new Date(Date.now()).toISOString(),
          updated_at: new Date(Date.now()).toISOString(),
        },
      });
      return result;
    },
  })
);

builder.mutationField("updateProductById", (t) =>
  t.prismaField({
    type: "product",
    args: {
      id: t.arg.id(),
      commissionCompany: t.arg.string(),
      cost: t.arg.float(),
      dateDeparture: t.arg.string(),
      isBlock: t.arg.boolean(),
      price: t.arg.float(),
      managerId: t.arg.int(),
      name: t.arg.string(),
      memo: t.arg.string(),
      note: t.arg.string(),
      teeOff: t.arg.string(),
      blockStatus: t.arg.string(),
      blockName: t.arg.string(),
      fax: t.arg.string(),
      isActive: t.arg.boolean(),
      isWeb: t.arg.boolean(),
      isBest: t.arg.boolean(),
      isMain: t.arg.boolean(),
      courseId: t.arg.int(),
      category1: t.arg.string(),
      category2: t.arg.string(),
      category3: t.arg.string(),
      memoNotice: t.arg.string(),
      memoManager: t.arg.string(),
      memoEtc: t.arg.string(),
      type: t.arg.string(),
      inclusives: t.arg.string(),
      exclusives: t.arg.string(),
      summary: t.arg.string(),
      schedulePc: t.arg.string(),
      benefit: t.arg.string(),
      notice: t.arg.string(),
      caution: t.arg.string(),
      scheduleTablePc: t.arg.string(),
      courseAddress: t.arg.string(),
      cancellationPolicy: t.arg.string(),
      thumbnailImage: t.arg.string(),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const result = await prisma.product.update({
        where: {
          id: Number(_args.id),
        },
        data: {
          commission_company: _args.commissionCompany || "",
          cost: _args.cost || 0,
          date_departure: _args.dateDeparture,
          is_block: _args.isBlock || false,
          price: _args.price || 0,
          manager_id: _args.managerId,
          name: _args.name,
          memo: _args.memo,
          note: _args.note,
          tee_off: _args.teeOff,
          block_status: _args.blockStatus,
          block_name: _args.blockName,
          fax: _args.fax,
          is_active: _args.isActive,
          is_web: _args.isWeb,
          is_best: _args.isBest,
          is_main: _args.isMain,
          course_id: _args.courseId,
          category_1: _args.category1,
          category_2: _args.category2,
          category_3: _args.category3,
          memo_notice: _args.memoNotice,
          memo_manager: _args.memoManager,
          memo_etc: _args.memoEtc,
          type: _args.type,
          inclusives: _args.inclusives,
          exclusives: _args.exclusives,
          summary: _args.summary,
          schedule_pc: _args.schedulePc,
          benefit: _args.benefit,
          notice: _args.notice,
          caution: _args.caution,
          schedule_table_pc: _args.scheduleTablePc,
          course_address: _args.courseAddress,
          cancellation_policy: _args.cancellationPolicy,
          thumbnail_image: _args.thumbnailImage,
          updated_at: new Date(Date.now()).toISOString(),
        },
      });
      return result;
    },
  })
);

builder.mutationField("deleteProductById", (t) =>
  t.prismaField({
    type: "product",
    args: {
      id: t.arg.id({
        required: true,
      }),
    },
    resolve: async (query, _parent, _args, _ctx): Promise<any> => {
      const deletedProduct = await prisma.product.delete({
        where: {
          id: Number(_args.id),
        },
      });
      return deletedProduct;
    },
  })
);
