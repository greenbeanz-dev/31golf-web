import gqlClient from "@/gql/gqlClient";
import { ProductListInfinityQuery } from "@/gql/query/product/crud";
import type { ProductSortType } from "@/types/productSort";
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
  const isMain = useProductInfiniteQueryBody((state) => state.isMain);
  const category1 = useProductInfiniteQueryBody((state) => state.category1);
  const category2 = useProductInfiniteQueryBody((state) => state.category2);
  const category3 = useProductInfiniteQueryBody((state) => state.category3);
  const isSortType = useProductInfiniteQueryBody((state) => state.isSortType);

  const requestBody = {
    dateDeparture: dateDeparture?.toISOString(),
    name: name,
    memo: memo,
    isActive: isActive,
    isMain: isMain,
    category1: category1 === "선택안함" ? undefined : category1,
    category2: category2,
    category3: category3,
    isSortType: isSortType,
  };

  return useInfiniteQuery({
    queryKey: [
      "productList",
      dateDeparture?.toISOString(),
      name,
      memo,
      isActive,
      isMain,
      category1,
      category2,
      category3,
      isSortType,
    ],
    queryFn: async ({
      pageParam = {
        first: size,
        ...requestBody,
        isActive,
        isMain,
      },
    }) => {
      const response = await gqlClient.request(
        ProductListInfinityQuery,
        pageParam
      );
      // postgresql 한글정렬 불가능 이가나다순은 클라이언트에서 정렬
      if (isSortType === "가나다순") {
        (
          response.productList &&
          response.productList.edges &&
          response.productList.edges
        ).sort((a: any, b: any) => {
          return a?.node?.name
            .trim()
            ?.localeCompare(b?.node?.name.trim(), "ko-KR");
        });
      }
      return response;
    },
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.productList.pageInfo.hasNextPage) return false;
      return {
        first: size,
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
  isMain: boolean | undefined;
  category1: string | undefined;
  category2: string | undefined;
  category3: string | undefined;
  isSortType: ProductSortType;
};

type Actions = {
  changeSortType: (isSortType: State["isSortType"]) => void;
  changeDateDeparture: (dateDeparture: State["dateDeparture"]) => void;
  changeName: (name: State["name"]) => void;
  changeMemo: (memo: State["memo"]) => void;
  changeSize: (size: State["size"]) => void;
  changeIsActive: (isActive: State["isActive"]) => void;
  changeIsMain: (isActive: State["isMain"]) => void;
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
  isMain: undefined,
  category1: undefined,
  category2: undefined,
  category3: undefined,
  size: 200,
  isSortType: "추천순",
};

export const useProductInfiniteQueryBody = create(
  immer<State & Actions>((set) => ({
    ...initialState,
    changeDateDeparture: (dateDeparture) => {
      set((state) => {
        state.dateDeparture = dateDeparture;
      });
    },
    changeSortType: (isSortType) => {
      set((state) => {
        state.isSortType = isSortType;
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
    changeIsMain: (isMain) => {
      set((state) => {
        state.isMain = isMain;
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
