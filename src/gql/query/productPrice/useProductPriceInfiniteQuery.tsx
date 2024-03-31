import gqlClient from "@/gql/gqlClient";
import { ProductPriceListInfinityQuery } from "@/gql/query/productPrice/crud";
import { useInfiniteQuery } from "@tanstack/react-query";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useProductPriceInfiniteQuery = () => {
  const productId = useProductPriceInfiniteQueryBody(
    (state) => state.productId
  );
  const date = useProductPriceInfiniteQueryBody((state) => state.date);
  const memo = useProductPriceInfiniteQueryBody((state) => state.memo);

  const requestBody = {
    productId: "2553",
    dateDeparture: date?.toISOString(),
    memo: memo,
  };

  return useInfiniteQuery({
    queryKey: ["productPriceList", "2553", date?.toISOString(), memo],
    queryFn: async ({
      pageParam = {
        first: 10,
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

export default useProductPriceInfiniteQuery;

type State = {
  productId: string;
  date: Date | undefined;
  memo: string;
};

type Actions = {
  changeProductId: (productId: State["productId"]) => void;
  changeDate: (date: State["date"]) => void;
  changeMemo: (memo: State["memo"]) => void;
  reset: () => void;
};

const initialState: State = {
  productId: "",
  date: undefined,
  memo: "",
};

export const useProductPriceInfiniteQueryBody = create(
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
    reset: () => {
      set((state) => {
        state.productId = initialState.productId;
        state.date = initialState.date;
        state.memo = initialState.memo;
      });
    },
  }))
);
