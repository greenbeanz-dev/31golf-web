import { gql } from "@/gql/__generated__/gql";

export const ReservationProductListQuery = gql(`
query reservationProductListQuery(
  $first: Int, 
  $after: ID,
  $reservationId: ID,
  $productId: ID,) {
    reservationProductList(
      first: $first
      after: $after
      reservationId: $reservationId
      productId: $productId
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          product {
            id
            name
            dateDeparture
            price
            cost
          }
        }
      }
    }
  }
`);

// export const ProductListByReservationIdQuery = gql(`
//   query productListByReservationIdQuery($reservationId: Int!) {
//     productListByReservationId(reservationId: $reservationId) {
//       id
//     }
//   }
// `);

export const ReservationProductByIdQuery = gql(`
query ReservationProductById($id: ID!) {
  reservationProductById(id: $id) {
    id
    faxType
    row01
    row02
    row03
    row04
    row05
    row06
    row07
    row08
    row09
    row10
    row11
  }
}
`);

export const ProductListByReservationIdQuery =
  gql(`query ProductListByReservationIdQuery($first: Int, $after: ID, $reservationId: ID) {
    productListByReservationId(first: $first, after: $after, reservationId: $reservationId) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          faxType
          row01
          row02
          row03
          row04
          row05
          row06
          row07
          row08
          row09
          row10
          row11
          reservationId
          product {
            id
            name
            price
            cost
          }
        }
      }
    }
  }`);

export const CreateReservationProductQuery = gql(`
  mutation createReservationProduct($reservationId: ID!, $productId: ID!) {
    createReservationProduct(reservationId: $reservationId, productId: $productId) {
      id
      product {
        id
        name
        dateDeparture
        price
        cost
      }
    }
  }
`);

export const UpdateReservationProductQuery = gql(`
  mutation updateReservationProduct(
    $id: ID!,
    $faxType: String,
    $row01: String,
    $row02: String,
    $row03: String,
    $row04: String,
    $row05: String,
    $row06: String,
    $row07: String,
    $row08: String,
    $row09: String,
    $row10: String,
    $row11: String,
  ) {
    updateReservationProduct(
      id: $id,
      faxType: $faxType,
      row01: $row01,
      row02: $row02,
      row03: $row03,
      row04: $row04,
      row05: $row05,
      row06: $row06,
      row07: $row07,
      row08: $row08,
      row09: $row09,
      row10: $row10,
      row11: $row11,
    ) {
      id    
    }
  }
`);

export const DeleteReservationProductQuery = gql(`
  mutation deleteReservationProduct($id: ID!) {
    deleteReservationProduct(id: $id) {
      id
    }
  }
`);
