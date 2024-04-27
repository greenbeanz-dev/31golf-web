import { gql } from "@/gql/__generated__/gql";

export const RequestListInfinityQuery = gql(`
query requestListInfinityQuery(
  $first: Int, 
  $after: ID,
  $createdAt: String,
  $dateArrival: String,
  $dateOperation: String,
  $customerName: String,
  $customerPhone: String,
  $requestContent: String,
  $golfCourse: String,
  $rowStyle: String) {
    requestList(
      first: $first
      after: $after
      createdAt: $createdAt
      dateArrival: $dateArrival
      dateOperation: $dateOperation
      customerName: $customerName
      customerPhone: $customerPhone
      requestContent: $requestContent
      golfCourse: $golfCourse
      rowStyle: $rowStyle) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          createdAt
          updatedAt
          dateArrival
          dateDeparture
          memo
          numPeople
          numTeam 
          requestContent
          customer {
            id
            name
            phone
          }
          isReservation
          isCanceled
          dateOperation
          golfCourse
          rowStyle
        }
      }
    }
  }
`);

export const CreateRequestQuery = gql(`
mutation createRequest(
  $dateArrival: String
  $dateDeparture: String
  $memo: String
  $numPeople: Int
  $numTeam: Int
  $requestContent: String
  $customerId: Int
  $isReservation: Boolean
  $isCanceled: Boolean
  $dateOperation: String
  $golfCourse: String
  $isWeb: Boolean
) {
  createRequest(
    dateArrival: $dateArrival
    dateDeparture: $dateDeparture
    memo: $memo
    numPeople: $numPeople
    numTeam: $numTeam
    requestContent: $requestContent
    customerId: $customerId
    isReservation: $isReservation
    isCanceled: $isCanceled
    dateOperation: $dateOperation
    golfCourse: $golfCourse
    isWeb: $isWeb
  ) {
    id
    createdAt
    updatedAt
    dateArrival
    dateDeparture
    memo
    numPeople
    numTeam 
    requestContent
    customerId
    isReservation
    isCanceled
    dateOperation
    golfCourse
    isWeb
  }
}
`);

export const UpdateRequestByIdQuery = gql(`
mutation updateRequestById(
  $id: ID!
  $dateArrival: String
  $dateDeparture: String
  $memo: String
  $numPeople: Int
  $numTeam: Int
  $requestContent: String
  $customerId: Int
  $isReservation: Boolean
  $isCanceled: Boolean
  $dateOperation: String
  $golfCourse: String
  $rowStyle: String
) {
  updateRequestById(
    id: $id
    dateArrival: $dateArrival
    dateDeparture: $dateDeparture
    memo: $memo
    numPeople: $numPeople
    numTeam: $numTeam
    requestContent: $requestContent
    customerId: $customerId
    isReservation: $isReservation
    isCanceled: $isCanceled
    dateOperation: $dateOperation
    golfCourse: $golfCourse
    rowStyle: $rowStyle
  ) {
    id
    createdAt
    updatedAt
    dateArrival
    dateDeparture
    memo
    numPeople
    numTeam 
    requestContent
    customerId
    isReservation
    isCanceled
    dateOperation
    golfCourse
    rowStyle
  }
}`);

export const RequestByIdQuery = gql(`
  query requestById($id: ID!) {
    requestById(id: $id) {
      id
      createdAt
      updatedAt
      dateArrival
      dateDeparture
      memo
      numPeople
      numTeam 
      requestContent
      customer {
        id
        name
        phone
      }
      isReservation
      isCanceled
      dateOperation
      golfCourse
      rowStyle
    }
  }
`);

export const DeleteRequestByIdQuery = gql(`
mutation DeleteRequestByIdQuery($requestId: ID!) {
  deleteRequestById(id: $requestId) {
    id
  }
}
`);
