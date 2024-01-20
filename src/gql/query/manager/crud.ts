import { gql } from "@/gql/__generated__/gql";

export const ManagerListInfinityQuery = gql(`
query managerListInfinityQuery($first: Int, $after: ID) {
    managerList(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          name
          email
          phone
          role
        }
      }
    }
  }
`);

export const CreateManagerQuery = gql(`
mutation createManager(
  $name: String
  $email: String
  $phone: String
  $role: String
) {
  createManager(
    name: $name
    email: $email
    phone: $phone
    role: $role
  ) {
    id
  }
}
`);

export const UpdateManagerByIdQuery = gql(`
mutation updateManagerById(
  $id: ID!
  $name: String
  $email: String
  $phone: String
  $role: String
) {
  updateManagerById(
    id: $id
    name: $name
    email: $email
    phone: $phone
    role: $role
  ) {
    id
  }
}
`);
