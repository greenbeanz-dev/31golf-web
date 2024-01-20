import { gql } from "@/gql/__generated__/gql";

export const MessageHistoryListInfinityQuery =
  gql(`query MessageHistoryListInfinityQuery($first: Int, $after: ID, $reservationId: ID) {
    messageHistoryList(first: $first, after: $after, reservationId: $reservationId) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          content
          reservationId
          type
          status
          sendDate
        }
      }
    }
  }`);
