import gqlClient from "@/gql/gqlClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ManagerListInfinityQuery } from "./crud";

const useManagerInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ["managerList"],
    queryFn: async ({
      pageParam = {
        first: 20,
      },
    }) => await gqlClient.request(ManagerListInfinityQuery, pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.managerList.pageInfo.hasNextPage) return false;
      return {
        after: lastPage.managerList.pageInfo.endCursor,
      };
    },
  });
};

export default useManagerInfiniteQuery;
