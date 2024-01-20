import gqlClient from "@/gql/gqlClient";
import { CourseListInfinityQuery } from "@/gql/query/course/crud";
import { useInfiniteQuery } from "@tanstack/react-query";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useCourseInfiniteQuery = () => {
  const name = useCourseInfiniteQueryBody((state) => state.name);
  const address = useCourseInfiniteQueryBody((state) => state.address);
  const size = useCourseInfiniteQueryBody((state) => state.size);

  const requestBody = {
    name: name,
    address: address,
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
};

type Actions = {
  changeName: (name: State["name"]) => void;
  changeAddress: (address: State["address"]) => void;
  changeSize: (size: State["size"]) => void;
  reset: () => void;
};

const initialState: State = {
  size: 20,
  name: "",
  address: "",
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

    reset: () => set(initialState),
  }))
);
