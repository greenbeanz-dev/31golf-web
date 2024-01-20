import gqlClient from "@/gql/gqlClient";
import { CustomerListInfinityQuery } from "@/gql/query/customer/crud";
import { useInfiniteQuery } from "@tanstack/react-query";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useCustomerInfiniteQuery = () => {
  const name = useCustomerInfiniteQueryBody((state) => state.name);
  const phone = useCustomerInfiniteQueryBody((state) => state.phone);
  const email = useCustomerInfiniteQueryBody((state) => state.email);
  const memo = useCustomerInfiniteQueryBody((state) => state.memo);
  const size = useCustomerInfiniteQueryBody((state) => state.size);

  const requestBody = {
    name: name,
    phone: phone,
    email: email,
    memo: memo,
  };

  return useInfiniteQuery({
    queryKey: ["customerList", name, phone, email, memo, size],
    queryFn: async ({
      pageParam = {
        first: size,
        ...requestBody,
      },
    }) => await gqlClient.request(CustomerListInfinityQuery, pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.customerList.pageInfo.hasNextPage) return false;
      return {
        after: lastPage.customerList.pageInfo.endCursor,
        ...requestBody,
      };
    },
  });
};

export default useCustomerInfiniteQuery;

type State = {
  size: number;
  name: string;
  phone: string;
  email: string;
  memo: string;
};

type Actions = {
  changeName: (name: State["name"]) => void;
  changePhone: (phone: State["phone"]) => void;
  changeEmail: (email: State["email"]) => void;
  changeMemo: (memo: State["memo"]) => void;
  changeSize: (size: State["size"]) => void;
  reset: () => void;
};

const initialState: State = {
  size: 20,
  name: "",
  phone: "",
  email: "",
  memo: "",
};

export const useCustomerInfiniteQueryBody = create(
  immer<State & Actions>((set) => ({
    ...initialState,
    changeName: (name) => {
      set((state) => {
        state.name = name;
      });
    },
    changePhone: (phone) => {
      set((state) => {
        state.phone = phone;
      });
    },
    changeEmail: (email) => {
      set((state) => {
        state.email = email;
      });
    },
    changeMemo: (memo) => {
      set((state) => {
        state.memo = memo;
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
