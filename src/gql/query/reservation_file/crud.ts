import { gql } from "@/gql/__generated__/gql";

export const FileListByReservationIdQuery =
  gql(`query FileListByReservationIdQuery($first: Int, $after: ID, $reservationId: ID) {
    fileListByReservationId(first: $first, after: $after, reservationId: $reservationId) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          reservationId
          name
          url
        }
      }
    }
  }`);

export const CreateReservationFileQuery = gql(`
  mutation CreateReservationFileQuery($reservationId: ID! $name: String! $url: String!) {
    createReservationFile(reservationId: $reservationId name: $name url: $url) {
      id
      reservationId
      name
      url
    }
  }
`);

export const DeleteReservationFileQuery = gql(`
  mutation DeleteReservationFileQuery($id: ID!) {
    deleteReservationFile(id: $id) {
      id
    }
  }
`);
