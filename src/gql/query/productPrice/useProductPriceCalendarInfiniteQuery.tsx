import gqlClient from "@/gql/gqlClient";
import { ProductPriceListInfinityQuery } from "@/gql/query/productPrice/crud";
import { useInfiniteQuery } from "@tanstack/react-query";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useProductPriceCalendarInfiniteQuery = () => {
  const productId = useProductPriceCalendarInfiniteQueryBody(
    (state) => state.productId
  );
  const date = useProductPriceCalendarInfiniteQueryBody((state) => state.date);
  const memo = useProductPriceCalendarInfiniteQueryBody((state) => state.memo);

  const month = date?.getMonth();
  const year = date?.getFullYear();

  const requestBody = {
    productId: productId ? Number(productId) : undefined,
    dateDeparture: date?.toISOString(),
    memo: memo,
  };

  return useInfiniteQuery({
    queryKey: ["productPriceList", productId, month, year, memo],
    queryFn: async ({
      pageParam = {
        first: 100,
        ...requestBody,
      },
    }) => await gqlClient.request(ProductPriceListInfinityQuery, pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.productPriceList.pageInfo.hasNextPage) return false;
      return {
        after: lastPage.productPriceList.pageInfo.endCursor,
        ...requestBody,
      };
    },
    cacheTime: 60000,
  });
};

export default useProductPriceCalendarInfiniteQuery;

type State = {
  productId: string;
  date: Date | undefined;
  memo: string;
  list: {
    title: string;
    start: Date;
    end: Date;
    extendedProps: {
      isOffDay: boolean;
      memo: string | null | undefined;
    };
  }[];
};

type Actions = {
  changeProductId: (productId: State["productId"]) => void;
  changeDate: (date: State["date"]) => void;
  changeMemo: (memo: State["memo"]) => void;
  changeList: (list: State["list"]) => void;
  reset: () => void;
};

const initialState: State = {
  productId: "",
  date: undefined,
  memo: "",
  list: [],
};

export const useProductPriceCalendarInfiniteQueryBody = create(
  immer<State & Actions>((set) => ({
    ...initialState,
    changeProductId: (productId) => {
      set((state) => {
        state.productId = productId;
      });
    },
    changeDate: (date) => {
      set((state) => {
        state.date = date;
      });
    },
    changeMemo: (memo) => {
      set((state) => {
        state.memo = memo;
      });
    },
    changeList: (list) => {
      set((state) => {
        state.list = list;
      });
    },
    reset: () => {
      set((state) => {
        state.productId = initialState.productId;
        state.date = initialState.date;
        state.memo = initialState.memo;
      });
    },
  }))
);
