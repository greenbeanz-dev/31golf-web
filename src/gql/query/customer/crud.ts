import { gql } from "@/gql/__generated__/gql";

export const CustomerListInfinityQuery = gql(`
query customerListInfinityQuery(
  $first: Int, 
  $after: ID,
  $name: String,
  $phone: String,
  $email: String,
  $memo: String) {
    customerList(
      first: $first
      after: $after
      name: $name
      phone: $phone
      email: $email
      memo: $memo
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          memo
          name
          phone
          email
          fax
          isVillain
        }
      }
    }
  }
`);

export const CustomerAllListQuery = gql(`
query CustomerAllListQuery {
  customerList: customerList {
    edges {
      node {
        id
        memo
        name
        phone
        email
        fax
        isVillain
      }
    }
  }
}
`);

export const CreateCustomerQuery = gql(`
mutation CreateCustomer(
  $name: String!
  $phone: String
  $email: String
  $memo: String
  $fax: String
  $isVillain: Boolean
) {
  createCustomer(
    name: $name
    phone: $phone
    email: $email
    memo: $memo
    fax: $fax
    isVillain: $isVillain
  ) {
    id
  }
}
`);

export const UpdateCustomerByIdQuery = gql(`
mutation UpdateCustomerById(
  $id: ID!
  $name: String!
  $phone: String
  $email: String
  $memo: String
  $fax: String
  $isVillain: Boolean
) {
  updateCustomerById(
    id: $id
    name: $name
    phone: $phone
    email: $email
    memo: $memo
    fax: $fax
    isVillain: $isVillain
  ) {
    id
  }
}
`);

export const DeleteCustomerByIdQuery = gql(`
mutation DeleteCustomerById($customerId: ID!) {
  deleteCustomerById(id: $customerId) {
    id
  }
}
`);
