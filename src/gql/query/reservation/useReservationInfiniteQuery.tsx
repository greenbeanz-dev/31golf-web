import gqlClient from "@/gql/gqlClient";
import { ReservationListInfinityQuery } from "@/gql/query/reservation/crud";
import { useInfiniteQuery } from "@tanstack/react-query";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ReservationColumnName } from "../../../lib/prisma";

const useReservationInfiniteQuery = () => {
  const customerName = useReservationInfiniteQueryBody(
    (state) => state.customerName
  );

  const customerPhone = useReservationInfiniteQueryBody(
    (state) => state.customerPhone
  );

  const productName = useReservationInfiniteQueryBody(
    (state) => state.productName
  );

  const memo = useReservationInfiniteQueryBody((state) => state.memo);
  const reservationStatus = useReservationInfiniteQueryBody(
    (state) => state.reservationStatus
  );

  const dateDepartureStartAt = useReservationInfiniteQueryBody(
    (state) => state.dateDepartureStartAt
  );
  const dateDepartureEndAt = useReservationInfiniteQueryBody(
    (state) => state.dateDepartureEndAt
  );
  const [createdAtStartAt, createdAtEndAt] = useReservationInfiniteQueryBody(
    (state) => state.createdAt
  );

  const sortColumn = useReservationInfiniteQueryBody(
    (state) => state.sortColumn
  );

  const sortType = useReservationInfiniteQueryBody((state) => state.sortType);

  const managerId = useReservationInfiniteQueryBody((state) => state.managerId);

  const doneReceipt = useReservationInfiniteQueryBody(
    (state) => state.doneReceipt
  );

  const doneInvoice = useReservationInfiniteQueryBody(
    (state) => state.doneInvoice
  );

  const isCard = useReservationInfiniteQueryBody((state) => state.isCard);

  const isWeb = useReservationInfiniteQueryBody((state) => state.isWeb);

  const requestBody = {
    customerName: customerName,
    customerPhone: customerPhone,
    memo: memo,
    productName: productName,
    reservationStatusList: reservationStatus,
    managerId: Number(managerId),
    dateDepartureStartAt: dateDepartureStartAt?.toISOString(),
    dateDepartureEndAt: dateDepartureEndAt?.toISOString(),
    createdAtStartAt: createdAtStartAt?.toISOString(),
    createdAtEndAt: createdAtEndAt?.toISOString(),
    sortColumn: sortColumn,
    sortType: sortType,
    doneReceipt: doneReceipt,
    doneInvoice: doneInvoice,
    isCard: isCard,
    isWeb: isWeb,
  };

  return useInfiniteQuery({
    queryKey: ["reservationList", ...Object.values(requestBody)],

    queryFn: async ({
      pageParam = {
        first: 50,
        ...requestBody,
      },
    }) => await gqlClient.request(ReservationListInfinityQuery, pageParam),
    getNextPageParam: (lastPage) => {
      if (!lastPage.reservationList.pageInfo.hasNextPage) return false;
      return {
        after: lastPage.reservationList.pageInfo.endCursor,
        ...requestBody,
      };
    },
  });
};

export default useReservationInfiniteQuery;

type State = {
  managerId: number | undefined;
  customerName: string;
  customerPhone: string;
  productName: string;
  memo: string;
  reservationStatus: string[];
  dateDepartureStartAt: Date | undefined;
  dateDepartureEndAt: Date | undefined;
  createdAt: [Date | undefined, Date | undefined];
  sortColumn?: ReservationColumnName;
  sortType?: "asc" | "desc" | null;
  doneReceipt?: boolean;
  doneInvoice?: boolean;
  isCard?: boolean;
  isWeb?: boolean;
};

type Actions = {
  changeManagerId: (managerId: State["managerId"]) => void;
  changeCustomerName: (name: State["customerName"]) => void;
  changeCustomerPhone: (phone: State["customerPhone"]) => void;
  changeProductName: (name: State["productName"]) => void;
  changeMemo: (memo: State["memo"]) => void;
  changeReservationStatus: (status: State["reservationStatus"]) => void;
  changeDateDepartureStartAt: (date: State["dateDepartureStartAt"]) => void;
  changeDateDepartureEndAt: (date: State["dateDepartureEndAt"]) => void;
  changeCreatedAt: (type: "start" | "end", data: Date | undefined) => void;
  changeSortColumn: (sortColumn: State["sortColumn"]) => void;
  changeSortType: (sortType: State["sortType"]) => void;
  changeDoneReceipt: (doneReceipt: State["doneReceipt"]) => void;
  changeDoneInvoice: (doneInvoice: State["doneInvoice"]) => void;
  changeIsCard: (isCard: State["isCard"]) => void;
  changeIsWeb: (isWeb: State["isWeb"]) => void;
  reset: () => void;
};

const initialState: State = {
  managerId: undefined,
  customerName: "",
  customerPhone: "",
  productName: "",
  memo: "",
  reservationStatus: [],
  dateDepartureStartAt: undefined,
  dateDepartureEndAt: undefined,
  createdAt: [undefined, undefined],
  sortColumn: undefined,
  sortType: null,
  doneReceipt: undefined,
  doneInvoice: undefined,
  isCard: undefined,
  isWeb: undefined,
};

export const useReservationInfiniteQueryBody = create(
  immer<State & Actions>((set) => ({
    ...initialState,
    changeManagerId: (managerId) => {
      set((state) => {
        state.managerId = managerId;
      });
    },
    changeCustomerName: (name) => {
      set((state) => {
        state.customerName = name;
      });
    },
    changeCustomerPhone: (phone) => {
      set((state) => {
        state.customerPhone = phone;
      });
    },
    changeProductName: (name) => {
      set((state) => {
        state.productName = name;
      });
    },
    changeMemo: (memo) => {
      set((state) => {
        state.memo = memo;
      });
    },
    changeReservationStatus: (reservationStatus) => {
      set((state) => {
        state.reservationStatus = reservationStatus;
      });
    },
    changeDateDepartureStartAt: (date) => {
      set((state) => {
        state.dateDepartureStartAt = date;
      });
    },
    changeDateDepartureEndAt: (date) => {
      set((state) => {
        state.dateDepartureEndAt = date;
      });
    },
    changeCreatedAt: (type, date) => {
      set((state) => {
        if (type === "start") {
          state.createdAt[0] = date;
        }
        if (type === "end") {
          state.createdAt[1] = date;
        }
      });
    },
    changeSortColumn: (sortColumn) => {
      set((state) => {
        state.sortColumn = sortColumn;
      });
    },
    changeSortType: (sortType) => {
      set((state) => {
        state.sortType = sortType;
      });
    },
    changeDoneReceipt: (doneReceipt) => {
      set((state) => {
        state.doneReceipt = doneReceipt;
      });
    },
    changeDoneInvoice: (doneInvoice) => {
      set((state) => {
        state.doneInvoice = doneInvoice;
      });
    },
    changeIsCard: (isCard) => {
      set((state) => {
        state.isCard = isCard;
      });
    },
    changeIsWeb: (isWeb) => {
      set((state) => {
        state.isWeb = isWeb;
      });
    },
    reset: () => set(initialState),
  }))
);
