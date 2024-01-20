import gqlClient from "@/gql/gqlClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { RequestListInfinityQuery } from "@/gql/query/request/crud";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useRequestInfiniteQuery = () => {
  const createdAt = useRequestInfiniteQueryBody((state) => state.createdAt);
  const dateArrival = useRequestInfiniteQueryBody((state) => state.dateArrival);
  const dateOperation = useRequestInfiniteQueryBody(
    (state) => state.dateOperation
  );
  const name = useRequestInfiniteQueryBody((state) => state.name);
  const requestContent = useRequestInfiniteQueryBody(
    (state) => state.requestContent
  );
  const memo = useRequestInfiniteQueryBody((state) => state.memo);

  return useInfiniteQuery({
    queryKey: [
      "requestList",
      createdAt?.toISOString(),
      dateArrival?.toISOString(),
      dateOperation?.toISOString(),
      name,
      requestContent,
      memo,
    ],
    queryFn: async ({
      pageParam = {
        first: 10,
        createdAt: createdAt?.toISOString(),
        dateArrival: dateArrival?.toISOString(),
        dateOperation: dateOperation?.toISOString(),
        name: name,
        requestContent: requestContent,
        memo: memo,
      },
    }) => await gqlClient.request(RequestListInfinityQuery, pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.requestList.pageInfo.hasNextPage) return false;
      return {
        after: lastPage.requestList.pageInfo.endCursor,
      };
    },
  });
};

export default useRequestInfiniteQuery;

type State = {
  createdAt: Date | undefined;
  dateArrival: Date | undefined;
  dateOperation: Date | undefined;
  name: string;
  requestContent: string;
  memo: string;
};

type Actions = {
  changeCreatedAt: (createdAt: State["createdAt"]) => void;
  changeDateArrival: (dateArrival: State["dateArrival"]) => void;
  changeDateOperation: (dateOperation: State["dateOperation"]) => void;
  changeName: (name: State["name"]) => void;
  changeRequestContent: (requestContent: State["requestContent"]) => void;
  changeMemo: (memo: State["memo"]) => void;
  reset: () => void;
};

const initialState: State = {
  createdAt: undefined,
  dateArrival: undefined,
  dateOperation: undefined,
  name: "",
  requestContent: "",
  memo: "",
};

export const useRequestInfiniteQueryBody = create(
  immer<State & Actions>((set) => ({
    ...initialState,
    changeCreatedAt: (createdAt) => {
      set((state) => {
        state.createdAt = createdAt;
      });
    },
    changeDateArrival: (dateArrival) => {
      set((state) => {
        state.dateArrival = dateArrival;
      });
    },
    changeDateOperation: (dateOperation) => {
      set((state) => {
        state.dateOperation = dateOperation;
      });
    },
    changeName: (name) => {
      set((state) => {
        state.name = name;
      });
    },
    changeRequestContent: (requestContent) => {
      set((state) => {
        state.requestContent = requestContent;
      });
    },
    changeMemo: (memo) => {
      set((state) => {
        state.memo = memo;
      });
    },
    reset: () => {
      set(() => {
        return initialState;
      });
    },
  }))
);
