import gqlClient from "@/gql/gqlClient";
import { BlockListInfinityQuery } from "@/gql/query/block/crud";
import { useInfiniteQuery } from "@tanstack/react-query";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useBlockInfiniteQuery = () => {
  const dateDeparture = useBlockInfiniteQueryBody(
    (state) => state.dateDeparture
  );
  const name = useBlockInfiniteQueryBody((state) => state.name);
  const memo = useBlockInfiniteQueryBody((state) => state.memo);
  const note = useBlockInfiniteQueryBody((state) => state.note);
  const teeOff = useBlockInfiniteQueryBody((state) => state.teeOff);
  const blockStatus = useBlockInfiniteQueryBody((state) => state.blockStatus);

  const requestBody = {
    dateDeparture: dateDeparture?.toISOString(),
    name: name,
    memo: memo,
    note: note,
    teeOff: teeOff,
    blockStatusList: blockStatus,
  };

  return useInfiniteQuery({
    queryKey: [
      "blockList",
      dateDeparture?.toISOString(),
      name,
      memo,
      note,
      teeOff,
      blockStatus.join(""),
    ],
    queryFn: async ({
      pageParam = {
        first: 10,
        ...requestBody,
      },
    }) => await gqlClient.request(BlockListInfinityQuery, pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.blockList.pageInfo.hasNextPage) return false;
      return {
        after: lastPage.blockList.pageInfo.endCursor,
        ...requestBody,
      };
    },
  });
};

export default useBlockInfiniteQuery;

type State = {
  dateDeparture: Date | undefined;
  name: string;
  memo: string;
  note: string;
  teeOff: string;
  blockStatus: string[];
};

type Actions = {
  changeDateDeparture: (dateDeparture: State["dateDeparture"]) => void;
  changeName: (name: State["name"]) => void;
  changeMemo: (memo: State["memo"]) => void;
  changeNote: (note: State["note"]) => void;
  changeTeeOff: (teeOff: State["teeOff"]) => void;
  changeBlockStatus: (blockStatus: State["blockStatus"]) => void;
  reset: () => void;
};

const initialState: State = {
  dateDeparture: undefined,
  name: "",
  memo: "",
  note: "",
  teeOff: "",
  blockStatus: [],
};

export const useBlockInfiniteQueryBody = create(
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
    changeNote: (note) => {
      set((state) => {
        state.note = note;
      });
    },
    changeTeeOff: (teeOff) => {
      set((state) => {
        state.teeOff = teeOff;
      });
    },
    changeBlockStatus: (blockStatus) => {
      set((state) => {
        state.blockStatus = blockStatus;
      });
    },
    reset: () => set(initialState),
  }))
);
