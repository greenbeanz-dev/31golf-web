import gqlClient from "@/gql/gqlClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { SavingsAccountListInfinityQuery } from "./crud";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

const useSavingsAccountInfiniteQuery = () => {
  const name = useSavingsAccountInfiniteQueryBody((state) => state.name);
  const amount = useSavingsAccountInfiniteQueryBody((state) => state.amount);
  const type = useSavingsAccountInfiniteQueryBody((state) => state.type);
  const memo = useSavingsAccountInfiniteQueryBody((state) => state.memo);
  const reservationId = useSavingsAccountInfiniteQueryBody(
    (state) => state.reservationId
  );
  const size = useSavingsAccountInfiniteQueryBody((state) => state.size);

  const requestBody = {
    name: name,
    amount: amount,
    type: type,
    memo: memo,
    reservationId: reservationId,
  };

  return useInfiniteQuery({
    queryKey: [
      "savingsAccountList",
      name,
      amount,
      type,
      memo,
      reservationId,
      size,
    ],
    refetchInterval: 30000,
    queryFn: async ({
      pageParam = {
        first: size,
        ...requestBody,
      },
    }) => await gqlClient.request(SavingsAccountListInfinityQuery, pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.savingsAccountList.pageInfo.hasNextPage) return false;
      return {
        after: lastPage.savingsAccountList.pageInfo.endCursor,
        ...requestBody,
      };
    },
  });
};

export default useSavingsAccountInfiniteQuery;

type State = {
  size: number;
  name: string;
  amount: number;
  type: string;
  memo: string;
  reservationId?: number;
};

type Actions = {
  changeName: (name: State["name"]) => void;
  changeAmount: (amount: State["amount"]) => void;
  changeType: (type: State["type"]) => void;
  changeMemo: (memo: State["memo"]) => void;
  changeReservationId: (reservationId: State["reservationId"]) => void;
  changeSize: (size: State["size"]) => void;
  reset: () => void;
};

const initialState: State = {
  size: 10,
  name: "",
  amount: 0,
  type: "",
  memo: "",
  reservationId: undefined,
};

export const useSavingsAccountInfiniteQueryBody = create(
  immer<State & Actions>((set) => ({
    ...initialState,
    changeName: (name) => {
      set((state) => {
        state.name = name;
      });
    },
    changeAmount: (amount) => {
      set((state) => {
        state.amount = amount;
      });
    },
    changeType: (type) => {
      set((state) => {
        state.type = type;
      });
    },
    changeMemo: (memo) => {
      set((state) => {
        state.memo = memo;
      });
    },
    changeReservationId: (reservationId) => {
      set((state) => {
        state.reservationId = reservationId;
      });
    },
    changeSize: (size) => {
      set((state) => {
        state.size = size;
      });
    },
    reset: () => set(initialState),
  }))
);
