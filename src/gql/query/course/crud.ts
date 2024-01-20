import { gql } from "@/gql/__generated__/gql";

export const CourseListInfinityQuery = gql(`
query courseListInfinityQuery(
  $first: Int,
  $after: ID,
  $name: String,
  $address: String) {
    courseList(
      first: $first
      after: $after
      name: $name
      address: $address
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          name
          address
          city
          country
          fax
          partnerName
          phone
          state
        }
      }
    }
  }
`);

export const CreateCourseQuery = gql(`
mutation CreateCourse(
  $name: String!
  $address: String
  $city: String
  $country: String
  $fax: String
  $partnerName: String
  $phone: String
  $state: String
) {
  createCourse(
    name: $name
    address: $address
    city: $city
    country: $country
    fax: $fax
    partnerName: $partnerName
    phone: $phone
    state: $state
  ) {
    id
  }
}
`);

export const UpdateCourseByIdQuery = gql(`
mutation UpdateCourseById(
  $id: ID!
  $name: String!
  $address: String
  $city: String
  $country: String
  $fax: String
  $partnerName: String
  $phone: String
  $state: String
) {
  updateCourseById(
    id: $id
    name: $name
    address: $address
    city: $city
    country: $country
    fax: $fax
    partnerName: $partnerName
    phone: $phone
    state: $state
  ) {
    id
  }
}
`);

export const DeleteCourseByIdQuery = gql(`
mutation DeleteCourseById(
  $id: ID!
) {
  deleteCourseById(
    id: $id
  ) {
    id
  }
}
`);
