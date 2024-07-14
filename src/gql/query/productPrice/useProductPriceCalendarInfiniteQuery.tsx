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
  const startDate = useProductPriceCalendarInfiniteQueryBody(
    (state) => state.startDate
  );
  const endDate = useProductPriceCalendarInfiniteQueryBody(
    (state) => state.endDate
  );
  const memo = useProductPriceCalendarInfiniteQueryBody((state) => state.memo);

  const requestBody = {
    productId: productId ? Number(productId) : undefined,
    dateDeparture: date?.toISOString(),
    memo: memo,
    startDate: startDate,
    endDate: endDate,
  };

  return useInfiniteQuery({
    queryKey: [
      "productPriceList",
      "calendar",
      productId,
      date?.toISOString(),
      memo,
      startDate,
      endDate,
    ],
    queryFn: async ({
      pageParam = {
        first: 30,
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
  });
};

export default useProductPriceCalendarInfiniteQuery;

type State = {
  productId: string;
  date: Date | undefined;
  startDate: Date | undefined;
  endDate: Date | undefined;
  memo: string;
};

type Actions = {
  changeProductId: (productId: State["productId"]) => void;
  changeDate: (date: State["date"]) => void;
  changeStartDate: (date: State["startDate"]) => void;
  changeEndDate: (date: State["endDate"]) => void;
  changeMemo: (memo: State["memo"]) => void;

  reset: () => void;
};

const initialState: State = {
  productId: "",
  date: undefined,
  startDate: undefined,
  endDate: undefined,
  memo: "",
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
    changeStartDate: (date) => {
      set((state) => {
        state.startDate = date;
      });
    },
    changeEndDate: (date) => {
      set((state) => {
        state.endDate = date;
      });
    },
    changeMemo: (memo) => {
      set((state) => {
        state.memo = memo;
      });
    },
    reset: () => {
      set((state) => {
        state.productId = initialState.productId;
        state.date = initialState.date;
        state.memo = initialState.memo;
        state.startDate = initialState.startDate;
        state.endDate = initialState.endDate;
      });
    },
  }))
);
