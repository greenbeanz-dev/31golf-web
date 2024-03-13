import gqlClient from "@/gql/gqlClient";
import { ProductListInfinityQuery } from "@/gql/query/product/crud";
import { useInfiniteQuery } from "@tanstack/react-query";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useProductInfiniteQuery = () => {
  const dateDeparture = useProductInfiniteQueryBody(
    (state) => state.dateDeparture
  );
  const size = useProductInfiniteQueryBody((state) => state.size);
  const name = useProductInfiniteQueryBody((state) => state.name);
  const memo = useProductInfiniteQueryBody((state) => state.memo);
  const isActive = useProductInfiniteQueryBody((state) => state.isActive);
  const category1 = useProductInfiniteQueryBody((state) => state.category1);
  const category2 = useProductInfiniteQueryBody((state) => state.category2);
  const category3 = useProductInfiniteQueryBody((state) => state.category3);

  const requestBody = {
    dateDeparture: dateDeparture?.toISOString(),
    name: name,
    memo: memo,
    isActive: isActive,
    category1: category1 === "선택안함" ? undefined : category1,
    category2: category2,
    category3: category3,
  };

  return useInfiniteQuery({
    queryKey: [
      "productList",
      dateDeparture?.toISOString(),
      name,
      memo,
      isActive,
      category1,
      category2,
      category3,
    ],
    queryFn: async ({
      pageParam = {
        first: size,
        ...requestBody,
        isActive,
      },
    }) => await gqlClient.request(ProductListInfinityQuery, pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.productList.pageInfo.hasNextPage) return false;
      return {
        after: lastPage.productList.pageInfo.endCursor,
        ...requestBody,
      };
    },
  });
};

export default useProductInfiniteQuery;

type State = {
  dateDeparture: Date | undefined;
  name: string;
  memo: string;
  size: number;
  isActive: boolean | undefined;
  category1: string | undefined;
  category2: string | undefined;
  category3: string | undefined;
};

type Actions = {
  changeDateDeparture: (dateDeparture: State["dateDeparture"]) => void;
  changeName: (name: State["name"]) => void;
  changeMemo: (memo: State["memo"]) => void;
  changeSize: (size: State["size"]) => void;
  changeIsActive: (isActive: State["isActive"]) => void;
  changeCategory1: (category1: State["category1"]) => void;
  changeCategory2: (category2: State["category2"]) => void;
  changeCategory3: (category3: State["category3"]) => void;
  reset: () => void;
};

const initialState: State = {
  dateDeparture: undefined,
  name: "",
  memo: "",
  isActive: undefined,
  category1: undefined,
  category2: undefined,
  category3: undefined,
  size: 50,
};

export const useProductInfiniteQueryBody = create(
  immer<State & Actions>((set) => ({
    ...initialState,
    changeDateDeparture: (dateDeparture) => {
      set((state) => {
        state.dateDeparture = dateDeparture;
      });
    },
    changeName: (name) => {
      set((state) => {
        state.name = name;
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
    changeIsActive: (isActive) => {
      set((state) => {
        state.isActive = isActive;
      });
    },
    changeCategory1: (category1) => {
      set((state) => {
        state.category1 = category1;
      });
    },
    changeCategory2: (category2) => {
      set((state) => {
        state.category2 = category2;
      });
    },
    changeCategory3: (category3) => {
      set((state) => {
        state.category3 = category3;
      });
    },
    reset: () => set(initialState),
  }))
);
