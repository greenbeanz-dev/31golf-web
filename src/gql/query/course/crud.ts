import { gql } from "@/gql/__generated__/gql";

export const CourseListInfinityQuery = gql(`
query courseListInfinityQuery(
  $first: Int,
  $after: ID,
  $name: String,
  $address: String,
  $category1: String,
  $category2: String,
  $category3: String) {
    courseList(
      first: $first
      after: $after
      name: $name
      address: $address
      category1: $category1
      category2: $category2
      category3: $category3
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
          fax
          partnerName
          phone
          category1
          category2
          category3
          priceCheck
          contact
          reservationCheck
          confirmCheck
          memo
        }
      }
    }
  }
`);

export const CreateCourseQuery = gql(`
mutation CreateCourse(
  $name: String!
  $address: String
  $fax: String
  $partnerName: String
  $phone: String
  $category1: String
  $category2: String
  $category3: String
  $priceCheck: String
  $contact: String
  $reservationCheck: String
  $confirmCheck: String
  $memo: String
) {
  createCourse(
    name: $name
    address: $address
    fax: $fax
    partnerName: $partnerName
    phone: $phone
    category1: $category1
    category2: $category2
    category3: $category3
    priceCheck: $priceCheck
    contact: $contact
    reservationCheck: $reservationCheck
    confirmCheck: $confirmCheck
    memo: $memo
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
  $fax: String
  $partnerName: String
  $phone: String
  $category1: String
  $category2: String
  $category3: String
  $priceCheck: String
  $contact: String
  $reservationCheck: String
  $confirmCheck: String
  $memo: String
) {
  updateCourseById(
    id: $id
    name: $name
    address: $address
    fax: $fax
    partnerName: $partnerName
    phone: $phone
    category1: $category1
    category2: $category2
    category3: $category3
    priceCheck: $priceCheck
    contact: $contact
    reservationCheck: $reservationCheck
    confirmCheck: $confirmCheck
    memo: $memo
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
