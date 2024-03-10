import { gql } from "@/gql/__generated__/gql";

export const ReservationListInfinityQuery = gql(`
query reservationListInfinityQuery(
  $first: Int, 
  $after: ID, 
  $customerName: String, 
  $customerPhone: String, 
  $productName: String,
  $memo: String,
  $reservationStatusList:[String!], 
  $managerId: ID, 
  $dateDepartureStartAt: String, 
  $dateDepartureEndAt: String,
  $createdAtStartAt: String, 
  $createdAtEndAt: String,
  $sortColumn: String,
  $sortType: String,
  ) {
    reservationList(
      first: $first 
      after: $after 
      customerName: $customerName 
      customerPhone: $customerPhone
      productName: $productName
      memo: $memo
      reservationStatusList: $reservationStatusList 
      managerId : $managerId 
      dateDepartureStartAt : $dateDepartureStartAt 
      dateDepartureEndAt : $dateDepartureEndAt
      createdAtStartAt : $createdAtStartAt 
      createdAtEndAt : $createdAtEndAt
      sortColumn: $sortColumn
      sortType: $sortType
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            createdAt
            dateDeparture
            memo
            numPeople
            numTeam
            updatedAt
            customer {
              id
              name
              phone
              isVillain
            }
            manager {
              id
              name
            }
            product {
              id
              name
              price
            }
            status
            doneReceipt
            doneInvoice
            isCard
            noteCheckout
            priceCustom
            costCustom
            daysDay
            daysNight
        
          }
        }
    }
  }
`);

// 부가 상품 추가 부분 API를 추가 필요함

// 등록날짜, 출발일자, 예약자, 연락처, 인원, 일정(1박,2일), 상품, 부가상품, 메모
export const CreateReservationQueryByWeb = gql(`
mutation createReservationByWeb(
  $dateDeparture: String
  $numPeople: Int
  $numTeam: Int
  $status: String
  $customerId: Int
  $productId: Int
  $daysDay: Int
  $daysNight: Int
  $priceCustom: Float
) {
  createReservationByWeb(
    dateDeparture: $dateDeparture
    numPeople: $numPeople
    numTeam: $numTeam
    status: $status
    customerId: $customerId
    productId: $productId
    daysDay: $daysDay
    daysNight: $daysNight
    priceCustom: $priceCustom
  ) {
    id
    updatedAt
  }
}
`);

export const UpdateReservationByIdQuery = gql(`
mutation updateReservationById(
  $id: ID!
  $dateDeparture: String
  $memo: String
  $numPeople: Int
  $numTeam: Int
  $status: String
  $customerId: Int
  $managerId: Int
  $productId: Int
  $doneReceipt: Boolean
  $doneInvoice: Boolean
  $isCard: Boolean
  $noteCheckout: String
  $priceCustom: Float
  $costCustom: Float
  $priceAddon: Float
  $priceAddonMemo: String
  $priceAddonSub: Float
  $priceAddonSubMemo: String
  $daysDay: Int
  $daysNight: Int
  $smsReservation: String
  $smsReservationSub: String
  $smsConfirmation: String
  $smsCheckout: String
) {
  updateReservationById(
    id: $id
    dateDeparture: $dateDeparture
    memo: $memo
    numPeople: $numPeople
    numTeam: $numTeam
    status: $status
    customerId: $customerId
    managerId: $managerId
    productId: $productId
    doneReceipt: $doneReceipt
    doneInvoice: $doneInvoice
    isCard: $isCard
    noteCheckout: $noteCheckout
    priceCustom: $priceCustom
    costCustom: $costCustom
    priceAddon: $priceAddon
    priceAddonMemo: $priceAddonMemo
    priceAddonSub: $priceAddonSub
    priceAddonSubMemo: $priceAddonSubMemo
    daysDay: $daysDay
    daysNight: $daysNight
    smsReservation: $smsReservation
    smsReservationSub: $smsReservationSub
    smsConfirmation: $smsConfirmation
    smsCheckout: $smsCheckout
  ) {
    id
    updatedAt
  }
}`);

export const DeleteReservationByIdQuery = gql(`
mutation DeleteReservationById($reservationId: ID!) {
  deleteReservationById(id: $reservationId) {
    id
  }
}
`);

export const ReservationByIdQuery = gql(`
query reservationById($id: ID!) {
  reservationById(id: $id) {
  				id
          createdAt
          dateDeparture
          memo
          numPeople
          numTeam
          updatedAt
          customer {
            id
            name
            phone
          }
          manager {
            id
            name
          }
          product {
            id
            name
            price
            cost
          }
          status
          doneReceipt
          doneInvoice
          isCard
          noteCheckout
          priceCustom
          costCustom
          priceAddon
          priceAddonMemo
          priceAddonSub
          priceAddonSubMemo
          daysDay
          daysNight
          smsReservation
          smsReservationSub
          smsConfirmation
          smsCheckout
      
  }
}
`);
