import { gql } from "@/gql/__generated__/gql";

export const TransactionListInfinityQuery =
  gql(`query transactionListInfinityQuery($first: Int, $after: ID, $reservationId: ID) {
    transactionList(first: $first, after: $after, reservationId: $reservationId) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          createdAt
          reservationId
          type
          method
          amount
          account
      		memo
          savingsAccountId
        }
      }
    }
  }`);

export const CreateTransactionQuery = gql(`
mutation CreateTransaction(
  $account: String
  $memo: String
  $method: String
  $type: String
  $reservationId: Int
  $amount: Float
  $savingsAccountId: Int
) {
  CreateTransaction(
    account: $account
    memo: $memo
    method: $method
    type: $type
    reservationId: $reservationId
    amount: $amount
    savingsAccountId: $savingsAccountId
  ) {
    id
  }
}
`);

export const DeleteTransactionByIdQuery = gql(`
mutation DeleteTransactionById($transactionId: ID!) {
  deleteTransactionById(id: $transactionId) {
    id
  }
}
`);
