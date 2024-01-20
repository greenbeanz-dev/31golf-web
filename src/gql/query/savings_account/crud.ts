import { gql } from "@/gql/__generated__/gql";

export const SavingsAccountListInfinityQuery = gql(`
query savingsAccountListInfinityQuery($first: Int, $after: ID,
  $name: String,
  $amount: Float,
  $type: String,
  $memo: String,
  $reservationId: Int) {
  savingsAccountList(
    first: $first 
    after: $after
    name: $name
    amount: $amount
    type: $type
    memo: $memo
    reservationId: $reservationId) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        name
        amount
        type
        memo
        reservationId
        balance
        createdAt
        reservation {
          id
          createdAt
          numPeople
          numTeam
          updatedAt
          dateDeparture
          customer {
            id
            name
            phone
          }
          product {
            id
            name
            isBlock
          }
        }
      }
    }
  }
}
`);

export const UpdateSavingsAccountByIdQuery = gql(`
mutation updateSavingsAccountByIdQuery(
  $id: ID!
  $name: String
  $amount: Float
  $type: String
  $memo: String
  $reservationId: Int
) {
  updateSavingsAccountById(
    id: $id
    name: $name
    amount: $amount
    type: $type
    memo: $memo
    reservationId: $reservationId
  ) {
    id
  }
}
`);
