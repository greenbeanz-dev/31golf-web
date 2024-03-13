import gqlClient from "@/gql/gqlClient";
import { CourseListInfinityQuery } from "@/gql/query/course/crud";
import { useInfiniteQuery } from "@tanstack/react-query";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useCourseInfiniteQuery = () => {
  const name = useCourseInfiniteQueryBody((state) => state.name);
  const address = useCourseInfiniteQueryBody((state) => state.address);
  const size = useCourseInfiniteQueryBody((state) => state.size);

  const category1 = useCourseInfiniteQueryBody((state) => state.category1);
  const category2 = useCourseInfiniteQueryBody((state) => state.category2);
  const category3 = useCourseInfiniteQueryBody((state) => state.category3);

  const requestBody = {
    name: name,
    address: address,
    category1: category1 === "선택안함" ? undefined : category1,
    category2: category2,
    category3: category3,
  };

  return useInfiniteQuery({
    queryKey: ["courseList", name, address, size],
    queryFn: async ({
      pageParam = {
        first: size,
        ...requestBody,
      },
    }) => await gqlClient.request(CourseListInfinityQuery, pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.courseList.pageInfo.hasNextPage) return false;
      return {
        after: lastPage.courseList.pageInfo.endCursor,
        ...requestBody,
      };
    },
  });
};

export default useCourseInfiniteQuery;

type State = {
  size: number;
  name: string;
  address: string;
  category1: string | undefined;
  category2: string | undefined;
  category3: string | undefined;
};

type Actions = {
  changeName: (name: State["name"]) => void;
  changeAddress: (address: State["address"]) => void;
  changeSize: (size: State["size"]) => void;
  changeCategory1: (category1: State["category1"]) => void;
  changeCategory2: (category2: State["category2"]) => void;
  changeCategory3: (category3: State["category3"]) => void;
  reset: () => void;
};

const initialState: State = {
  size: 20,
  name: "",
  address: "",
  category1: undefined,
  category2: undefined,
  category3: undefined,
};

export const useCourseInfiniteQueryBody = create(
  immer<State & Actions>((set) => ({
    ...initialState,
    changeName: (name) => {
      set((state) => {
        state.name = name;
      });
    },
    changeAddress: (address) => {
      set((state) => {
        state.address = address;
      });
    },
    changeSize: (size) => {
      set((state) => {
        state.size = size;
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
